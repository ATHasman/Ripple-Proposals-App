import React, { Component } from 'react'
import { Form , Button, Container, Row, Col , Image } from 'react-bootstrap'
import googleLogo from '../Img/Google-logo-25px.png'
import githubLogo from '../Img/GitHub-logo-25px.png'
import "../Components/LogInComp.css"


export default class SignInComp extends Component {
    render() {
        return (
            <div className="LogInComp">
                <Container className="Signup-with">
                    <Row className="justify-content-center"><Form.Label >Login using</Form.Label></Row>
                        <Row>
                            <Col className="justify-content-center">
                                <Button href="#" variant="outline-transparent" size="sm" active><Image src={googleLogo}/> Google</Button>
                            </Col>
                            <Col className="justify-content-center">
                                <Button href="#" variant="outline-transparent" size="sm" active><Image src={githubLogo}/> GitHub</Button>
                            </Col>
                        </Row>
                </Container>

                <Container className="Login-form">
                    <Row className="justify-content-center"><Form.Label>or Login with credentials</Form.Label></Row>
                    <Form>
                       <Form.Group controlId="formBasicEmail">
                            <Form.Label>Email address</Form.Label>
                            <Form.Control type="email" placeholder="Your Email" size="sm" />
                        </Form.Group>
                        <Form.Group controlId="formBasicPassword">
                            <Form.Label>Password</Form.Label>
                            <Form.Control type="password" placeholder="Password" size="sm"/>
                        </Form.Group>
                        <Button variant="primary" type="submit" className="center">Login</Button>
                    </Form>
                </Container>
            </div>
        )
    }
}
