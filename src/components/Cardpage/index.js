import React, { useState } from 'react';
import { Button } from 'react-bootstrap';
import { Modal } from 'react-bootstrap';
import './index.scss';

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
        dialogClassName='increase-width'
        show={show}
        onHide={handleClose}
        centered
        scrollable={true}
      >
        <Modal.Header closeButton>
          <Modal.Title>{title}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <img src={cover} alt='project example' className='img-fluid' />
          {description}
          </Modal.Body>
      </Modal>
    </>
  );
}

export default Cardpage