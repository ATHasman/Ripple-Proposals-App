/** @format */

import React, { Component } from "react";
import { Modal, Form } from "react-bootstrap";
import { Button } from "react-bootstrap";

// <TempToPropModal/> Props:
//      show={ShowModal} - modal method
//      handleClose={this.handleClose} - modal method
//      TemplateD={Template} Model object{}
//      ServiceItems={ServiceItems} Model object{} />

export default class TempToPropModal extends Component {
  constructor(props) {
    super(props);

    this.state = {
      proposalName: "",
      paymentType: "",
      paymentVariable: "",
      ProposalStatus: "",
      SenderUserID: undefined,
      RecieverUserID: undefined
    };
    console.log("Modal Constructor", this.props);
  }

  render() {
    const { show, handleClose } = this.props;
    return (
      <div>
        <Modal
          show={show}
          onHide={handleClose}
          size="lg"
          aria-labelledby="contained-modal-title-vcenter"
          centered
        >
          <Modal.Header closeButton>
            <Modal.Title id="contained-modal-title-vcenter">
              Create proposal from template
            </Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <h5>Save as Proposal</h5>
            <p>Modal Proposal Detail completion from form input fields.</p>

            <Form>
            <Form.Group controlId="ProposalName">
                <Form.Label>New Proposal Name</Form.Label>
                <Form.Control type="text" placeholder="Proposal Name" />
                {/* <Form.Text className="text-muted">
                We'll never share your email with anyone else.
                </Form.Text> */}
            </Form.Group>

            <Form.Group controlId="PaymentType.ControlSelect1">
                <Form.Label>Select Payment Type</Form.Label>
                <Form.Control as="select" placeholder="Payment Typle">
                <option>NET (Days) – after invoice</option>
                <option>PIA – Pay in Advance </option>
                <option>COD – Cash on Delivery</option>
                <option>NETdisc (Days,%) – after invoice</option>
                <option>Other Type</option>
                </Form.Control>
            </Form.Group>

            <Form.Group controlId="formBasicCheckbox">
                <Form.Check type="checkbox" label="Check me out" />
            </Form.Group>
            </Form>
              {/* // =>  +   "proposalName": "A string",  <=
                        //  >>   "proposalCoverUrl": "A string",
                        //  >>   "proposalCoverText": "A string",
                        //  >>  "proposalOverView": "A string",
                        //  >>   "ProposalWhyUs": "A string",
                        //  >>  "proposalWhyUsUrl": "A string",
                        //  >>  "proposalCostUSD": 1,
                        //  >>   "projectDelivery": "2018-11-12T13:13:45.958Z",
                        // => +   "paymentType": "A string",   <=
                        // => +   "paymentVariable": "A string",
                        //  >>   "proposalItems": { "__type": "Relation", "className": "ServiceItems" },
                        // => +   "ProposalStatus": "A string", <=
                        // => +   "SenderUserID": { "__type": "Relation", "className": "_User" }    <=
                        // => +   "RecieverUserID": { "__type": "Relation", "className": "Contacts" }   <= */}
          </Modal.Body>
          <Modal.Footer className="justify-content-center">
            <Button onClick={handleClose}>Close</Button>
            {/* <Button onClick={handleNewProposal}>Save as Proposal</Button> */}
          </Modal.Footer>
        </Modal>
      </div>
    );
  }
}
