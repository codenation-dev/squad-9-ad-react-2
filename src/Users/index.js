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

class User extends Component {
  componentDidMount() {
    const user = this.props.match.params.nameUser;
    this.props.loadDataRequest(user);
  }

  render() {
    const { user, error, isFetching } = this.props;

    if (isFetching) return <StatusMessage>Loading data...</StatusMessage>;
    if (error) return <StatusMessage>Usuário não encontrado</StatusMessage>;

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
            </>
          );
        })}
      </CardPrincipal>
    );
  }
}

function mapStateToProps(state) {
  const { data, error, isFetching } = state.userSearch;
  return {
    user: data,
    error,
    isFetching
  };
}

export default connect(
  mapStateToProps,
  { loadDataRequest }
)(withRouter(User));
