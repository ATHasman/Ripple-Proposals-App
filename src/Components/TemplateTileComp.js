/** @format */
import '../Components/TemplateTileComp.css'
import React, { Component } from "react";
import { Card, Button, Nav } from "react-bootstrap";

// TemplateTileComp props: 
//    Template =  TemplateModel Obj (instance of Parse Template Object) 

export default class TemplateTileComp extends Component {
  constructor(props) {
    super(props);

    this.state = {}
  }

  render() {
    const { Template } = this.props;
    return (
      <div className="TemplateTileComp">
        <Card className="TemplateTileCard">
          <Card.Img variant="top" style={{ width: '100%' , height: 'auto' }} src={Template.CoverUrl} />
          <Card.Body className="d-flex flex-column">
            <Card.Title>{Template.templateName}</Card.Title>
            <Card.Subtitle className="mb-2 text-muted">{Template.serviceType}</Card.Subtitle>
            <Card.Text>{Template.CoverText}</Card.Text>
            <Nav.Link size="md" href={"#/templates/" + Template.id} className="TileButton mt-auto">
              View or Edit Template
            </Nav.Link>
          </Card.Body>
          <Card.Footer>
            <small className="text-muted">Last updated: {Template.dateModified.toDateString()}</small>
          </Card.Footer>
        </Card>
      </div>
    );
  }
}
