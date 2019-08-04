import React, { Component } from 'react';
import { loadUserRepos } from '../../actions';
import { connect } from 'react-redux';

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

  render() {
    const { repos } = this.props;
    return (
      <div>
        {this.getYears().map(year => (
          <button>{year}</button>
        ))}
      </div>
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
