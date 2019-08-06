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
import UserSearchBar from '../Nav/UserSearchBar';
import { Spinner } from 'react-bootstrap';

class User extends Component {
  componentDidMount() {
    const user = this.props.match.params.nameUser;
    this.props.loadDataRequest(user);
  }

  handleRequest = user => {
    this.props.loadDataRequest(user);
  };

  render() {
    const { user, error, isFetching, status } = this.props;

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
        <div className='text-center'>
          <UserSearchBar handleRequest={this.handleRequest} />
        </div>

        {user.map(user => {
          return (
            <CardPrincipal>
              <div style={{ display: 'flex', marginTop: '8rem' }}>
                {/*<Logo className="logo" src={logoGithub} alt="Logo" />*/}
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

function mapStateToProps(state) {
  const { data, error, isFetching, status } = state.userSearch;
  return {
    user: data,
    error,
    isFetching,
    status
  };
}

export default connect(
  mapStateToProps,
  { loadDataRequest }
)(withRouter(User));
