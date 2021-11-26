import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import Badge from 'react-bootstrap/Badge';

function BarraTop(){
    return(      
      <>
      <Navbar className="border-top" bg="light" variant="light">
      <Navbar.Brand href="#home">         
      </Navbar.Brand>
      <Navbar.Collapse className="justify-content-end">
<ButtonGroup aria-label="Basic example">
  <Button variant="secondary">SOLICITAÇÕES PENDENTES <Badge bg="danger"> 10</Badge></Button>
  <Button variant="secondary">GERENCIAR PEDIDOS</Button>
  <Button variant="secondary">CONTATO</Button>
</ButtonGroup> 
    </Navbar.Collapse>
  </Navbar>   
    </>      
    )
}

export default BarraTop;