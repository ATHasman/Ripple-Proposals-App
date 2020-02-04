/** @format */
import "../Components/ProNavBar.css";

import React, { Component } from "react";
import { Form, FormControl, Navbar, Nav } from "react-bootstrap";

export default class ProNavBar extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }
  render() {
    return (
      <div className="ProNavBar">
        <Navbar collapseOnSelect expand="md" bg="light" variant="light">
        <Navbar.Brand href="#dashboard">Dashboard</Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="justify-content-center">
              <Nav.Link href="#templates">Templates</Nav.Link>
              <Nav.Link href="#proposals">Proposals</Nav.Link>
              <Nav.Link href="#message">Messages</Nav.Link>
              <Nav.Link href="#contacts">Contacts</Nav.Link>
              <Nav.Link href="#profile">Profile</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </div>
    );
  }
}
