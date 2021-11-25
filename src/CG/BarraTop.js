import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';

function BarraTop(){
    return(      
      <>
      <Navbar bg="danger" variant="light">
      <Navbar.Brand href="#home">
         
      </Navbar.Brand>
      <Navbar.Collapse className="justify-content-end">
<ButtonGroup aria-label="Basic example">
  <Button variant="danger">Programação</Button>
  <Button variant="danger">Cadastrar</Button>
  <Button variant="danger">Fale Conosco</Button>
</ButtonGroup> 
    </Navbar.Collapse>
  </Navbar>   
    </>      
    )
}

export default BarraTop;