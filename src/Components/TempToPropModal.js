import React, { Component } from 'react'
import { Modal } from 'react-bootstrap';
import { Button } from 'react-bootstrap';

// <TempToPropModal/> Props: 
//      show={ShowModal} - modal method
//      handleClose={this.handleClose} - modal method
//      TemplateData={Template} Model object{}
//      ServiceItemsData={ServiceItems} Model object{} />

export default class TempToPropModal extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
            proposalName : "",
            paymentType :   "",
            paymentVariable :   "",
            ProposalStatus :   "",
            SenderUserID :   undefined,
            RecieverUserID :   undefined,
        }
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
                    <p> Modal Proposal Detail completion from form input fields, 

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
                    </p>
                </Modal.Body>
                <Modal.Footer className="justify-content-center">
                    <Button onClick={handleClose}>Close</Button>
                    {/* <Button onClick={handleNewProposal}>Save as Proposal</Button> */}
                </Modal.Footer>
                </Modal>
            </div>
        )
    }
}
  
    
