import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { loadDataRequest } from '../actions';
import { connect } from 'react-redux';
import {
  CardPrincipal,
  CardUserInfo,
  UserAvatar,
  StatusMessage,
  CardUserInfoHeader,
  CardUserInfoContent,
  CardUserLogin
} from './styles';
import UserRepos from './Repos';
import { addUser } from '../actions/userBaseActions';
import { FormControl, FormGroup, InputGroup, Spinner } from 'react-bootstrap';

import NavBar2 from '../Nav/index2';

class User extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: ''
    };
  }
  async componentWillMount() {
    const user = this.props.match.params.query;
    await this.props.loadDataRequest(user);
  }

  componentWillReceiveProps(nextProps) {
    const username = nextProps.match.params.query;
    if (this.props.match.params.query !== username)
      this.props.loadDataRequest(username);
  }

  handleUserBase = () => {
    let {
      userData,
      match: {
        params: { query }
      }
    } = this.props;

    const { userBase, addUser } = this.props;

    const user = userBase.find(user => user.login === query);

    if (!user) {
      const { login, avatar_url } = [...userData][0];

      localStorage.setItem(
        'userBase',
        JSON.stringify([...userBase, { login, avatar_url }])
      );
      addUser({ login, avatar_url });
    }
  };

  render() {
    const { userData, error, isFetching, status, userBase } = this.props;

    if (isFetching)
      return (
        <div style={{ marginTop: '15%', textAlign: 'center' }}>
          <Spinner animation='grow' />
          <Spinner animation='grow' />
          <Spinner animation='grow' />
        </div>
      );
    if (error)
      return (
        <StatusMessage>
          <span style={{ color: 'red' }}>{status}</span> Usuário não encontrado
        </StatusMessage>
      );

    return (
      <>
        {userData && userData.length > 0 && userBase && this.handleUserBase()}
        <NavBar2 />
        {userData.map(user => {
          return (
            <CardPrincipal s>
              <div style={{ display: 'flex', marginTop: '8rem' }}>
                <UserAvatar src={user.avatar_url} />
                <CardUserInfo>
                  <CardUserInfoHeader>
                    <h2>
                      <a
                        href={user.html_url}
                        target='_blank'
                        rel='noopener noreferrer'
                      >
                        {user.name}
                      </a>
                    </h2>
                    <CardUserLogin>{user.login}</CardUserLogin>
                  </CardUserInfoHeader>
                  <CardUserInfoContent>
                    <div>Repositórios públicos: {user.public_repos}</div>
                    <div>Seguidores: {user.followers}</div>
                    <div>Seguindo: {user.following}</div>
                  </CardUserInfoContent>
                </CardUserInfo>
              </div>
              {user.login && <UserRepos repos_url={user.repos_url} />}
            </CardPrincipal>
          );
        })}
      </>
    );
  }
}

const mapStateToProps = state => {
  const { data, error, isFetching, status } = state.userSearch;
  const { userBase } = state;
  return {
    userBase,
    userData: data || null,
    error,
    isFetching,
    status
  };
};

export default connect(
  mapStateToProps,
  { loadDataRequest, addUser }
)(withRouter(User));
