import React from 'react';
import { useState } from "react";
import Modal from 'react-bootstrap/Modal';

function ModalOrdens(props) {
    const [lgShow, setLgShow] = useState(false);
      // <Button onClick={() => setLgShow(true)}>Ordem de compra</Button>
      setLgShow(props.evcModal);
          return (
      <>             
        <Modal
          size="lg"
          show={lgShow}
          onHide={() => setLgShow(false)}
          aria-labelledby="example-modal-sizes-title-lg"        >
          <Modal.Header closeButton>
            <Modal.Title id="example-modal-sizes-title-lg">
              Ordem de Compra
            </Modal.Title>
          </Modal.Header>
          <Modal.Body>..</Modal.Body>
        </Modal>
      </>
    );
  }
  
  export default ModalOrdens;