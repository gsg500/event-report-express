import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import Badge from 'react-bootstrap/Badge';
import { Link } from "react-router-dom";

function BarraTop(){
    return(      
      <>
      <Navbar className="border-top" bg="secondary" variant="light">
      <Navbar.Brand href="#home">         
      </Navbar.Brand>
      <Navbar.Collapse className="justify-content-end">
<ButtonGroup aria-label="Basic example">
  <Link to="/pendentes"> 
  <Button variant="secondary">SOLICITAÇÕES PENDENTES <Badge bg="danger"> 0</Badge></Button>
  </Link>
  
  <Link to="/gerenciador">
  <Button variant="secondary">GERENCIAR PEDIDOS</Button>
  </Link>

  <Link to="/contato">
  <Button variant="secondary">CONTATO</Button>
  </Link>

</ButtonGroup> 
    </Navbar.Collapse>
  </Navbar>   
    </>      
    )
}

export default BarraTop;