import React, { Component } from 'react';
import logo from '../Img/Ripple_Hand_logo_400x400 transparent.png';
import { Button, Navbar, Nav, Image } from 'react-bootstrap';
import '../Components/HomeNavBar.css';

export default class HomeNavBar extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             
        }

       
    }
    

    render() {
        const { activeUser } = this.props;

        const dashboardLink = activeUser ? <Nav.Link href="#/dashboard">Dashboard</Nav.Link> : null;
        const signinLink = !activeUser ? <Nav.Link href="#/signin" className="signupLink">Sign in free</Nav.Link> : null;
        const loginLink = !activeUser ? <Nav.Link href="#/login">Login</Nav.Link> : null;
        const logoutLink = activeUser ? <Nav.Link>Logout</Nav.Link> : null; 

        return (
            <div className="HomeNavBar">
                 <Navbar bg="transparent" variant="dark" expand="md">
                    <Navbar.Brand href="/"><Image src={logo} className="brand-logo" roundedCircle />Ripple</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="ml-auto">
                            <Nav.Link href="/Product">Product</Nav.Link>
                            <Nav.Link href="/Features">Features</Nav.Link>
                            <Nav.Link href="/About">About</Nav.Link>
                            {loginLink}
                            {signinLink}
                            {dashboardLink}
                            {logoutLink}
                        </Nav>
                        {/* <Button bg="light" variant="success">Sign Up Free</Button> */}
                    </Navbar.Collapse>
                    {/* <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                        <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                        <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                        <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                        <NavDropdown.Divider />
                        <NavDropdown.Item href="#action/3.4">Logout</NavDropdown.Item>
                    </NavDropdown> */}
                </Navbar>
            </div>
        )
    }
}
