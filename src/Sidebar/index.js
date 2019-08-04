import React, { Component } from "react";
import { SidebarStyle, LegendaSidebar } from "./styles";
import IconButton from "@material-ui/core/IconButton";
import Icon from "@material-ui/core/Icon";

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
        <div>
          <IconButton onClick={this.handleSidebar} color={"white"}>
            <Icon>settings</Icon>
            <LegendaSidebar>{this.state.status ? "Menu" : ""}</LegendaSidebar>
          </IconButton>
        </div>
        <div>
          <IconButton>
            <Icon>home</Icon>
            <LegendaSidebar>{this.state.status ? "Inicio" : ""}</LegendaSidebar>
          </IconButton>
        </div>
        <div>
          <IconButton>
            <Icon>backspace</Icon>
            <LegendaSidebar>{this.state.status ? "Limpar" : ""}</LegendaSidebar>
          </IconButton>
        </div>
        <div>
          <IconButton>
            <Icon>group</Icon>
            <LegendaSidebar>
              {this.state.status ? "Pesquisados" : ""}
            </LegendaSidebar>
          </IconButton>
        </div>
      </SidebarStyle>
    );
  }
}

export default Sidebar;
