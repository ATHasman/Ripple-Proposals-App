import React, { Component } from 'react';
import HomeNavBar from '../../Components/HomeNavBar';
import '../Homepage/Homepage.css';
import { Container, Button, Row, Col, Card } from 'react-bootstrap';


export default class Homepage extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             
        }
    }
    
    render() {
        const { activeUser } = this.props;

        return (
            <div className="Home">
                <HomeNavBar activeUser={activeUser} variant="dark" bg="primary" page="Home"/>
                <Container >
                   <h1 id="Homepage"><a href="#Homepage" className="AnchorLink homepage-h1"><span>#</span></a>Spread your work...</h1>
                    <Card>
                        <Row>
                            <Col>
                                <Card.Body>"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."</Card.Body>
                                <Button>Click here</Button>
                            </Col>
                        </Row>
                    </Card>
                    <h1 id="Product"><a href="#Product" className="AnchorLink product-h1"><span>#</span></a>Product</h1>
                    <Card>
                        <Row>
                            <Col>
                                <Card.Body>"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."</Card.Body>
                                <Button>Click here</Button>
                            </Col>
                        </Row>
                    </Card>
                    <h1 id="Features"><a href="#Features" className="AnchorLin features-h1"><span>#</span></a>Custom Features</h1>
                    <Card>
                        <Row>
                            <Col>
                                <Card.Body>"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."</Card.Body>
                                <Button>Click here</Button>
                            </Col>
                        </Row>
                    </Card>
                </Container>
            </div>
        )
    }
}
