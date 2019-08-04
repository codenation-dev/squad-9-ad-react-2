import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { loadDataRequest } from '../actions';
import { connect } from 'react-redux';
import {
  CardPrincipal,
  CardUserInfo,
  UserAvatar,
  StatusMessage
} from './styles';
import UserRepos from './Repos';

class User extends Component {
  componentDidMount() {
    const user = this.props.match.params.nameUser;
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
      <CardPrincipal>
        {user.map(user => {
          return (
            <>
              {/*<Logo className="logo" src={logoGithub} alt="Logo" />*/}
              <UserAvatar src={user.avatar_url} />
              <CardUserInfo>
                User:{' '}
                <a
                  href={user.html_url}
                  target='_blank'
                  rel='noopener noreferrer'
                >
                  {user.login}
                </a>
              </CardUserInfo>
              {user.login && <UserRepos repos_url={user.repos_url} />}
            </>
          );
        })}
      </CardPrincipal>
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
