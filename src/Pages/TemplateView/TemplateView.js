/** @format */

import React, { Component } from "react";
import "../TemplateView/TemplateView.css";
import TemplateModel from "../../Models/TemplateModel";
import { Container, Jumbotron, InputGroup, Card } from "react-bootstrap";
import Parse from "parse";
import ServicItemsModel from "../../Models/ServiceItemsModel";
import ServiceItemsTable from "../../Components/ServiceItemsTable.js";

// TemplateView Props:
//      activeUser={activeUser}

export default class TemplateView extends Component {
  constructor(props) {
    super(props);

    this.state = {
      activeTemplateId: window.location.href.split("/")[
        window.location.href.split("/").length - 1
      ],
      Template: {}, 
      ServiceItems: []
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
          // setResult in ServiceItems
          let templateServiceItemRelation = result.relation("serviceItems"); 
          let itemsQuery = templateServiceItemRelation.query();
          itemsQuery.find().then( results => {
              const ServiceItems = results.map(item => new ServicItemsModel(item));
              console.log("ServiceItems found",ServiceItems);
              this.setState({ServiceItems});
          });
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
    const { activeTemplateId, Template, ServiceItems } = this.state;

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
          <section className="Title">
            <Card className="text-center">
              <Card.Header text="black" as="h1">
                {Template.templateName}{" "}
              </Card.Header>
            </Card>
          </section>
          <section className="Cover">
            <Card>
              <Card.Img src={Template.CoverUrl} alt={Template.serviceType} />
              <Card.ImgOverlay className="Cover.Text.Overlay">
                <Card bg="transparent" text="white">
                <Card.Header text="black" as="h4"> {Template.CoverText} </Card.Header>
                  <Card.Text> Sent by : {activeUser.fname} </Card.Text>
                  <Card.Text>Businees Proposal : {Template.serviceType}</Card.Text>
                  {/* Use Contact feature */}
                  <Card.Text>
                    Client : {"contact.fname"} {"contact.lname"}
                  </Card.Text>
                </Card>
              </Card.ImgOverlay>
            </Card>
          </section>
          <section className="OverView">
            <Card>
            <Card.Header text="black" as="h4"> Overview and Objectives </Card.Header>
              <Card.Text>
                {Template.OverView}
              </Card.Text>
            </Card>
          </section>
          <section className="serviceItems">
            <Card>
            <Card.Header text="black" as="h4">{Template.serviceType} - Scope of Service </Card.Header>
              <Card.Body>
                <ServiceItemsTable activeUser={activeUser} ServiceItems={ServiceItems}/>
              </Card.Body>
            </Card>
          </section>
          <section className="WhyUs">
            <Card>
              <Card.Header as="h3">
                Why Us?
              </Card.Header>
              <Card.Text>
                {Template.WhyUs}
              </Card.Text>
            </Card>
          </section>
        </Container>
      </div>
    );
  }
}

// ("serviceType", 'A string');
// ("dateModified", new Date());
// ("templateName", 'A string');
// ("CoverText", 'A string');
// ("OverView", 'A string');
// ("WhyUs", 'A string');
// ("CoverUrl", 'A string');
// ("serviceItems", new Parse.Object("ServiceItems")); // - needs activation
// ("WhyUsUrl", 'A string');
// ("serviceChargeQty", 1);
// ("serviceCostUSD", 1);
// ("serviceDelivery", new Date());
// ("paymentType", 'A string');
// ("paymentVariable", 'A string');
