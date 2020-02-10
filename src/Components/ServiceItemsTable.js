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

    this.calsServiceCost = this.calsServiceCost.bind(this)
  }

  calsServiceCost() {
    const {ServiceItems} = this.props;
    const defaultProjectService = 10000;
    if (!ServiceItems.isProjectBased) {
      return ((ServiceItems.serviceChargeQty)*(ServiceItems.serviceChargePrice));
    } else {
      return (defaultProjectService)
    };
  }
  
  render() {
    const { activeUser, ServiceItems } = this.props;
    let ServiceRowItems = [];
    ServiceItems.map((item, index) => {
      ServiceRowItems.push(
      <tr key={`${activeUser.id}-${item.id}-serviceItem${index}`} >
          <td>{index+1}</td>
          <td key={`${activeUser.id}-${item.id}-serviceName`}>{item.serviceName}</td>
          <td key={`${activeUser.id}-${item.id}-serviceDescription`}>{item.serviceDescription}</td>
          <td key={`${activeUser.id}-${item.id}-serviceChargeBy`}>{item.serviceChargeBy}</td>
          <td key={`${activeUser.id}-${item.id}-serviceChargeQty`}>{item.serviceChargeQty}</td>
          <td key={`${activeUser.id}-${item.id}-serviceChargePrice`}>{item.serviceChargePrice}</td>
          <td key={`${activeUser.id}-${item.id}-serviceItemCost`}>{item.calsServiceCost}</td>
      </tr>       );
    });
    console.log(ServiceRowItems);

    return (
      <div className="ServiceItemsTable">
        <Table key={`${activeUser.id}-${ServiceItems.id}-serviceTable`} responsive>
          <thead key={`${activeUser.id}-${ServiceItems.id}-thead`}>
            <tr key={`${activeUser.id}-${ServiceItems.id}-tr`}>
              <th key={`${activeUser.id}-${ServiceItems.id}-#`}>Item#</th>
              <th key={`${activeUser.id}-${ServiceItems.id}-Name`}>Service Name</th>
              <th key={`${activeUser.id}-${ServiceItems.id}-Description`}>Description</th>
              <th key={`${activeUser.id}-${ServiceItems.id}-ChargeBy`}>Charge By</th>
              <th key={`${activeUser.id}-${ServiceItems.id}-Qty`}>Charge Qty.</th>
              <th key={`${activeUser.id}-${ServiceItems.id}-Price`}>Price ($USD)</th>
              <th key={`${activeUser.id}-${ServiceItems.id}-Cost`}>Invest</th>
            </tr>
          </thead>
          <tbody key={`${activeUser.id}-${ServiceItems.id}-tbody`}>
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