import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { Nav } from './styles';
import { FormControl, InputGroup } from 'react-bootstrap';
import SearchIcon from '@material-ui/icons/Search';
import Switch from '@material-ui/core/Switch';
import logo from '../images/GitHub_Logo.png';

class NavBar2 extends Component {
  constructor(props) {
    super(props);
    this.uri = props.match.params.query;
    this.state = {
      query: ''
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

  onInputChange = e => {
    this.setState({ query: e.target.value });
  };

  render() {
    const { query } = this.state;
    return (
      <Nav className='row'>
        <div
          className='col-5'
          style={{ alignSelf: 'center', textAlign: 'center' }}
        >
          <img src={logo} width={'160px'} alt='github-logo' />
        </div>
        <div className='col-7' style={{ alignSelf: 'center' }}>
          <Switch
            checked={true}
            onChange={''}
            color='secondary'
            value={true ? 'repositories' : 'username'}
            inputProps={{ 'aria-label': 'secondary checkbox' }}
          />
          <form
            style={{ display: 'inline-flex', alignSelf: 'center' }}
            onSubmit={e => this.handleSubmit(e)}
          >
            <InputGroup>
              <FormControl
                placeholder='username'
                aria-label="Recipient's usernames"
                aria-describedby='basic-addon2'
                value={query}
                onChange={this.onInputChange}
              />
              <InputGroup.Append>
                <InputGroup.Text>
                  <SearchIcon />
                </InputGroup.Text>
              </InputGroup.Append>
            </InputGroup>
          </form>
        </div>
      </Nav>
    );
  }
}

export default withRouter(NavBar2);
