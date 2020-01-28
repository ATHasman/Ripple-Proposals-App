import React, { Component } from 'react'
import './SignupPage.css'
import HomeNavBar from '../../Components/HomeNavBar'
import SignInComp from '../../Components/SignInComp'
import { Container, Row } from 'react-bootstrap'

// SigninPage Props:
//      activeUser={activeUser} 
//      handleLogin={this.handleLogin}
//      handleLogout={this.handleLogout}
export default class SigninPage extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             activeUser : this.props.activeUser
        }
    }
    
    render() {
        const { activeUser , handleLogin , handlelogout } = this.props;

        return (
            <div className="Signup">
                <HomeNavBar page="Signup" variant="dark" activeUser={activeUser} handlelogout={handlelogout}/>
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
