import React from 'react';
import { Button, Image, Modal, Table } from 'react-bootstrap';

//A modal to display the data from the selected stream
//right now, data display is only a table of timestamp and value
export default ({isOpen, closeModal, projectData}) => {
  return (
  <div className="static-modal">
    <Modal show={isOpen}>
        <Modal.Header>
          <Modal.Title className="col-md-10">Here's the Data for that Project:</Modal.Title>
          <Button bsStyle="primary" onClick={closeModal}>Close</Button>
        </Modal.Header>

        <Modal.Body>
        <div className='modal-body'>
            <Table striped bordered condensed hover>
              <thead>
                <tr>
                  <th>Timestamp</th>
                  <th>Value</th>
                </tr>
              </thead>
              <tbody>
                {projectData.map((item) => {
                  return <tr>
                    <td>{item.timestamp}</td>
                    <td>{item.int_value}</td>
                  </tr>
                })
              }
              </tbody>
            </Table>
          </div>
          
        </Modal.Body>

        <Modal.Footer>
          <div className='modal-body'>
            <Button bsStyle="primary" onClick={closeModal}>Close</Button>
          </div>
        </Modal.Footer>

    </Modal>
  </div>
  )
};