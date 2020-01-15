import React, { Component } from 'react'
import logo from '../Img/Ripple_Hand_logo_400x400 transparent.png'
import { Button, Navbar, Nav, Image } from 'react-bootstrap'

export default class HomeNavBar extends Component {

    render() {
        return (
            <div className="HomeNavBar">
                 <Navbar bg="primary" variant="dark" expand="md">
                    <Navbar.Brand href="/"><Image src={logo} className="brand-logo" roundedCircle />Ripple</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="ml-auto">
                            <Nav.Link href="#/#features">Features</Nav.Link>
                            <Nav.Link href="#/#product">Product</Nav.Link>
                            <Nav.Link href="#/#about">About</Nav.Link>
                            <Nav.Link href="#/login">Login</Nav.Link>
                        </Nav>
                        <Button bg="light" variant="success" >Sign Up Free</Button>
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
