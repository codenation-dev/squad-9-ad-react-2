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
    const { total_count, pagina_atual } = this.state;
    return (
      <div style={{ margin: '64px' }}>
        <Jumbotron fluid style={{ marginLeft: '55px' }}>
          <Container>
            <h1>{this.query}</h1>
            <p style={{ color: '#a6a6a6' }}>programming language</p>
          </Container>
        </Jumbotron>
        <Pagination
          totalRecords={total_count}
          pageLimit={30}
          pageNeighbours={2}
          defaultCurrent={1}
          onPageChanged={e => this.onPageChanged(e)}
          key={total_count}
        />
        {console.log(!!total_count)}

        {total_count ? (
          <RepoData pagina={pagina_atual} query={this.query} />
        ) : null}
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
