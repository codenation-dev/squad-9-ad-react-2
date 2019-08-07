import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import {Nav} from "./styles";
import {FormControl, InputGroup} from "react-bootstrap";
import SearchIcon from '@material-ui/icons/Search';
import Switch from "@material-ui/core/Switch";
import logo from '../images/GitHub_Logo.png'




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


        <div style={{marginTop: '15px', marginRight: '150px'}}>
          <img src={logo} width={'160px'}></img>
        </div>

        <form onSubmit={e => this.handleSubmit(e)}>
          <div style={{marginTop: '10px'}}>

            <InputGroup className="mb-3">
              <FormControl
                placeholder="Recipient's username"
                aria-label="Recipient's username"
                aria-describedby="basic-addon2"
              />
              <InputGroup.Append>
                <InputGroup.Text >
                  <SearchIcon />
                </InputGroup.Text>
              </InputGroup.Append>
            </InputGroup>
          </div>
        </form>
        <div style={{marginTop: '15px'}}>
          <Switch
            checked={true}
            onChange={''}
            color="secondary"
            value={true ? 'repositories' : 'username'}
            inputProps={{ 'aria-label': 'secondary checkbox' }}
          />
        </div>
      </Nav>
     
    );
  }
}

export default withRouter(NavBar2);
