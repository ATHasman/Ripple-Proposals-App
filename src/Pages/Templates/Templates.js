/** @format */

import React, { Component } from "react";
import ProNavBar from "../../Components/ProNavBar";
import { Container, Row, Col, Form, FormControl } from "react-bootstrap";

// Template Component Props:
// activeUser={activeUser}
// handleLogin={this.handleLogin}

export default class Templates extends Component {
  render() {
    return (
      <div className="Templates">
        <ProNavBar />
        <Container>
          <Row>
            <Col>
              <h1>Templates</h1>
            </Col>
            <Col>
              <p>industry field</p>
              <Form className="flex-sm-column ml-auto " inline>
                <FormControl
                  type="text"
                  placeholder="Search..."
                  className="mr-auto"
                  placeholder="Search"
                  size="sm"
                />
              </Form>
            </Col>
          </Row>
          <Row>
            <Col>
              <p>Temp. tile</p>
            </Col>
            <Col>
              <p>Temp. tile</p>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}
