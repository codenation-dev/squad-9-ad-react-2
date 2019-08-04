import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import { loadDataRequest } from "../actions";
import { connect } from "react-redux";

class User extends Component {
  componentDidMount() {
    const user = this.props.match.params.nameUser;
    this.props.loadDataRequest(user);
  }

  render() {
    return (
      <div style={{ marginLeft: "50%", marginTop: "10%" }}>
        {this.props.user.map(item => {
          return <div>User: {item.login}</div>;
        })}
      </div>
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
