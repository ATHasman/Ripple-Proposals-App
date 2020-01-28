/** @format */

import React, { Component } from "react";
import {
  Form,
  Button,
  Container,
  Row,
  Col,
  Image,
  Alert
} from "react-bootstrap";
import googleLogo from "../Img/Google-logo-25px.png";
import githubLogo from "../Img/GitHub-logo-25px.png";
import "../Components/LogInComp.css";
import Parse from "parse";
import UserModel from "../Models/UserModel";
import { Redirect } from "react-router-dom";

//<LogInComp/> props:
//      handleLogin={this.props.handleLogin}

export default class LogInComp extends Component {
  constructor(props) {
    super(props);

    this.state = {
      email: "",
      password: "",
      showInvalidLoginError: false,
      redirectToDashboard: false
    };

    this.handleInputChange = this.handleInputChange.bind(this);
    this.login = this.login.bind(this);
  }

  handleInputChange(event) {
    const target = event.target;
    const value = target.type === "checkbox" ? target.checked : target.value; // if Checkbox  target.Checked
    const name = target.name;

    // setting state while User type input in formControle [name]:value {* this.state keys == email,password}
    this.setState({
      [name]: value
    });
  }

  login() {
    // login Logic

    const { handleLogin } = this.props;
    const { email, password } = this.state;

    // Pass the username and password to logIn function ~ parseUser
    Parse.User.logIn(email, password)
      .then(parseUser => {
        // Actions after successful login
        const user = new UserModel(parseUser);
        console.log("Logged in user", user);
        
        // 1) Updating parent components LoginPage >> App with handleLogin(user) method
        handleLogin(user);

        // 2) navigate to Dashboard page
        this.setState({
          redirectToDashboard: true
        });
      })
      .catch(error => {
        // Error actions if login Unsuccessful
        console.error("Error while logging in user", error);
        this.setState({
          showInvalidLoginError: true
        });
      });
  }

  render() {
    const {
      email,
      password,
      showInvalidLoginError,
      redirectToDashboard
    } = this.state;
    if (redirectToDashboard) {
      return <Redirect to="/dashboard" />;
    }
    const errorAlert = showInvalidLoginError ? (
      <Alert variant="danger">Invalid email or password!</Alert>
    ) : null;

    return (
      <div className="LogInComp">
        <Container className="Signup-with">
          <Row className="justify-content-center">
            <Form.Label>Login using</Form.Label>
          </Row>
          <Row>
            <Col className="justify-content-center">
              <Button href="#" variant="outline-transparent" size="sm" active>
                <Image src={googleLogo} /> Google
              </Button>
            </Col>
            <Col className="justify-content-center">
              <Button href="#" variant="outline-transparent" size="sm" active>
                <Image src={githubLogo} /> GitHub
              </Button>
            </Col>
          </Row>
        </Container>
        {errorAlert}
        <Container className="Login-form">
          <Row className="justify-content-center">
            <Form.Label>or Login with credentials</Form.Label>
          </Row>
          <Form>
            <Form.Group controlId="formBasicEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control
                name="email"
                type="email"
                value={email}
                onChange={this.handleInputChange}
                placeholder="your@email.com"
                size="sm"
              />
            </Form.Group>

            <Form.Group controlId="formBasicPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control
                name="password"
                type="password"
                value={password}
                onChange={this.handleInputChange}
                placeholder="Password"
                size="sm"
              />
            </Form.Group>
            <Button
              variant="primary"
              type="button"
              className="center"
              onClick={this.login}
            >
              Login
            </Button>
          </Form>
        </Container>
      </div>
    );
  }
}
