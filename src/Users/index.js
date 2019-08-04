import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { loadDataRequest } from '../actions';
import { connect } from 'react-redux';

class User extends Component {
  componentDidMount() {
    const user = this.props.match.params.nameUser;
    this.props.loadDataRequest(user);
  }

  render() {
    return (
      <div style={{ textAlign: 'center', marginTop: '10%' }}>
        {this.props.user.map(item => {
          return (
            <div>
              <img
                src={item.avatar_url}
                style={{
                  maxWidth: '200px',
                  maxHeight: '200px',
                  border: '1px solid black',
                  borderRadius: '50%'
                }}
                alt={`avatar-${item.login}`}
              />
              <a href={item.html_url} target='_blank' rel='noopener noreferrer'>
                {' '}
                <h2>User: {item.login}</h2>
              </a>
            </div>
          );
        })}
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    user: state.userSearch.data,
    status: state.userSearch.status
  };
}

export default connect(
  mapStateToProps,
  { loadDataRequest }
)(withRouter(User));
