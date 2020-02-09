/** @format */

import React, { Component } from "react";
import { Table } from "react-bootstrap";

// <ServiceItemsTable> Props:
//      activeUser={activeUser} Obj
//      ServiceItems={ServiceItems} Array of ServiceItemsModel

export default class ServiceItemsTable extends Component {
  constructor(props) {
    super(props);
    this.state = {

    };

    console.log("ServiceItems props Constructor", this.props.ServiceItems );
  }

  render() {
    const { activeUser, ServiceItems } = this.props;
    let ServiceRowItems = [];
    ServiceItems.map((item, index) => {
        ServiceRowItems.push(
        <tr>
            <td>{index+1}</td>
            <td>{item.serviceName}</td>
            <td>{item.serviceDescription}</td>
            <td>{item.serviceChargeBy}</td>
            <td>{item.serviceChargeQty}</td>
            <td>{item.serviceChargePrice}</td>
            <td>{item.serviceChargeQty*item.serviceChargePrice}</td>
        </tr>
        )
    });
    console.log(ServiceRowItems);

    return (
      <div classsName="ServiceItemsTable">
        <Table responsive>
          <thead>
            <tr>
              <th>Item#</th>
              <th>Service Name</th>
              <th>Description</th>
              <th>Charge By</th>
              <th>Charge Qty.</th>
              <th>Price ($USD)</th>
              <th>Invest</th>
            </tr>
          </thead>
          <tbody>
              {ServiceRowItems}
          </tbody>
        </Table>
      </div>
    );
  }
}

// {
//     "serviceDescription": "A string",
//     "serviceName": "A string",
//     "serviceField": "A string",
//     "serviceType": "A string",
//     "serviceChargeBy": "A string",
//     "serviceChargePrice": 1,
//     "isProjectBased": true,
//     "serviceChargeQty": 1
//   }