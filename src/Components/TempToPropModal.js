import React, { Component } from 'react'
import { Modal } from 'react-bootstrap';
import { Button } from 'react-bootstrap';

export default class TempToPropModal extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             
        }
    }
    
    render() {
        const { show, handleClose } = this.props;
        return (
            <div>
                 {/* <Button variant="primary" onClick={() => setShow(true)}>
                        Custom Width Modal
                    </Button> */}
            <Modal  
                show={show} 
                onHide={handleClose}
                size="lg"
                aria-labelledby="contained-modal-title-vcenter"
                centered
                >
                <Modal.Header closeButton>
                    <Modal.Title id="contained-modal-title-vcenter">
                    Modal heading
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <h4>Centered Modal</h4>
                    <p>
                    Cras mattis consectetur purus sit amet fermentum. Cras justo odio,
                    dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac
                    consectetur ac, vestibulum at eros.
                    </p>
                </Modal.Body>
                <Modal.Footer>
                    <Button onClick={handleClose}>Close</Button>
                </Modal.Footer>
                </Modal>
            </div>
        )
    }
}
  
    
