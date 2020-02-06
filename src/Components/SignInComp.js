/** @format */

import React, { Component } from "react";
import {
  Form,
  Button,
  Container,
  Row,
  Col,
  Image,
  Tooltip,
  Alert
} from "react-bootstrap";
import googleLogo from "../Img/Google-logo-25px.png";
import githubLogo from "../Img/GitHub-logo-25px.png";
import "../Components/SignInComp.css";
import Parse from "parse";
import { Redirect } from "react-router-dom";
import UserModel from "../Models/UserModel";

//<SignInComp/> Component Props:
//  activeUser={activeUser}
//  handleLogin={handleLogin}
export default class SignInComp extends Component {
  constructor(props) {
    super(props);

    this.state = {
      email: "",
      password: "",
      fname: "",
      lname: "",
      showInvalidSignupError: false,
      redirectToDashboard: false
    };

    this.renderTooltip = this.renderTooltip.bind(this);
    this.signUp = this.signUp.bind(this);
    this.handleInputChange = this.handleInputChange.bind(this);
  }

  // form related Tooltip Comp. required password tooltip ! Nav & OverlayTrigger components are required for
  //    feature (note on hover / input change)
  // To sign up a new user is a little bit different from creating a simple Parse Object
  //    in that the username and password fields are required
  //    and the password must contain a capital letter, lowercase letter, a number and be at least 8 characters long.

  renderTooltip() {
    return (
      <div>
        <Tooltip>
          8 characher combination of numbers (0-9), capital {`&`} lowercase
          letters (A-Z:a-z) and special characters ('@#$%^{`&`}*-+').
        </Tooltip>
      </div>
    );
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

  signUp() {
    // Signup Logic
    console.log("signUp Activated");
    const { handleLogin } = this.props;
    const { email, password, fname, lname } = this.state;
    const username = fname+lname;
//     
    const user = new Parse.User();
    user.set("username", username);
    user.set("email", email);
    user.set("fname", fname);
    user.set("lname", lname);
    user.set("password", password);

    // Pass the username and password to logIn function ~ parseUser
    user.signUp()
      .then(parseUser => {
        // Do stuff after login
        const user = new UserModel(parseUser);
        // 1) Updating parent components SignupPage >> App with handleLogin(user) method
        handleLogin(user);
        console.log("User signed up", user);

        // 2) navigate to Dashboard page
        this.setState({
          redirectToDashboard: true
        });
      })
      .catch(error => {
        // Error action
        console.error("Error while signing user", error);
        this.setState({
          showInvalidLoginError: true
        });
      });
  }

  render() {
    const {
      email,
      password,
      fname,
      lname,
      showInvalidSignupError,
      redirectToDashboard
    } = this.state;

    // Handle event Click => react Bootstrap <Button/>
    const handleClick = () => {this.signUp()};

    if (redirectToDashboard) {
      return <Redirect to="/dashboard" />;
    }
    const errorAlert = showInvalidSignupError ? (
      <Alert variant="danger">Invalid email or password!</Alert>
    ) : null;

    return (
      <div className="SignInComp">
        <Container className="Signup-with">
          <Row className="justify-content-center">
            <Form.Label>Signup using</Form.Label>
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
        <Container className="Signup-form">
          <Row className="justify-content-center">
            <Form.Label>or Signup with credentials</Form.Label>
          </Row>
          <Form>
            <Row>
              <Col>
                <Form.Group controlId="formBasicFirstName" className="fname">
                  <Form.Label size="sm">First name</Form.Label>
                  <Form.Control
                    name="fname"
                    value={fname}
                    onChange={this.handleInputChange}
                    required
                    type="text"
                    placeholder="(Gal)"
                    size="sm"
                  />
                </Form.Group>
              </Col>
              <Col>
                <Form.Group controlId="formBasicLastName" className="lname">
                  <Form.Label>Last name</Form.Label>
                  <Form.Control
                    name="lname"
                    value={lname}
                    onChange={this.handleInputChange}
                    required
                    type="text"
                    placeholder="(Ripple)"
                    size="sm"
                  />
                </Form.Group>
              </Col>
            </Row>
            <Form.Group controlId="formBasicEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control
                name="email"
                value={email}
                type="email"
                onChange={this.handleInputChange}
                required
                placeholder="(gal@ripple.io)"
                size="sm"
              />
            </Form.Group>
            <Form.Group controlId="formBasicPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control
                name="password"
                value={password}
                type="password"
                onChange={this.handleInputChange}
                required
                placeholder="Password"
                size="sm"
              />
            </Form.Group>
            <Form.Group>
              <Row className="justify-content-center">
                <Form.Check
                  type="checkbox"
                  label="I Agree with the"
                  required
                ></Form.Check>
                <Form.Label>
                  <a href="/terms">Terms and Conditions</a>
                </Form.Label>
                <Form.Label>
                  <a href="/privacy">Privacy Policy</a>
                </Form.Label>
              </Row>
            </Form.Group>
            <Button 
                variant="primary" 
                type="submit"   
                className="center"
                onClick={handleClick}
              >
              Create Account
            </Button>
          </Form>
        </Container>
      </div>
    );
  }
}
