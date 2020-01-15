import React, { Component } from 'react'
import '../Homepage/Homepage.css';
import { Container, Button } from 'react-bootstrap'


export default class Homepage extends Component {
    render() {
        return (
            <div className="Home">
                <Container>
                <h1>Homepage</h1>
                <Button>Click here</Button>
                </Container>
            </div>
        )
    }
}
