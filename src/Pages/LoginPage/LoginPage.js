import React, { Component } from 'react'
import '../LoginPage/LoginPage.css'
import LogInComp from '../../Components/LogInComp'
import { Container, Row } from 'react-bootstrap'

// <LoginPage/> props: 
//      activeUser={activeUser} 
//      handleLogin={this.props.handleLogin}
//      handleLogout={this.handleLogout}

export default class LoginPage extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
            activeUser: this.props.activeUser
         }
    }
    render() {
        const { handleLogin } = this.props

        return (
            <div className="Login">
                {/* <HomeNavBar handlelogout={handlelogout} activeUser={activeUser} page="Login" variant="dark"/> */}
                <Container>
                    <Row><h3>Welcome Back</h3></Row>
                </Container>
                <Container>
                    <Row className="justify-content-center">
                        <LogInComp handleLogin={handleLogin}/>
                    </Row>
                </Container>
            </div>
        )
    }
}
