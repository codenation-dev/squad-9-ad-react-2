import React, { Component } from 'react';
import { connect } from 'react-redux';
import { loadDataRequestRepos } from '../actions/repoActions';
import Button from '@material-ui/core/Button';
import Pagination from '../Paginacao';
import {
  Card,
  Col,
  Container,
  FormControl,
  InputGroup,
  Image,
  Spinner,
  Jumbotron
} from 'react-bootstrap';

class RepoData extends Component {
  constructor(props) {
    super(props);
    this.state = {
      pagina_atual: 0,
      totalRecords: null
    };
  }

  componentDidUpdate(prevProps) {
    this.props.pagina !== prevProps.pagina &&
      this.props.loadDataRequestRepos(this.props.query, this.props.pagina);
  }

  // consultaApi = () => {
  //   this.props.loadDataRequestRepos(this.props.query, this.props.pagina);
  // }

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

  //html_url
  //id
  //language
  //score
  //description
  //owner.login

  render() {
    return (
      <div style={{ textAlign: 'center' }}>
        {this.props.repo ? (
          <div
            className='row'
            style={{ justifyContent: 'center', marginLeft: '55px' }}
          >
            {this.props.repo.items.map((repo, index) => {
              return (
                <Card border='info' style={{ width: '18rem', margin: '5px ' }}>
                  <Card.Header
                    style={{ textAlign: 'left', fontWeight: 'bold' }}
                  >
                    <Image
                      width='50px'
                      style={{ marginRight: '10px' }}
                      src={repo.owner.avatar_url}
                      roundedCircle
                    />
                    {repo.owner.login}
                  </Card.Header>
                  <Card.Body>
                    <Card.Title>{repo.name}</Card.Title>
                    <Card.Text>{repo.description}</Card.Text>
                  </Card.Body>
                  <Card.Footer className='text-muted'>
                    {repo.language}
                  </Card.Footer>
                </Card>
              );
            })}
          </div>
        ) : (
          <div style={{ marginTop: '10%' }}>
            <Spinner animation='grow' />
            <Spinner animation='grow' />
            <Spinner animation='grow' />
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
)(RepoData);
