import React, { Component } from 'react';
import { connect } from 'react-redux';
import { loadDataRequestRepos } from '../actions/repoActions';
import Button from '@material-ui/core/Button';
import Pagination from '../Paginacao';

class Repositorio extends Component {
  constructor(props) {
    super(props);
    this.query = props.match.params.repoQuery;
    this.state = {
      pagina_atual: 0,
      totalRecords: null
    };
    this.pagina = 0;
    this.totalRecords = props.totalRecords;
  }

  componentDidMount() {
    this.props.loadDataRequestRepos(this.query, 1);
    //this.setState({ totalRecords: this.props.total_count });
    this.totalRecords = console.log('this.mount');
  }

  componentDidUpdate(prevProps) {
    return <h1>locura</h1>;
  }

  // componentWillUnmount() {
  //   console.log('unmounting');
  // }

  // shouldComponentUpdate(nextProps, nextState) {
  //   console.log(
  //     'this.props',
  //     this.props.total_count,
  //     'nextProps',
  //     nextProps.total_count
  //   );
  //   return console.log(
  //     this.props.total_count === nextProps.total_count ? false : true
  //   );
  //   // this.props.title !== nextProps.title ||
  //   // this.state.input !== nextState.input
  // }

  onPageChanged = data => {
    let { currentPage } = data;
    console.log(data);
    if (currentPage === 1) {
    } else {
      // this.setState({ pagina_atual: currentPage });
      this.pagina = currentPage;
      //this.props.loadDataRequestRepos(this.query, currentPage);
    }
  };

  render() {
    return (
      <div style={{ textAlign: 'center' }}>
        {this.props.repo && (
          <div className='row'>
            {this.props.repo.items.map(item => {
              return <div className='col-4'>{item.id}</div>;
            })}
          </div>
        )}

        {this.props.total_count && (
          <Pagination
            totalRecords={this.props.total_count}
            pageLimit={30}
            pageNeighbours={2}
            defaultCurrent={this.pagina}
            onPageChanged={e => this.onPageChanged(e)}
            key={this.pagina}
          />
        )}
        {console.log(this.pagina)}
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
