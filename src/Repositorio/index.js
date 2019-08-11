import React, { Component } from 'react';
import axios from 'axios';
import Pagination from './Paginacao';
import RepoData from './RepoData';
import { loadDataRequestRepos } from '../actions/repoActions';
import { changeSearchWord } from '../actions/userBaseActions';
import { connect } from 'react-redux';
import { Alert } from 'react-bootstrap';
import { PageHeader } from './styles';

class Paginacao extends Component {
  constructor(props) {
    super(props);
    this.query = props.match.params.query;
    this.state = {
      total_count: null,
      pagina_atual: 1
    };
  }

  componentWillMount() {
    this.props.changeSearchWord(this.props.match.params.query);
  }

  componentDidMount() {
    axios
      .get(`https://api.github.com/search/repositories?q=${this.query}`)
      .then(res => this.setState({ total_count: res.data.total_count }));
  }

  componentWillReceiveProps(nextProps) {
    const username = nextProps.match.params.query;
    if (this.props.match.params.query !== username)
      this.props.loadDataRequestRepos(username);
  }

  onPageChanged = data => {
    let { currentPage } = data;
    this.setState({ pagina_atual: currentPage });
  };

  render() {
    const { total_count, pagina_atual } = this.state;
    const { query } = this.props.match.params;
    return (
      <>
        <PageHeader className='container'>
          <div style={{ marginLeft: '50px', marginTop: '80px' }}>
            <Alert variant={'secondary'}>
              <h1>{query}</h1>
              <p style={{ color: '#a6a6a6' }}>programming language</p>
            </Alert>
          </div>

          <Pagination
            totalRecords={total_count}
            pageLimit={30}
            pageNeighbours={2}
            defaultCurrent={1}
            onPageChanged={e => this.onPageChanged(e)}
            key={total_count}
          />

          {total_count ? (
            <RepoData pagina={pagina_atual} query={this.query} />
          ) : null}
        </PageHeader>
      </>
    );
  }
}

const mapStateToProps = state => {
  const { total_count } = state.repo;

  return {
    total_count
  };
};

export default connect(
  mapStateToProps,
  { loadDataRequestRepos, changeSearchWord }
)(Paginacao);
