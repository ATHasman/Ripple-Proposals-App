import React, { Component } from 'react';
import logo from '../Img/Ripple_Hand_logo_400x400 transparent.png';
import { Button, Navbar, Nav, Image, Badge } from 'react-bootstrap';
import '../Components/HomeNavBar.css';

// HomeNavBar Props:
//  activeUser: Null/Value ,variant (style): ,bg (style): , page: string "Home"/"Login".... 

export default class HomeNavBar extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
        }

       
    }
    

    render() {
        const { activeUser,variant,bg,page } = this.props;

        const productLink = !activeUser ? <Nav.Link href="/Product">Product</Nav.Link> : null;
        const featuresLink = !activeUser ? <Nav.Link href="/Features">Features</Nav.Link> : null;
        const aboutLink = !activeUser ? <Nav.Link href="/About">About</Nav.Link> : null;

        const dashboardLink = activeUser ? <Nav.Link href="#/dashboard">Dashboard</Nav.Link> : null;
        const signinLink = !activeUser && page!="Signup" ?  <Nav.Link href="#/signup" className="signupLink">Sign in <Badge>free</Badge></Nav.Link> : null;
        const loginLink = !activeUser && page!="Login"? <Nav.Link href="#/login">Login</Nav.Link> : null;
        const logoutLink = activeUser ? <Nav.Link>Logout</Nav.Link> : null; 

        return (
            <div className="HomeNavBar">
                 <Navbar bg={bg} variant={variant} expand="md">
                    <Navbar.Brand href="/"><Image src={logo} className="brand-logo" roundedCircle />Ripple</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="ml-auto">
                            {productLink}
                            {featuresLink}
                            {aboutLink}
                            {loginLink}
                            {signinLink}
                            {dashboardLink}
                            {logoutLink}
                        </Nav>
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
