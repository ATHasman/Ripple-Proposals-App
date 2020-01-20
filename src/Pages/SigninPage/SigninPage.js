import React, { Component } from 'react'
import '../SigninPage/SigninPage.css'
import HomeNavBar from '../../Components/HomeNavBar'
import SignInComp from '../../Components/SignInComp'
import { Container, Row, Col } from 'react-bootstrap'


export default class SigninPage extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             
        }
    }
    
    render() {
        return (
            <div className="Signin">
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
