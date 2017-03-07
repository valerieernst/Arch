import React from 'react';
import { Button, Image, Modal } from 'react-bootstrap';


export default ({isOpen, closeModal, projectData}) => {
  console.log(projectData);
  return (
  <div className="static-modal">
    <Modal show={isOpen}>
        <Modal.Header>
          <Modal.Title>Here's the Data for that Project:</Modal.Title>
        </Modal.Header>

        <Modal.Body>
        {projectData.map((item) => {
          return <div className='modal-body'>
            <h4>{item.int_value}</h4>
            <p>{item.timestamp}</p>
          </div>
          
        })
      }
        </Modal.Body>

        <Modal.Footer>
          <div className='modal-body'>
            <Button onClick={closeModal}>Close</Button>
          </div>
        </Modal.Footer>

    </Modal>
  </div>
  )
};