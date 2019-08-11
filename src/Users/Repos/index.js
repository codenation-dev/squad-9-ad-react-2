import React, { Component } from "react";
import { loadUserRepos } from "../../actions";
import { connect } from "react-redux";
import Repositories from './Repositories';
import './repos.css'

class UserRepos extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoading: true,
      repos: []
    };

    this.handleRepo = this.handleRepo.bind(this);
  }

  componentDidMount() {
    this.props.loadUserRepos(this.props.repos_url);
  }

  getYears = () => {
    const { repos } = this.props;
    const anos = repos.map((repo, i) => {
      return Number(repo.created_at.substr(0, 4));
    });

    return [...new Set(anos)].sort();
  };

  handleRepo = year => {
    const { repos } = this.props;
    const newRop = repos.filter(repo => {
      return Number(repo.created_at.substr(0, 4)) === year;
    });

    this.setState({ repos: newRop });
    return newRop;
  };

  forceUpdate = year => {
    this.handleRepo(year)
  };

  render() {
    return (
      <>
        <Repositories years={this.getYears()} repos={this.state.repos} forceUpdate={this.forceUpdate}/>
      </>
    );
  }
}

const mapStateToProps = state => {
  return {
    repos: state.getUserRepos.repos
  };
};
export default connect(
  mapStateToProps,
  { loadUserRepos }
)(UserRepos);
