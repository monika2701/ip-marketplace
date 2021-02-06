import React from 'react';
import {Modal} from 'react-bootstrap';
import { Link } from 'react-router-dom';


const StudentModal = (props) => { 
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
                 <button className="modalbtn2 bg-success"><Link to="/ideaEvaluation" className="Nav_link">I Agree</Link></button>
                
              </Modal.Footer>
          </Modal>
        </>
     );
}

export default StudentModal;
