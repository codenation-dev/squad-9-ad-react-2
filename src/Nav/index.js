import React, { Component } from 'react';
import logo from '../images/git-img.png';
import Switch from '@material-ui/core/Switch';
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';
import SearchIcon from '@material-ui/icons/Search';
import FormGroup from '@material-ui/core/FormGroup';
import IconButton from '@material-ui/core/IconButton';
import Grid from '@material-ui/core/Grid';
import { connect } from 'react-redux';
import { changeSearchWord } from '../actions/userBaseActions';
import InputAdornment from '@material-ui/core/InputAdornment';
import { withRouter } from 'react-router-dom';
import { Nav } from './styles';
import './style.css';

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
      searchWord: props.searchWord,
      searchRepos: false,
      status: true
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
    this.props.changeSearchWord(query);

    // this.setState({
    //   query: '',
    //   searchWord: query
    //   // status: false
    // });
  };

  componentWillUpdate(nextProps) {
    if (nextProps.searchWord !== this.props.searchWord)
      this.setState({ query: nextProps.searchWord });
  }

  handleSwitch = () => {
    this.setState({
      searchRepos: !this.state.searchRepos
    });
  };

  render() {
    const { searchRepos, query } = this.state;
    const { windowWidth, searchWord } = this.props;

    return (
      <>
        {this.state.status && (
          <div
            className={searchWord ? 'navbar-center nav-top' : 'navbar-center'}
          >
            {/*<Repositorio/>*/}
            <div>
              {!searchWord && <span item>Users</span>}
              <Switch
                checked={searchRepos}
                onChange={this.handleSwitch}
                value={searchRepos ? 'repositories' : 'username'}
                inputProps={{ 'aria-label': 'secondary checkbox' }}
              />
              {!searchWord && <span item>Repositories</span>}
            </div>
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
        )}
      </>
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

// export default ;
