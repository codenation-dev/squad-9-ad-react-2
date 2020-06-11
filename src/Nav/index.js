import React, { Component } from 'react';
import Switch from '@material-ui/core/Switch';
import TextField from '@material-ui/core/TextField';
import SearchIcon from '@material-ui/icons/Search';
import FormGroup from '@material-ui/core/FormGroup';
import IconButton from '@material-ui/core/IconButton';
import Grid from '@material-ui/core/Grid';
import { connect } from 'react-redux';
import { changeSearchWord } from '../actions/userBaseActions';
import InputAdornment from '@material-ui/core/InputAdornment';
import { withRouter } from 'react-router-dom';
import './style.css';
import logo from '../images/GitHub_Logo.png';

class NavBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      query: '',
      searchWord: props.searchWord,
      searchRepos: props.location.pathname.startsWith('/repositories') ? true : false
    };
  }

  handleSubmit = e => {
    e.preventDefault();
    const { query, searchRepos } = this.state;
    const { push } = this.props.history;

    if (searchRepos) {
      push(`/repositories/${query}`);
    }
    else {
      push(`/${query}`);
    }
    this.props.changeSearchWord(query);
  };

  componentWillUpdate(nextProps) {
    if (nextProps.searchWord !== this.props.searchWord)
      this.setState({ query: nextProps.searchWord });
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevProps.searchWord !== this.props.searchWord)
      this.props.location.pathname.startsWith('/repositories')
        ? this.setState({ searchRepos: true })
        : this.setState({ searchRepos: false });
  }

  handleSwitch = () => {
    this.setState({
      searchRepos: !this.state.searchRepos
    });
  };

  render() {
    const { searchRepos, query } = this.state;
    const { searchWord } = this.props;

    return (
      <div className={searchWord ? 'navbar-center nav-top' : 'navbar-center'}>
        {searchWord && (
          <div>
            <img src={logo} width={'180'} alt='github-project-logo' />
          </div>
        )}
        <div className={searchWord ? '' : 'container'}>
          {!searchWord && <span item>Users</span>}
          <Switch
            checked={searchRepos}
            onChange={this.handleSwitch}
            value={searchRepos ? 'repositories' : 'username'}
            inputProps={{ 'aria-label': 'secondary checkbox' }}
          />
          {!searchWord && <span item>Repositories</span>}

          <form onSubmit={e => this.handleSubmit(e)}>
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
        <div/>
      </div>
    );
  }

  static defaultProps = {
    windowWidth: window.innerWidth
  };
}

const mapStateToProps = state => {
  return {
    searchWord: state.searchWord
  };
};

export default connect(
  mapStateToProps,
  { changeSearchWord }
)(withRouter(NavBar));
