import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { loadDataRequest } from '../actions';
import { connect } from 'react-redux';
import { CardPrincipal, CardUserInfo, UserAvatar,  CardUserInfoHeader, CardUserInfoContent} from './styles';
import { display } from '@material-ui/system';

class User extends Component {
  componentDidMount() {
    const user = this.props.match.params.nameUser;
    this.props.loadDataRequest(user);
  }

  render() {
    return (
      <CardPrincipal>
        {this.props.user.map(user => {
          console.log(user)

          return (
            <div style={{display: "flex"}}>
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
                  <span style={{fontSize: "0.75em"}}>{user.login}</span>
                </CardUserInfoHeader>
                <CardUserInfoContent>
                  <div>Repositórios públicos: {user.public_repos}</div>
                  <div>Seguidores: {user.followers}</div>
                  <div>Seguindo: {user.following}</div>
                </CardUserInfoContent>
              </CardUserInfo>
            </div>
          );
        })}
      </CardPrincipal>
    );
  }
}

function mapStateToProps(state) {
  return {
    user: state.userSearch.data,
    status: state.userSearch.status
  };
}

export default connect(
  mapStateToProps,
  { loadDataRequest }
)(withRouter(User));
