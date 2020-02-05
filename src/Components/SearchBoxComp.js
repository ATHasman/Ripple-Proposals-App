/** @format */

import React, { Component } from "react";
import { ListGroup, Form } from "react-bootstrap";


// SearchBoxComp Props:
// results [] Array .
// searchPlaceholder - String to display.

export default class SearchBoxComp extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {

    const { searchPlaceholder, results } = this.props;
    //Mapping Props Arr => to new Arr[] of JSX Elements set in {resultsGroupItems} variable to be rendered.
    const { resultsGroupItems } = results.map(result => <ListGroup.Item key={result}>{result}</ListGroup.Item>);

    return (
      <div className="search-box">
        <Form.Control type="text" placeholder={searchPlaceholder}/>
        <ListGroup className="search-results">
          {resultsGroupItems}
        </ListGroup>
      </div>
    );
  }
}
