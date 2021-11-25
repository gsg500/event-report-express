import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import {Nav, NavDropdown} from "react-bootstrap"
   
function NavBarEventExpress(){
    return(      
      <div className="row">
      <div className="d-flex justify-content-around bg-dark">                
      <Navbar collapseOnSelect expand="lg" bg="dark"  variant="dark">
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav ">
      <Nav className="me-auto d-flex justify-content-center">
      <Nav.Link href="#features" className="p-2 m-2 bg-primary">Adicionar</Nav.Link>
      <Nav.Link href="#features" className="p-2 m-2 bg-primary">Alterar</Nav.Link>
      <Nav.Link href="#pricing" className=" m-2 bg-primary">Excluir</Nav.Link>
      <NavDropdown className="m-2 bg-primary" title="Categorias" id="collasible-nav-dropdown">
      <NavDropdown.Item className="p-2 text-primary  mt-0" href="#action/3.1">Cultural</NavDropdown.Item>
      <NavDropdown.Item className="p-2 text-primary  m-1" href="#action/3.2">Religiosos</NavDropdown.Item>
      <NavDropdown.Item className="p-2 m-1 text-primary" href="#action/3.3">Educacionais</NavDropdown.Item>
      </NavDropdown>
      </Nav>                   
      </Navbar.Collapse>               
      </Navbar>
      </div>
      </div>
    )
}

export default NavBarEventExpress;