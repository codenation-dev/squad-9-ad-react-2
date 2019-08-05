import React, { Component } from 'react';
import { SidebarStyle, LegendaSidebar } from './styles';
import IconButton from '@material-ui/core/IconButton';
import Icon from '@material-ui/core/Icon';

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

  render() {
    return (
      <SidebarStyle width={this.state.status}>
        <div
          style={{
            marginTop: '100px',
            position: 'absolute',
            textAlign: 'center'
          }}
        >
          <div>
            <Icon onClick={this.handleSidebar}>settings</Icon>
            <LegendaSidebar>{this.state.status ? 'Menu' : ''}</LegendaSidebar>
          </div>
          <div>
            <Icon>home</Icon>
            <LegendaSidebar>{this.state.status ? 'Inicio' : ''}</LegendaSidebar>
          </div>
          <div>
            <Icon>backspace</Icon>
            <LegendaSidebar>{this.state.status ? 'Limpar' : ''}</LegendaSidebar>
          </div>
          <div>
            <Icon>group</Icon>
            <LegendaSidebar>
              {this.state.status ? 'Pesquisados' : ''}
            </LegendaSidebar>
          </div>
        </div>
      </SidebarStyle>
    );
  }
}

export default Sidebar;
