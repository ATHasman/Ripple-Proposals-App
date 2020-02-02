/** @format */
import "../Components/ProNavBar.css";

import React, { Component } from "react";
import { Form, FormControl, Button, Navbar, Nav } from "react-bootstrap";

export default class ProNavBar extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }
  render() {
    return (
      <div className="ProNavBar">
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
        
        <Navbar.Brand href="#dashboard">Dashboard</Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="mr-auto">
            <Nav.Link href="#templates">Templates</Nav.Link>
            <Nav.Link href="#proposals">Proposals</Nav.Link>
            <Nav.Link href="#message">Messages</Nav.Link>
            <Nav.Link href="#contcts">Contacts</Nav.Link>
            <Nav.Link href="#settings">Settings</Nav.Link>
            </Nav>
            <Nav>
            <Form className="flex-sm-column mr-auto search-Input" inline>
            <FormControl
              type="text"
              placeholder="Search..."
              className="mr-auto"
              placeholder="Search"
              size="sm"
            />
          </Form>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </div>
    );
  }
}
