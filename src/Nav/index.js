import React, { Component } from 'react';
import { Nav, NavPesquisa, Input } from './styles';
import { withRouter } from 'react-router-dom';
import Button from '@material-ui/core/Button';
import Repositorio from "../Repositorio";
import {Col, Container, FormControl, InputGroup} from "react-bootstrap";
import Icon from "@material-ui/core/Icon";
import logo from '../images/git-img.png'
import {Provider} from "react-redux";
import Switch from "@material-ui/core/Switch";




class NavBar extends Component {
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
    this.props.history.push(this.state.user);
    this.setState({ user: '' });
  };

  render() {
    return (
      
        <div style={{textAlign: 'center', width: '50%', marginTop: '16%', marginLeft: '27%'}}>
          <div><img src={logo}  width={'350px'}></img></div>
        {/*<Repositorio/>*/}

          <Switch
            checked={true}
            onChange={''}
            value="checkedA"
            inputProps={{ 'aria-label': 'secondary checkbox' }}
          />
        <form onSubmit={e => this.handleSubmit(e)}>
          <InputGroup className="mb-3">
            <FormControl
              placeholder="Users..."
              name={'user'}
              value={this.state.user}
              onChange={this.handleValue}
            />
            <InputGroup.Append>
              <InputGroup.Text id="basic-addon2"><Icon  onClick={e => this.handleSubmit(e)}>search</Icon></InputGroup.Text>
            </InputGroup.Append>
          </InputGroup>
        </form>
        </div>
  
    );
  }
}

export default withRouter(NavBar);
