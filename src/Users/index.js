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
  CardUserInfoContent
} from './styles';
import UserRepos from './Repos';
import Navbar2 from '../Nav/index2';

class User extends Component {
  componentDidMount() {
    const user = this.props.match.params.nameUser;
    this.props.loadDataRequest(user);
  }
  
  handleRequest = (user) => {
    this.props.loadDataRequest(user);
  }

  render() {
    const { user, error, isFetching, status } = this.props;

    if (isFetching) return <StatusMessage>Loading data...</StatusMessage>;
    if (error)
      return (
        <StatusMessage>
          <span style={{ color: 'red' }}>{status}</span> Usuário não encontrado
        </StatusMessage>
      );

    return (
      <>
        <Navbar2 handleRequest={this.handleRequest} />
        <CardPrincipal>
          {user.map(user => {
            return (
              <div style={{ display: 'flex' }}>
                {/*<Logo className="logo" src={logoGithub} alt="Logo" />*/}
                <UserAvatar src={user.avatar_url} />
                <CardUserInfo>
                  <CardUserInfoHeader>
                    <h3>
                      <a
                        href={user.html_url}
                        target='_blank'
                        rel='noopener noreferrer'
                      >
                        {user.name}
                      </a>
                    </h3>
                    <span style={{ fontSize: '0.75em' }}>{user.login}</span>
                  </CardUserInfoHeader>
                  <CardUserInfoContent>
                    <div>Repositórios públicos: {user.public_repos}</div>
                    <div>Seguidores: {user.followers}</div>
                    <div>Seguindo: {user.following}</div>
                  </CardUserInfoContent>
                </CardUserInfo>

                {user.login && <UserRepos repos_url={user.repos_url} />}
              </div>
            );
          })}
        </CardPrincipal>
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
