import React, { Component } from 'react'
import './SignupPage.css'
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
        const { activeUser } = this.props;

        return (
            <div className="Signup">
                <HomeNavBar page="Signup" variant="dark"/>
                <Container>
                    <Row><h3>Welcome</h3></Row>
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
