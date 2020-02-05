/** @format */

import React, { Component } from "react";
import "../Templates/Templates.css";
import {  Container,Row,Col,InputGroup,Jumbotron} from "react-bootstrap";
import Parse from 'parse';
import SearchBoxComp from "../../Components/SearchBoxComp";
import TemplateModel from "../../Models/TemplateModel";
import TemplateTileComp from "../../Components/TemplateTileComp";

// Template Component Props:
// activeUser={activeUser}

export default class Templates extends Component {
  constructor(props) {
    super(props);

    this.state = {
      Templates:  []
    };
  }

  componentDidMount() {
    if (this.props.activeUser) {
        const templates = Parse.Object.extend('Templates');
        const query = new Parse.Query(templates);
         // query.equalTo("serviceChargeQty", 1); //Query Condition segmentation

        query.find().then((results) => {
          const Templates = results.map(result => {
            let temp = new TemplateModel(result);
            console.log("each template inside map: ",temp);
            return temp;
          });
          this.setState({Templates});
        }, (error) => {
          console.error('Error while fetching Templates', error);
        });
    }
}


  render() {

    const { activeUser } = this.props;
    const { Templates } = this.state;
    console.log("state: "+Templates);

    const TemplatesView = Templates.map(Temp => 
      <Col lg={3} md={4}>
          <TemplateTileComp Template={Temp} key={Templates.templateName}/>
      </Col>)
    console.log(TemplatesView);

    // Reading Templates Class from Parse (Extracting all Available Templates)
        // const Templates = Parse.Object.extend("Templates");
        // const query = new Parse.Query(Templates);
        // query.equalTo("serviceType", "A string");
        // query.equalTo("dateModified", new Date());
        // query.equalTo("templateName", "A string");
        // query.equalTo("CoverText", "A string");
        // query.equalTo("OverView", "A string");
        // query.equalTo("WhyUs", "A string");
        // query.equalTo("CoverUrl", "A string");
        // query.equalTo("serviceItems", new Parse.Object("ServiceItems"));
        // query.equalTo("WhyUsUrl", "A string");
        // query.equalTo("serviceChargeQty", 1);
        // query.equalTo("serviceCostUSD", 1);
        // query.equalTo("serviceDelivery", new Date());
        // query.equalTo("paymentType", "A string");
        // query.equalTo("paymentVariable", "A string");
        // query.find().then(
        //   results => {
        //     // You can use the "get" method to get the value of an attribute
        //     // Ex: response.get("<ATTRIBUTE_NAME>")
            
        //     console.log("Templates found", results);
        //   },
        //   error => {
        //     console.error("Error while fetching Templates", error);
        //   }
        // );

    return (
      <div className="Templates">
        <Jumbotron>
          <h1>
            Templates
            <InputGroup className="mb-3">
              <InputGroup.Prepend>
                <InputGroup.Text>
                  Industry : {activeUser.industryField}
                </InputGroup.Text>
              </InputGroup.Prepend>
            </InputGroup>
          </h1>
          <p>
            You can select and custome edit the suggested template, or just
            Create a new template from scratch...
          </p>
          <SearchBoxComp
            searchPlaceholder="Search Template"
            results={["Template 1", "Template 2", "Template 3"]}
          />
        </Jumbotron>
        
        {/* Map/Loop Rendering the Tiles of Templates in the Container Section */}

        <Container>
          <Row>
              {TemplatesView}
          </Row>
        </Container>
      </div>
    );
  }
}
