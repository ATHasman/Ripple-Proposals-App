import React, { Component } from 'react'
import './SignupPage.css'
import HomeNavBar from '../../Components/HomeNavBar'
import SignInComp from '../../Components/SignInComp'
import { Container, Row } from 'react-bootstrap'

// SigninPage Props:
//      activeUser={activeUser} 
//      handleLogin={this.handleLogin}
export default class SigninPage extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             activeUser : this.props.activeUser
        }
    }
    
    render() {
        const { activeUser , handleLogin } = this.props;

        return (
            <div className="Signup">
                <HomeNavBar page="Signup" variant="dark"/>
                <Container>
                    <Row><h3>Welcome</h3></Row>
                </Container>
                <Container>
                    <Row className="justify-content-center">
                        <SignInComp activeUser={activeUser} handleLogin={handleLogin} />
                    </Row>
                </Container>
            </div>
        )
    }
}
