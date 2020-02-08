/** @format */

import React, { Component } from "react";
import "../TemplateView/TemplateView.css";
import TemplateModel from "../../Models/TemplateModel";
import { Container, Jumbotron, InputGroup, Card } from "react-bootstrap";
import Parse from "parse";

// TemplateView Props:
//      activeUser={activeUser}

export default class TemplateView extends Component {
  constructor(props) {
    super(props);

    this.state = {
      activeTemplateId: window.location.href.split("/")[
        window.location.href.split("/").length - 1
      ],
      Template: {}
    };
  }

  componentDidMount() {
    // Repeating Initial Constructor Template Page View - Updating new State in case of change
    //Extracting the Template ID from window URL (String.Split > last subdomain soffix after "/"  ) .
    let tempId = window.location.href.split("/")[
      window.location.href.split("/").length - 1
    ];
    // Async reading from Parse Templates DB
    if (this.props.activeUser) {
      const parseTemplates = Parse.Object.extend("Templates");
      const query = new Parse.Query(parseTemplates);
      query.get(tempId).then(
        result => {
          console.log("Templates found", result);
          // setResult in templateResult
          let templateResultModel = new TemplateModel(result);
          console.log("Model from parse result: ", templateResultModel);
          // Updating State with Template_id; Extracted Template from Parse Template DB
          this.setState({
            activeTemplateId: tempId,
            Template: templateResultModel
          });
        },
        error => {
          console.error("Error while fetching Templates", error);
        }
      );
    }
  }

  render() {
    const { activeUser } = this.props;
    const { activeTemplateId, Template } = this.state;

    return (
      <div className="TemplateView">
        <Jumbotron className="templateView-JT">
          <h1>{Template.templateName}</h1>
          <InputGroup className="mb-3">
            <InputGroup.Prepend>
              <InputGroup.Text>
                Industry : {activeUser.industryField}
              </InputGroup.Text>
            </InputGroup.Prepend>
          </InputGroup>
          <p>You can Modify Customize and Edit your content template....</p>
          <small>Template ID : {activeTemplateId}</small>
        </Jumbotron>

        <Container>
          <Card>
            <Card.Header>
            <h4>{Template.serviceType}</h4>
            <p>{activeUser.userType}</p> 
            </Card.Header>
            <Card.Img src={Template.CoverUrl} alt={Template.serviceType} />
            <Card.Body>

            </Card.Body>
          </Card>
        </Container>
      </div>
    );
  }
}
