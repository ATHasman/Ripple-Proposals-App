/** @format */

import React, { Component } from "react";
import "../Templates/Templates.css";
import {  Container,Row,Col,InputGroup,Jumbotron, CardGroup} from "react-bootstrap";
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
        const parseTemplates = Parse.Object.extend('Templates');
        const query = new Parse.Query(parseTemplates);

        query.find().then((results) => {
          // Mapping parse Results to new Arr[] of TemplateModel into Templates(var)
            const Templates = results.map(result => {
            let temp = new TemplateModel(result);
            console.log("each template inside map: ",temp);
            return temp;
          });
          console.log("all Templates: ",Templates);
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
      <Col key={Temp.id} lg={3} md={4}>
          <TemplateTileComp Template={Temp} key={Temp.id}/>
      </Col>)
    console.log("TemplateView: " ,TemplatesView);

    return (
      <div className="Templates">
        <Jumbotron className="templates-JT">
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
          {/* Implementation Needed SearchComponent  */}
          <SearchBoxComp
            searchPlaceholder="Search Template"
            results={["Template 1", "Template 2", "Template 3"]}
          />
        </Jumbotron>
        <Container>
          <Row>
            <CardGroup>
              {/* Map/Loop Rendering the Tiles of Templates in the Container Section */}
              {TemplatesView}
            </CardGroup>
          </Row>
        </Container>
      </div>
    );
  }
}
