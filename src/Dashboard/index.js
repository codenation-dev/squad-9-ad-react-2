import React, { Component } from "react";
import { Dashboard } from "./styles";
import IconButton from "@material-ui/core/IconButton";
import Icon from "@material-ui/core/Icon";

export class Timeline extends Component {
  constructor(props) {
    super(props);
    this.state = {
      status: false
    };
  }

  handleDashboard = () => {
    this.setState({ status: !this.state.status });
  };

  render() {
    return (
      <Dashboard width={this.state.status}>
        <div>
          <IconButton onClick={() => this.handleDashboard()} color={"white"}>
            <Icon>settings</Icon>
          </IconButton>
        </div>
        <div>
          <IconButton>
            <Icon>home</Icon>
          </IconButton>
        </div>
        <div>
          <IconButton>
            <Icon>backspace</Icon>
          </IconButton>
        </div>
        <div>
          <IconButton>
            <Icon>group</Icon>
          </IconButton>
        </div>
      </Dashboard>
    );
  }
}
