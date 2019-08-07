import React, { Component } from 'react';
import { SidebarStyle, LegendaSidebar } from './styles';
import Icon from '@material-ui/core/Icon';
import { withRouter } from 'react-router-dom';

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

  render() {
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
          >
            <Icon>backspace</Icon>
            <span>
              <small style={{ marginLeft: '5px', fontSize: '10px' }}>
                {this.state.status ? 'LIMPAR' : ''}
              </small>
            </span>
          </span>
          {/*<span style={{display: 'flex', verticalAlign: 'center', alignItems: 'center', }}>*/}
          {/*<Icon>group</Icon>*/}
          {/*<span><small style={{marginLeft: '5px', fontSize: '10px'}}>{this.state.status ? "PESQUISADOS" : ""}</small></span>*/}
          {/*</span>*/}
        </div>
      </SidebarStyle>
    );
  }
}

export default withRouter(Sidebar);
