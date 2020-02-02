/** @format */

import React, { Component } from "react";
import "../Dashboard/Dashboard.css";
import ProNavBar from "../../Components/ProNavBar";
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
    // const { activeUser,handleLogout } = this.props;
    // console.log(this.props);
    return (
      <div className="Dashboard">
        <Container>
          <Row>
            <Col className="lg-2 md-2 sm-1">
              <ProNavBar />
            </Col>
            <Col>
                <h1>Dashboard Page</h1>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}
