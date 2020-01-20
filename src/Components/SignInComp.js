import React, { Component } from 'react'
import { Form , Button, Container, Row, Col , Image } from 'react-bootstrap'
import googleLogo from '../Img/Google-logo-25px.png'
import githubLogo from '../Img/GitHub-logo-25px.png'
import "../Components/SignInComp.css"


export default class SignInComp extends Component {
    render() {
        return (
            <div className="SignInComp">
                <Container className="Signup-with">
                    <Row className="justify-content-center"><Form.Label >Signup using</Form.Label></Row>
                        <Row>
                            <Col className="justify-content-center">
                                <Button href="#" variant="outline-transparent" size="sm" active><Image src={googleLogo}/> Google</Button>
                            </Col>
                            <Col className="justify-content-center">
                                <Button href="#" variant="outline-transparent" size="sm" active><Image src={githubLogo}/> GitHub</Button>
                            </Col>
                        </Row>
                </Container>

                <Container className="Signup-form">
                    <Row className="justify-content-center">or Signup with credentials</Row>
                    <Form>
                        <Row>
                            <Col >                  
                                <Form.Group controlId="formBasicFirstName" className="fname">
                                    <Form.Label size="sm">First name</Form.Label>
                                    <Form.Control type="text" placeholder="First Name" />
                                </Form.Group>
                            </Col>
                            <Col>
                                <Form.Group controlId="formBasicLastName" className="lname">
                                    <Form.Label>Last name</Form.Label>
                                    <Form.Control type="text" placeholder="Last Name" />
                                </Form.Group>
                            </Col>   
                        </Row>   
                        <Form.Group controlId="formBasicEmail">
                            <Form.Label>Email address</Form.Label>
                            <Form.Control type="email" placeholder="Enter email" />
                        </Form.Group>
                        <Form.Group controlId="formBasicPassword">
                            <Form.Label>Password</Form.Label>
                            <Form.Control type="password" placeholder="Password" />
                            <Form.Text className="text-white">Notification Text</Form.Text>
                        </Form.Group>
                        <Button variant="primary" type="submit" className="center">Create Account</Button>
                    </Form>
                </Container>
            </div>
        )
    }
}
