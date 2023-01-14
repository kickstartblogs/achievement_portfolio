import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

function Eventmaker(props) {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  
  
  return (
    <>
    <div className="cardContainer">
      <h2>
        {props.title}
      </h2>
      <p>
        {props.txt}
      </p>
      <Button variant="primary" onClick={handleShow}>
        Certificate
      </Button>
    </div>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>{props.title}</Modal.Title>
        </Modal.Header>
        <Modal.Body><img src={props.img} width="450vw"></img></Modal.Body>
        <Modal.Footer>
          <Button variant="primary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default Eventmaker;
