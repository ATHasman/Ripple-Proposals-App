import React, { Component } from 'react'
import '../Homepage/Homepage.css';
import logo from '../../Img/Ripple_Hand_logo_400x400 transparent.png'
import { Container, Button, Navbar, Nav, Image } from 'react-bootstrap'


export default class Homepage extends Component {
    render() {
        return (
            <div className="Home">
                 <Navbar bg="primary" variant="dark">
                    <Navbar.Brand href="/home">
                        <Image src={logo} className="brand-logo" rounded />
                        Ripple
                    </Navbar.Brand>
                    <Nav className="mr-auto">
                        <Nav.Link href="#features">Features</Nav.Link>
                        <Nav.Link href="#product">Product</Nav.Link>
                        <Nav.Link href="#about">About</Nav.Link>
                    </Nav>
                    <Button bg="light" variant="success" >Sign Up Free</Button>
                </Navbar>
                <Container>
                <h1>Homepage</h1>
                <Button>Click here</Button>
                </Container>
            </div>
        )
    }
}
