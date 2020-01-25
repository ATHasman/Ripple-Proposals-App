import React, { Component } from 'react'
import { Form , Button, Container, Row, Col , Image, Nav, OverlayTrigger, Tooltip } from 'react-bootstrap'
import googleLogo from '../Img/Google-logo-25px.png'
import githubLogo from '../Img/GitHub-logo-25px.png'
import "../Components/SignInComp.css"


export default class SignInComp extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             
        }
    }
    
    renderTooltip() {
        return (
            <div>
                <Tooltip >8 characher combination of numbers (0-9), letters (a-z:A-Z), special characters ('@#$%^{`&`}*-+')</Tooltip>
            </div>
        )
    }

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
                    <Row className="justify-content-center"><Form.Label>or Signup with credentials</Form.Label></Row>
                    <Form>
                        <Row>
                            <Col >                  
                                <Form.Group controlId="formBasicFirstName" className="fname">
                                    <Form.Label size="sm">First name</Form.Label>
                                    <Form.Control type="text" placeholder="(Gal)" size="sm"/>
                                </Form.Group>
                            </Col>
                            <Col>
                                <Form.Group controlId="formBasicLastName" className="lname">
                                    <Form.Label>Last name</Form.Label>
                                    <Form.Control type="text" placeholder="(Ripple)" size="sm" />
                                </Form.Group>
                            </Col>   
                        </Row>   
                        <Form.Group controlId="formBasicEmail">
                            <Form.Label>Email address</Form.Label>
                            <Form.Control type="email" placeholder="(gal@ripple.io)" size="sm"/>
                        </Form.Group>
                        <Form.Group controlId="formBasicPassword">
                            <Form.Label>Password</Form.Label>
                            <Form.Control type="password" placeholder="Password" size="sm"/>
                        </Form.Group>
                        <Form.Group>
                            <Row className="justify-content-center">
                                <Form.Check type="checkbox" label="I Agree with the" required></Form.Check>
                                <Form.Label><a href="/terms">Terms and Conditions </a></Form.Label>
                                <Form.Label><a href="/privacy">Privacy Policy </a></Form.Label>
                            </Row>
                        </Form.Group>
                        <Button variant="primary" type="submit" className="center">Create Account</Button>
                    </Form>
                </Container>
            </div>
        )
    }
}
