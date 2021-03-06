/** @format */
import '../Components/TemplateTileComp.css'
import React, { Component } from "react";
import { Card, Button } from "react-bootstrap";

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
        <Card className="TemplateTileCard" bg="light" border="primary" >
          <Card.Img variant="top" style={{ width: '100%' , height: 'auto' }} src={Template.CoverUrl} />
          <Card.Body className="d-flex flex-column">
            <Card.Title size="sm">{Template.templateName}</Card.Title>
            <Card.Subtitle className="mb-2 text-muted">{Template.serviceType}</Card.Subtitle>
            <Card.Text>{Template.CoverText}</Card.Text>
            <Button size="md" href={"#/templates/" + Template.id} bsPrefix="TileButton mt-auto">
              View or Edit Template
            </Button>
          </Card.Body>
          <Card.Footer>
            <small className="text-muted">Last updated: {Template.dateModified.toDateString()}</small>
          </Card.Footer>
        </Card>
      </div>
    );
  }
}
