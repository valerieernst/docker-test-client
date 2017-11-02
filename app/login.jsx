import React from 'react';
import { Component } from 'react';
import axios from 'axios';
import { Form, FormGroup, FormControl, Col, ControlLabel, Button } from 'react-bootstrap';


export default class LoginForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      firstName: '',
      lastName: ''
    };

    this.handleInputChange = this.handleInputChange.bind(this);
    this.submitLoginForm = this.submitLoginForm.bind(this);
  }

  handleInputChange(e) {
    const key = e.target.id;
    this.setState({
      [key]: e.target.value
    })
  }

// todo: will need to sanitize user input in non-test app
  submitLoginForm(e) {
    e.preventDefault();

    axios.post('http://127.0.0.1:8080/users', {
      firstName: this.state.firstName,
      lastName: this.state.lastName
    })
    .then(function (response) {
      console.log(response);
    })
    .catch(function (error) {
      console.log(error);
    });
  }

  render() {
    return (
      <Form horizontal onSubmit={this.submitLoginForm} className="container">
        <h3 className="login_title">Enter Your First and Last Name!</h3>
        <FormGroup>
          <Col componentClass={ControlLabel} sm={2}>
            First Name
          </Col>
          <Col sm={10}>
            <FormControl id="firstName" type="text" placeholder="First Name" value={this.state.firstName} onChange={this.handleInputChange} />
          </Col>
        </FormGroup>
        <FormGroup>
          <Col componentClass={ControlLabel} sm={2}>
            Last Name
          </Col>
          <Col sm={10}>
            <FormControl id="lastName" type="text" placeholder="Last Name" value={this.state.lastName} onChange={this.handleInputChange} />
          </Col>
        </FormGroup>

        <FormGroup>
          <Col smOffset={2} sm={10}>
            <Button bsStyle="primary" type="submit">
              Put me in the database!
            </Button>
          </Col>
        </FormGroup>
      </Form>
    );
  }
}
