import React, { Component } from 'react';
import { NavPesquisa2, Input } from './styles';
import { withRouter } from 'react-router-dom';
import Button from '@material-ui/core/Button';

class UserSearchBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: ''
    };
  }

  handleValue = ({ target: { value, name } }) => {
    this.setState({ [name]: value });
  };

  handleSubmit = e => {
    e.preventDefault();
    this.props.handleRequest(this.state.user);
    this.props.history.push(this.state.user);
    this.setState({ user: '' });
  };

  render() {
    return (
      <form onSubmit={e => this.handleSubmit(e)}>
        <NavPesquisa2>
          <Input
            label='Users'
            name={'user'}
            value={this.state.user}
            onChange={this.handleValue}
          />

          <Button
            onClick={e => this.handleSubmit(e)}
            variant='contained'
            color='default'
          >
            ?
          </Button>
        </NavPesquisa2>
      </form>
    );
  }
}

export default withRouter(UserSearchBar);
