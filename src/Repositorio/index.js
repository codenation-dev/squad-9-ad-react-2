import React, { Component } from 'react';
import axios from 'axios';
import Pagination from '../Paginacao';
import RepoData from './RepoData';
import { loadDataRequestRepos } from '../actions/repoActions';
import { connect } from 'react-redux';
import { Container, Jumbotron } from 'react-bootstrap';

class Paginacao extends Component {
  constructor(props) {
    super(props);
    this.query = props.match.params.repoQuery;
    //this.total_count = 0;
    this.state = {
      total_count: null,
      pagina_atual: 1
    };
  }

  componentDidMount() {
    // this.props.loadDataRequestRepos(this.query, 1);
    axios
      .get(`https://api.github.com/search/repositories?q=${this.query}`)
      .then(res => this.setState({ total_count: res.data.total_count }));
  }

  onPageChanged = data => {
    let { currentPage } = data;
    //console.log(data);
    // if (currentPage === 1) {
    // } else {
    this.setState({ pagina_atual: currentPage });
    //this.props.loadDataRequestRepos(this.query, currentPage);
    //}
  };

  render() {
    return (
      <div style={{ margin: '100px' }}>
        <Jumbotron fluid style={{ marginLeft: '55px' }}>
          <Container>
            <h1>{this.query}</h1>
            <p>
              This is a modified jumbotron that occupies the entire horizontal
              space of its parent.
            </p>
          </Container>
        </Jumbotron>
        <Pagination
          totalRecords={this.state.total_count}
          pageLimit={30}
          pageNeighbours={2}
          defaultCurrent={1}
          onPageChanged={e => this.onPageChanged(e)}
          key={this.state.total_count}
        />

        {this.state.total_count && (
          <RepoData pagina={this.state.pagina_atual} query={this.query} />
        )}
      </div>
    );
  }
}

const mapStateToProps = state => {
  const { data, error, isFetching, status, total_count } = state.repo;

  return {
    total_count
  };
};

export default connect(
  mapStateToProps,
  { loadDataRequestRepos }
)(Paginacao);
