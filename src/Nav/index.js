import React, { Component } from "react";
import { Nav, NavPesquisa, Input } from "./styles";
import { withRouter } from "react-router-dom";
import Button from "@material-ui/core/Button";
import Repositorio from "../Repositorio";
import { Col, Container, FormControl, InputGroup } from "react-bootstrap";
import Icon from "@material-ui/core/Icon";
import logo from "../images/git-img.png";
import { Provider } from "react-redux";
import Switch from "@material-ui/core/Switch";

class NavBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      query: "",
      searchRepos: false
    };
  }

  handleValue = ({ target: { value, name } }) => {
    this.setState({ [name]: value });
  };

  handleSubmit = e => {
    const { query, searchRepos } = this.state;
    const { push } = this.props.history;

    e.preventDefault();

    if (searchRepos) push(`/repositories/${query}`);
    else push(query);

    this.setState({ query: "" });
  };

  handleSwitch = () => {
    this.setState({
      searchRepos: !this.state.searchRepos
    });
  };

  render() {
    const { searchRepos, query } = this.state;
    return (
      <div
        style={{
          textAlign: "center",
          width: "50%",
          marginTop: "16%",
          marginLeft: "27%"
        }}
      >
        <div>
          <img src={logo} width={"350px"} alt="github-logo" />
        </div>
        {/*<Repositorio/>*/}

        <Switch
          checked={searchRepos}
          onChange={this.handleSwitch}
          value={searchRepos ? "repositories" : "username"}
          inputProps={{ "aria-label": "secondary checkbox" }}
        />
        <form onSubmit={e => this.handleSubmit(e)}>
          <InputGroup className="mb-3">
            <FormControl
              placeholder={`Search GitHub ${
                searchRepos ? "Repositories" : "Users"
              }`}
              name={"query"}
              value={query}
              onChange={this.handleValue}
            />
            <InputGroup.Append>
              <InputGroup.Text id="basic-addon2">
                <Icon type="submit">search</Icon>
              </InputGroup.Text>
            </InputGroup.Append>
          </InputGroup>
        </form>
      </div>
    );
  }
}

export default withRouter(NavBar);
