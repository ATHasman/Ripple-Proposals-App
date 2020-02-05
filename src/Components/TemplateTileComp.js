/** @format */
import '../Components/TemplateTileComp.css'
import React, { Component } from "react";
import { Card, Button } from "react-bootstrap";

// TemplateTileComp props: 
//    Template =  TemplateModel Obj (instance of Parse Template Object) 

export default class TemplateTileComp extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    const { Template } = this.props;

    return (
      <div className="TemplateTileComp">
        <Card>
          <Card.Img variant="top" src={Template.CoverUrl} />
          <Card.Body>
            <Card.Title>{Template.templateName}</Card.Title>
            <Card.Subtitle className="mb-2 text-muted">{Template.serviceType}</Card.Subtitle>
            <Card.Text>{Template.CoverText}</Card.Text>
            <Button variant="primary" href={"#/templates/" + Template.id}>View or Edit Template</Button>
          </Card.Body>
        </Card>
      </div>
    );
  }
}
