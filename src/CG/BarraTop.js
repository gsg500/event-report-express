import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';

function BarraTop(){
    return(      
      <>
      <Navbar bg="light" variant="light">
      <Navbar.Brand href="#home">
         
      </Navbar.Brand>
      <Navbar.Collapse className="justify-content-end">
<ButtonGroup aria-label="Basic example">
  <Button variant="secondary">Programação</Button>
  <Button variant="secondary">Cadastrar</Button>
  <Button variant="secondary">Regras</Button>
</ButtonGroup> 
    </Navbar.Collapse>
  </Navbar>   
    </>      
    )
}

export default BarraTop;