import React, { Component } from 'react';
import { connect } from 'react-redux';
import { loadDataRequestRepos } from '../actions/repoActions';
import Button from '@material-ui/core/Button';
import Pagination from '../Paginacao';

class Repositorio extends Component {
  constructor(props) {
    super(props);
    this.state = {
      pagina_atual: 0
    };
  }

  onPageChanged = data => {
    const { currentPage } = data;

    if (currentPage === 1) {
    } else {
      this.setState({ pagina_atual: currentPage });
      this.props.loadDataRequestRepos('java', currentPage);
    }
  };

  render() {
    return (
      <div>
        {console.log('params', this.props.match.params.repoQuery)}
        <Button
          onClick={() => this.props.loadDataRequestRepos('java', 1)}
          variant='contained'
          color='default'
        />

        {this.props.total_count && (
          <Pagination
            totalRecords={this.props.total_count}
            pageLimit={30}
            pageNeighbours={1}
            defaultCurrent={this.state.pagina_atual}
            onPageChanged={e => this.onPageChanged(e)}
            key={this.state.pagina_atual}
          />
        )}
        {this.props.repo && (
          <div>
            {this.props.repo.items.map(item => {
              return <div>{item.id}</div>;
            })}
          </div>
        )}
      </div>
    );
  }
}

const mapStateToProps = state => {
  const { data, error, isFetching, status, total_count } = state.repo;

  return {
    repo: data.length > 0 ? data[0] : null,
    total_count: total_count,
    error,
    isFetching,
    status
  };
};

export default connect(
  mapStateToProps,
  { loadDataRequestRepos }
)(Repositorio);
