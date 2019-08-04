
import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import { loadDataRequest } from "../actions";
import logoGithub from "../images/git-img.png";
import { connect } from "react-redux";
import { CardPrincipal, CardUserInfo, Logo } from "./styles";

class User extends Component {
  componentDidMount() {
    const user = this.props.match.params.nameUser;
    this.props.loadDataRequest(user);
  }

  render() {
    return (
      <CardPrincipal>
        {this.props.user.map(item => {
          return (
            <>
              <Logo className="logo" src={logoGithub} alt="Logo" />
              <CardUserInfo>User: {item.login}</CardUserInfo>
            </>
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
