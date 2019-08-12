import React, { Component } from 'react';
import { SidebarStyle } from './styles';
import Icon from '@material-ui/core/Icon';
import { withRouter } from 'react-router-dom';
import { removeUsers, changeSearchWord } from '../actions/userBaseActions';

import { connect } from 'react-redux';
import UserList from './UserBase/UserList';

class Sidebar extends Component {
  constructor(props) {
    super(props);

    this.state = {
      status: false
    };
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.status !== this.state.status) {
      const docBody = document.querySelector('#doc-body');
      if (this.state.status) docBody.style.marginLeft = '55px';
      else docBody.style.marginLeft = '0';
    }
  }

  handleSidebar = () => {
    this.setState({ status: !this.state.status });
  };

  goToMainPage = () => {
    this.props.history.push('/');
    this.props.changeSearchWord('');
  };

  handleDeleteUser = e => {
    this.props.removeUsers();
    this.props.changeSearchWord('');
    this.props.userBase && this.props.history.push('/');
  };

  render() {
    return (
      <SidebarStyle width={this.state.status} id='sidebar'>
        <div>
          <span
            onClick={this.handleSidebar}
            style={{
              display: 'flex',
              verticalAlign: 'center',
              alignItems: 'center'
            }}
          >
            <Icon>settings</Icon>
            <span>
              <small style={{ marginLeft: '5px', fontSize: '13px' }}>
                {this.state.status ? 'MENU' : ''}
              </small>
            </span>
          </span>
          <span
            onClick={this.goToMainPage}
            style={{
              display: 'flex',
              verticalAlign: 'center',
              alignItems: 'center'
            }}
          >
            <Icon>home</Icon>
            <span>
              <small style={{ marginLeft: '5px', fontSize: '10px' }}>
                {this.state.status ? 'INICIO' : ''}
              </small>
            </span>
          </span>
          <span
            style={{
              display: 'flex',
              verticalAlign: 'center',
              alignItems: 'center'
            }}
            onClick={this.handleDeleteUser}
          >
            <Icon>backspace</Icon>
            <span>
              <small style={{ marginLeft: '5px', fontSize: '10px' }}>
                {this.state.status ? 'LIMPAR' : ''}
              </small>
            </span>
          </span>
        </div>
        <UserList />
      </SidebarStyle>
    );
  }
}

const mapStateToProps = state => {
  const { userBase } = state;
  return {
    userBase
  };
};

export default connect(
  mapStateToProps,
  { removeUsers, changeSearchWord }
)(withRouter(Sidebar));
