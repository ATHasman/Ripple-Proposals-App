import React, { Component } from 'react';
import HomeNavBar from '../../Components/HomeNavBar';
import '../Homepage/Homepage.css';
import { Container, Button } from 'react-bootstrap';


export default class Homepage extends Component {
    render() {
        return (
            <div className="Home">
                <HomeNavBar />
                <Container xl={3} lg={4} md={6} sm={12} >
                    <Row>
                        <h1><a href="#Homepage" className="AnchorLink"><span>#</span></a>Homepage</h1>
                        <Button>Click here</Button>
                    </Row>
                </Container>
            </div>
        )
    }
}
