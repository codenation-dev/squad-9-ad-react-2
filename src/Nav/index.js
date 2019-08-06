import React, { Component } from 'react';
import { Nav, NavPesquisa, Input } from './styles';
import { withRouter } from 'react-router-dom';
import Button from '@material-ui/core/Button';
import Repositorio from '../Repositorio';
import { Col, Container, FormControl, InputGroup } from 'react-bootstrap';
import Icon from '@material-ui/core/Icon';
import logo from '../images/git-img.png';
import { Provider } from 'react-redux';
import Switch from '@material-ui/core/Switch';
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';
import SearchIcon from '@material-ui/icons/Search';
import FormGroup from '@material-ui/core/FormGroup';
import IconButton from '@material-ui/core/IconButton';
import Grid from '@material-ui/core/Grid';
import InputAdornment from '@material-ui/core/InputAdornment';

const useStyles = makeStyles(theme => ({
  container: {
    display: 'flex',
    flexWrap: 'wrap'
  },
  textField: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1)
  },
  dense: {
    marginTop: theme.spacing(2)
  },
  menu: {
    width: 200
  }
}));

class NavBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      query: '',
      searchRepos: false
    };
  }

  handleValue = ({ target: { value, name } }) => {
    this.setState({ [name]: value });
  };

  handleSubmit = e => {
    const { query, searchRepos } = this.state;
    const { push } = this.props.history;

    e.preventDefault();

    if (searchRepos) push(`/repositories/${query}`);
    else push(query);

    this.setState({ query: '' });
  };

  handleSwitch = () => {
    this.setState({
      searchRepos: !this.state.searchRepos
    });
  };

  render() {
    const { searchRepos, query } = this.state;
    const { windowWidth } = this.props;

    return (
      <div
        style={{
          textAlign: 'center',
          width: windowWidth < 500 ? 'inherit' : '50%',
          marginTop: windowWidth < 500 ? '30%' : '15%',
          marginLeft: 'auto',
          marginRight: 'auto'
        }}
      >
        <div>
          <img
            src={logo}
            width={windowWidth > 500 ? '350px' : '280px'}
            alt='github-logo'
          />
        </div>
        {/*<Repositorio/>*/}

        <span item>Users</span>
        <Switch
          checked={searchRepos}
          onChange={this.handleSwitch}
          value={searchRepos ? 'repositories' : 'username'}
          inputProps={{ 'aria-label': 'secondary checkbox' }}
        />
        <span item>Repositories</span>
        <form onSubmit={e => this.handleSubmit(e)}>
          {/* <FormControl
              placeholder={`Search GitHub ${
                searchRepos ? "Repositories" : "Users"
              }`}
              name={"query"}
              value={query}
              // onChange={this.handleValue}
            /> */}
          {/* <InputGroup.Append>
              <InputGroup.Text id="basic-addon2">
                <Icon type="submit">search</Icon>
              </InputGroup.Text>
            </InputGroup.Append> */}
          <Grid item xs={12}>
            <FormGroup row={true}>
              <TextField
                id='outlined-name'
                label={searchRepos ? 'By language' : 'By username'}
                value={query}
                onChange={({ target: { value, name } }) => {
                  this.setState({
                    [name]: value,
                    query: value
                  });
                }}
                margin='normal'
                style={{ flex: '1' }}
                variant='outlined'
                InputProps={{
                  endAdornment: (
                    <InputAdornment position='start'>
                      <IconButton type='submit' style={{ outline: 0 }}>
                        <SearchIcon />
                      </IconButton>
                    </InputAdornment>
                  )
                }}
              />
            </FormGroup>
          </Grid>
        </form>
      </div>
    );
  }

  static defaultProps = {
    windowWidth: window.innerWidth
  };
}

export default withRouter(NavBar);
