/** @format */
import "../Components/ProNavBar.css";

import React, { Component } from "react";
import { Form, FormControl, Button, Navbar, Nav } from "react-bootstrap";

export default class ProNavBar extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             
        }
    }
  render() {
    return (
      <div className="ProNavBar">
        <Navbar bg="dark" variant="dark" className="flex-sm-column mr-auto" expand="md">
          <Navbar.Brand href="#dashboard">Dashboard</Navbar.Brand>
          <Nav className="flex-column mr-auto">
            <Nav.Link href="#status">Status</Nav.Link>
            <Nav.Link href="#templates">Templates</Nav.Link>
            <Nav.Link href="#proposals">Proposals</Nav.Link>
            <Nav.Link href="#message">Messages</Nav.Link>
            <Nav.Link href="#contcts">Contacts</Nav.Link>
          </Nav>
          <Form className="flex-sm-column mr-auto" inline>
            <FormControl type="text" placeholder="Search" className="mr-auto" placeholder="Search" />
            {/* <Button variant="outline-info" size="small">Search</Button> */}
          </Form>
        </Navbar>
      </div>
    );
  }
}
