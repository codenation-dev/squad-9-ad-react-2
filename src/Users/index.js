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
// import UserSearchBar from '../Nav/UserSearchBar';
import { FormControl, FormGroup, InputGroup, Spinner } from 'react-bootstrap';
// import { Nav } from '../Nav/styles';
// import Grid from '../Nav';
// import TextField from '@material-ui/core/TextField';
// import InputAdornment from '@material-ui/core/InputAdornment';
// import IconButton from '@material-ui/core/IconButton';
// import SearchIcon from '@material-ui/icons/Search';
// import Switch from '@material-ui/core/Switch';
// import logo from '../images/GitHub_Logo.png';
import NavBar2 from '../Nav/index2';

class User extends Component {
  constructor(props) {
    super(props);
    this.userBase = props.userBase;
  }
  componentWillMount() {
    const user = this.props.match.params.query;
    this.props.loadDataRequest(user);
  }

  componentDidMount() {}

  handleUserBase = () => {
    let {
      userData,
      match: {
        params: { query }
      }
    } = this.props;

    const { userBase } = this;

    const user = userBase.find(user => user.login === query);

    if (!user) {
      const { login, avatar_url } = [...userData][0];
      localStorage.setItem(
        'userBase',
        JSON.stringify([...userBase, { login, avatar_url }])
      );
    }
  };

  render() {
    const { userData, error, isFetching, status } = this.props;

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
        {userData &&
          userData.length > 0 &&
          this.userBase &&
          this.handleUserBase()}
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
  const { data, userBase, error, isFetching, status } = state.userSearch;
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
  { loadDataRequest }
)(withRouter(User));
