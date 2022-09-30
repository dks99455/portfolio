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
          <h2>INTRODUCTION</h2>
          <p>{description}</p>
          <img src={cover} alt='project example 1' className='img-fluid' />
          <h2>PLANNING</h2>
          <p>{description}</p>
          <img src={cover} alt='project example 2' className='img-fluid' />
          <h2>RESULT</h2>
          <p>{description}</p>
          <img src={cover} alt='project example 3' className='img-fluid' />
          </Modal.Body>
      </Modal>
    </>
  );
}

export default Cardpage