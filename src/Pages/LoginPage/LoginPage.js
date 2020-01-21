import React, { Component } from 'react'
import '../LoginPage/LoginPage.css'
import HomeNavBar from '../../Components/HomeNavBar'
import LogInComp from '../../Components/LogInComp'
import { Container, Row, Col } from 'react-bootstrap'


export default class LoginPage extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             
        }
    }
    
    render() {
        return (
            <div className="Login">
                <HomeNavBar page="Login"/>
                <Container>
                    <Row><h3>Welcome Back</h3></Row>
                </Container>
                <Container>
                    <Row className="justify-content-center">
                        <LogInComp />
                    </Row>
                </Container>
            </div>
        )
    }
}
