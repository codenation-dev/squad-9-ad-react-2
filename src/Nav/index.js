import React, { Component } from "react";
import { Nav, NavPesquisa, Input } from "./styles";
import { withRouter } from "react-router-dom";
import Button from "@material-ui/core/Button";

class NavBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: ""
    };
  }

  handleValue = ({ target: { value, name } }) => {
    this.setState({ [name]: value });
  };

  handleSubmit = e => {
    e.preventDefault();
    this.props.history.push(this.state.user);
    this.setState({ user: "" });
  };

  render() {
    return (
      <Nav>
        <form onSubmit={e => this.handleSubmit(e)}>
          <NavPesquisa>
            <Input
              id="standard-multiline-flexible"
              label="Users"
              name={"user"}
              value={this.state.user}
              onChange={this.handleValue}
            />

            <Button
              onClick={e => this.handleSubmit(e)}
              variant="contained"
              color="default"
            >
              Pesquisar
            </Button>
          </NavPesquisa>
        </form>
      </Nav>
    );
  }
}

export default withRouter(NavBar);
