import React, { Component } from 'react'
import '../LoginPage/LoginPage.css'
import HomeNavBar from '../../Components/HomeNavBar'
import LogInComp from '../../Components/LogInComp'
import { Container, Row } from 'react-bootstrap'

// <LoginPage/> props: 
//      activeUser={activeUser} 
//      handleLogin={this.props.handleLogin}

export default class LoginPage extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
            activeUser: this.props.activeUser
         }
    }
    
    // handleLogin(user)   {
    //     // need to set state to  - activeUser : User  
    //     // when callback is sent by LoginComp. ?

    // }

    render() {
        return (
            <div className="Login">
                <HomeNavBar page="Login" variant="dark"/>
                <Container>
                    <Row><h3>Welcome Back</h3></Row>
                </Container>
                <Container>
                    <Row className="justify-content-center">
                        <LogInComp handleLogin={this.props.handleLogin}/>
                    </Row>
                </Container>
            </div>
        )
    }
}
