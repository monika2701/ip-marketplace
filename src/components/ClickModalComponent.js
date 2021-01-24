import React from 'react';
import {Modal} from 'react-bootstrap';
import { Link } from 'react-router-dom';


const ClickModal = (props) => { 
    return (
        <>
          <Modal show={props.modalOpen} onHide={props.handleModalOpen}
           dialogClassName="main-modal">
              <Modal.Header closeButton>
                 <Modal.Title>Before proceeding further, you should know:
                 </Modal.Title>
              </Modal.Header>
              <Modal.Body>
                <ul>
                  <li>Parintek does not provide data to third-party vendors & will put utmost effort in safeguarding ideas submitted on our marketplace.</li>
                          <br/><li>Submission of an idea on Parintek Marketplace do not guarantee a patent grant.</li>
                         <br/><li> Parintek Team will start evaluating an idea only after signing a non-disclosure agreement.
                          </li></ul></Modal.Body>
              <Modal.Footer>
                 <button onClick={props.handleModalOpen} className="modalbtn1 bg-danger">I don't Agree
                 </button>
                 <button className="modalbtn2 bg-success"><Link to="/serviceEnquiry" className="Nav_link">I Agree</Link></button>
                
              </Modal.Footer>
          </Modal>
        </>
     );
}

export default ClickModal;


/* import React, { useState } from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

const ModalExample = (props) => {
  const {
    buttonLabel,
    className
  } = props;

  const [modal, setModal] = useState(false);

  const toggle = () => setModal(!modal);

  return (
    <div>
      <Button color="danger" onClick={toggle}>press</Button>
      <Modal isOpen={modal} toggle={toggle} className={className}>
        <ModalHeader toggle={toggle}>Modal title</ModalHeader>
        <ModalBody>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
        </ModalBody>
        <ModalFooter>
          <Button color="primary" onClick={toggle}>Do Something</Button>{' '}
          <Button color="secondary" onClick={toggle}>Cancel</Button>
        </ModalFooter>
      </Modal>
    </div>
  );
}

export default ModalExample; */