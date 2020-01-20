import React, { Component } from 'react'
import '../LoginPage/LoginPage.css'
import HomeNavBar from '../../Components/HomeNavBar'
import SignInComp from '../../Components/SignInComp'
import { Container, Row, Col } from 'react-bootstrap'


export default class SigninPage extends Component {
    render() {
        return (
            <div className="Login">
                <HomeNavBar />
                <Container>
                    <Row><h3>Welcome</h3></Row>
                    <Row><h6>Please Sign in with your credentials</h6></Row>
                </Container>
                <Container>
                    <Row className="justify-content-center">
                        <SignInComp />
                    </Row>
                </Container>
            </div>
        )
    }
}
