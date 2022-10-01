import React, { useState } from 'react';
import { Button } from 'react-bootstrap';
import { Modal } from 'react-bootstrap';
import './index.scss';

const Cardpage = (props) => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const { title, description, description2, description3, pic1, pic2, pic3 } = props.project;

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
          <img src={pic1} alt='project example 1' className='img-fluid' />
          <h2>PLANNING</h2>
          <p>{description2}</p>
          <img src={pic2} alt='project example 2' className='img-fluid' />
          <h2>RESULT</h2>
          <p>{description3}</p>
          <img src={pic3} alt='project example 3' className='img-fluid' />
          </Modal.Body>
      </Modal>
    </>
  );
}

export default Cardpage