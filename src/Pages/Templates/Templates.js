/** @format */

import React, { Component } from "react";
import '../Templates/Templates.css'
import {
  Container,
  Row,
  Col,
  Form,
  FormControl,
  InputGroup,
  Accordion,
  Card
} from "react-bootstrap";

// Template Component Props:
// activeUser={activeUser}
// handleLogin={this.handleLogin}

export default class Templates extends Component {
  render() {
    return (
      <div className="Templates">
        <Container>
          <Form>
            <Row>
              <Col>
                <InputGroup className="mb-3">
                  <InputGroup.Prepend>
                    <InputGroup.Text>Search Template</InputGroup.Text>
                  </InputGroup.Prepend>
                  <FormControl />
                </InputGroup>
              </Col>
            </Row>
          </Form>
          <Row>
            <Col>
              <Accordion defaultActiveKey="0">
                <Card>
                  <Accordion.Toggle as={Card.Header} eventKey="0">
                    Click me!
                  </Accordion.Toggle>
                  <Accordion.Collapse eventKey="0">
                    <Card.Body>Hello! I'm the body</Card.Body>
                  </Accordion.Collapse>
                </Card>
                <Card>
                  <Accordion.Toggle as={Card.Header} eventKey="1">
                    Click me!
                  </Accordion.Toggle>
                  <Accordion.Collapse eventKey="1">
                    <Card.Body>Hello! I'm another body</Card.Body>
                  </Accordion.Collapse>
                </Card>
              </Accordion>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}
