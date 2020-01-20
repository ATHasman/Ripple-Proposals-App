import React, { Component } from 'react'
import { Form , Button, Container, ButtonToolbar, Nav, Row, Col  } from 'react-bootstrap'
import "../Components/SignInComp.css"


export default class SignInComp extends Component {
    render() {
        return (
            <div className="SignInComp">
                <Container>
                    <ButtonToolbar className="justify-content-center">
                        <Row >
                            <Col>
                                <Button href="#" variant="outline-primary" size="lg" active>Google</Button>
                            </Col>
                            <Col>
                                <Button href="#" variant="outline-secondary" size="lg" active>GitHub</Button>
                            </Col>
                        </Row>
                    </ButtonToolbar>
                </Container>
                <Container>
                    <Form>
                        <Row>
                            <Col >                  
                                <Form.Group controlId="formBasicFirstName" className="fname">
                                    <Form.Label>First name</Form.Label>
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
