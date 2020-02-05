/** @format */

import React, { Component } from "react";
import "../Dashboard/Dashboard.css";
import { Container, Row, Col } from "react-bootstrap";

//<Dashboard/> Page Props:
//  activeUser={activeUser}
//  handleLogout={this.handleLogout}
export default class Dashboard extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    return (
      <div className="Dashboard">
        <Container>
          <Row>
              <Col>
                    <h1>Dashboard</h1>
                </Col>
            </Row>
        </Container>
      </div>
    );
  }
}
