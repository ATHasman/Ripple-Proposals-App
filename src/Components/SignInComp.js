import React, { Component } from 'react'
import { Form , Button, Container, ButtonToolbar, Nav, Row, Col  } from 'react-bootstrap'
import "../Components/SignInComp.css"


export default class SignInComp extends Component {
    render() {
        return (
            <div className="SignInComp">
                <Container>
                    <Row className="justify-content-center">
                        <Form.Text className="text-muted">Sign up with</Form.Text>
                    </Row>
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
                        <Form.Group controlId="formBasicPassword">
                            <Form.Label>First name</Form.Label>
                            <Form.Control type="password" placeholder="Password" />
                        </Form.Group>
                        <Form.Group controlId="formBasicPassword">
                            <Form.Label>Last name</Form.Label>
                            <Form.Control type="password" placeholder="Password" />
                        </Form.Group>
                        <Form.Group controlId="formBasicEmail">
                            <Form.Label>Email address</Form.Label>
                            <Form.Control type="email" placeholder="Enter email" />
                        </Form.Group>
                        <Form.Group controlId="formBasicPassword">
                            <Form.Label>Password</Form.Label>
                            <Form.Control type="password" placeholder="Password" />
                        </Form.Group>
                        <Button variant="primary" type="submit">Create Account</Button>
                    </Form>
                </Container>
            </div>
        )
    }
}
