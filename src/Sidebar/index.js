import React, { Component } from 'react';
import { SidebarStyle, LegendaSidebar } from './styles';
import Icon from '@material-ui/core/Icon';
import { withRouter } from 'react-router-dom';
import UserItem from './UserBase/UserItem';
import { removeUsers } from '../actions/userBaseActions';

import { connect } from 'react-redux';
import UserList from './UserBase/UserList';

class Sidebar extends Component {
  constructor(props) {
    super(props);

    this.state = {
      status: false
    };
  }

  handleSidebar = () => {
    this.setState({ status: !this.state.status });
  };

  goToMainPage = () => {
    this.props.history.push('/');
  };

  handleDeleteUser = e => {
    this.props.removeUsers();
  };

  render() {
    const { userBase } = this.props;
    return (
      <SidebarStyle width={this.state.status}>
        <div>
          <span
            style={{
              display: 'flex',
              verticalAlign: 'center',
              alignItems: 'center',
              marginTop: '220px'
            }}
          >
            <Icon onClick={this.handleSidebar}>settings</Icon>
            <span>
              <small style={{ marginLeft: '5px', fontSize: '10px' }}>
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
  { removeUsers }
)(withRouter(Sidebar));
// export default withRouter(Sidebar);
