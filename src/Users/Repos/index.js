import React, { Component } from "react";
import { loadUserRepos } from "../../actions";
import { connect } from "react-redux";

class UserRepos extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoading: true,
      repos: []
    };
  }

  componentDidMount() {
    this.props.loadUserRepos(this.props.repos_url);
  }

  getYears = () => {
    const { repos } = this.props;
    const anos = repos.map((repo, i) => {
      return Number(repo.created_at.substr(0, 4));
    });

    return [...new Set(anos)];
  };

  handleRepo = year => {
    const { repos } = this.props;
    const newRop = repos.filter(repo => {
      return Number(repo.created_at.substr(0, 4)) === year;
    });

    this.setState({ repos: newRop });
    return newRop;
  };

  render() {
    return (
      <>
        <div>
          {this.getYears().map(year => (
            <button onClick={() => this.handleRepo(year)}>{year}</button>
          ))}
        </div>
        <div>
          {this.state.repos.map(repo => {
            return (
              <>
                <a href={repo.html_url} target="_blank">
                  <div>{repo.name}</div>
                </a>
              </>
            );
          })}
        </div>
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
