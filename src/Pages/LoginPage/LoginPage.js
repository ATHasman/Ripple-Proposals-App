import React, { Component } from 'react'
import '../LoginPage/LoginPage.css'
import HomeNavBar from '../../Components/HomeNavBar'
import SignInComp from '../../Components/SignInComp'
import { Container, Row, Col } from 'react-bootstrap'


export default class LoginPage extends Component {
    render() {
        return (
            <div className="Login">
                <HomeNavBar />
                <Container >
                    <Row className="justify-content-center">
                    <h3>Welcome</h3>
                    </Row>
                    <Row className="justify-content-center">
                    <h6>Please Login with you credentials</h6>                    </Row>
                    <Row>
                        <Col>
                            <SignInComp />
                        </Col>
                    </Row>
                </Container>
            </div>
        )
    }
}
