import React, { Component } from 'react';
import { Form, FormGroup, FormControl, Col, ControlLabel, Button } from 'react-bootstrap';
import { hashHistory } from 'react-router';
import axios from 'axios';

export default class loginForm extends Component {
  constructor(props) {
    super(props);

    this.changeHandler = this.changeHandler.bind(this);
    this.submitLoginForm = this.submitLoginForm.bind(this);
    
    this.state = {
      username: '',
      password: ''
    }
  }

//generic handler for changes to form field
  changeHandler (e) {
    const key = e.target.id
    this.setState({
      [key]: e.target.value
    })
  }

  submitLoginForm () {
    axios.post('https://iotile.cloud/api/v1/auth/api-jwt-auth/', {
      username: this.state.username,
      password: this.state.password
    })
    .then((resp) => {
      //store token in session storage
      window.sessionStorage.accessToken = resp.data.token;
      hashHistory.push('/data');
    })
    .catch((err) => {
      console.log(err);
      alert('Incorrect username/password combination. Please try again!');
    })
  }

//render form using react bootstrap syntax
  render () {
    return (
      <Form horizontal onSubmit={this.submitLoginForm} className="container login">
        <h3 className="login_title">Enter Your Username and Password:</h3>
        <FormGroup>
          <Col componentClass={ControlLabel} sm={2}>
            Username
          </Col>
          <Col sm={10}>
            <FormControl id="username" type="email" placeholder="Username" value={this.state.username} onChange={this.changeHandler} />
          </Col>
        </FormGroup>

        <FormGroup controlId="password">
          <Col componentClass={ControlLabel} sm={2}>
            Password
          </Col>
          <Col sm={10}>
            <FormControl type="password" placeholder="Password" value={this.state.password} onChange={this.changeHandler} />
          </Col>
        </FormGroup>

        <FormGroup>
          <Col smOffset={2} sm={10}>
            <Button type="submit">
              Login
            </Button>
          </Col>
        </FormGroup>
      </Form>
    );
  }

}
