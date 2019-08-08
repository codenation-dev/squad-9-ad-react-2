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
    this.searchRepos = props.location.pathname.includes('repositories/');
    this.state = {
      query: '',
      searchRepos: this.searchRepos
    };
  }

  handleValue = ({ target: { value, name } }) => {
    this.setState({ [name]: value });
  };

  handleSubmit = e => {
    e.preventDefault();
    const { query, searchRepos } = this.state;
    const { push, goBack, replace } = this.props.history;
    if (searchRepos) push(`/repositories/${query}`);
    else push(`/${query}`);

    window.location.reload(); //reloads entire page, temporary solution.
  };

  onInputChange = e => {
    this.setState({ query: e.target.value });
  };

  toggleSwitch = e => {
    this.setState({ searchRepos: !this.state.searchRepos });
  };

  render() {
    const { query, searchRepos } = this.state;
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
            checked={searchRepos}
            onChange={this.toggleSwitch}
            color='secondary'
            value={searchRepos ? 'repositories' : 'username'}
            inputProps={{ 'aria-label': 'secondary checkbox' }}
          />
          <form
            style={{ display: 'inline-flex', alignSelf: 'center' }}
            onSubmit={e => this.handleSubmit(e)}
          >
            <InputGroup>
              <FormControl
                placeholder={searchRepos ? 'language' : 'username'}
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
