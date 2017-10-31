import React from 'react';
import { Component } from 'react';
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

  submitLoginForm() {
    // and this is where i'll post data!
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
