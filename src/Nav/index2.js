import React, { Component } from 'react';
import { Nav, NavPesquisa, NavPesquisa2, Input } from './styles';
import { withRouter } from 'react-router-dom';
import {FormControl, InputGroup, Row} from "react-bootstrap";
import Icon from "@material-ui/core/Icon";
import Switch from "@material-ui/core/Switch";




class NavBar2 extends Component {
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
    this.props.handleRequest(this.state.user)
    this.props.history.push(this.state.user);
    this.setState({ user: '' });
  };

  render() {
    return (
      <Nav>
      <div style={{ width: '30%', marginLeft: '10%', marginTop: '15px'}}>  
      <form onSubmit={e => this.handleSubmit(e)}>
     
        <InputGroup className="mb-4">
     
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
      </Nav>
     
    );
  }
}

export default withRouter(NavBar2);
