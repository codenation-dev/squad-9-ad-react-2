import React, { Component } from 'react';
import { connect } from 'react-redux';
import { loadDataRequestRepos } from '../actions/repoActions';
import { Card, Image, Spinner } from 'react-bootstrap';

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

  render() {
    return (
      <div style={{ textAlign: 'center', marginLeft: '60px' }}>
        {this.props.repo ? (
          <div
            className='row'
            style={{
              justifyContent: 'center',
              animation: 'fadeIn ease-in-out 1.5s'
            }}
          >
            {this.props.repo.items.map((repo, index) => {
              const {
                owner: { login, avatar_url },
                name,
                description,
                language
              } = repo;
              return (
                <Card border='info' style={{ width: '18rem', margin: '5px ' }}>
                  <Card.Header
                    style={{ textAlign: 'left', fontWeight: 'bold' }}
                  >
                    <Image
                      width='50px'
                      style={{ marginRight: '10px' }}
                      src={avatar_url}
                      roundedCircle
                    />
                    {login}
                  </Card.Header>
                  <Card.Body>
                    <Card.Title>{name}</Card.Title>
                    <Card.Text>
                      {description && description.length > 168
                        ? `${description.substr(0, 168)}...`
                        : description}
                    </Card.Text>
                  </Card.Body>
                  <Card.Footer className='text-muted'>{language}</Card.Footer>
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
