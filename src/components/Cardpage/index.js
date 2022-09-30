import React, { useState } from 'react';
import { Button } from 'react-bootstrap';
import { Modal } from 'react-bootstrap';

const Cardpage = ({ cover, title, description, index }) => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Button variant="primary" onClick={(e) => {
        e.currentTarget.blur();
        handleShow()
        }}
      >
        VIEW
      </Button>

      <Modal
        show={show}
        onHide={handleClose}
        size='xxl'
        centered
      >
        <Modal.Header>
          <Modal.Title>{title}</Modal.Title>
        </Modal.Header>
        <Modal.Body>{description}</Modal.Body>
      </Modal>
    </>
  );
}

export default Cardpage