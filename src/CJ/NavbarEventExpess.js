
import React from 'react';

import Navbar from 'react-bootstrap/Navbar';
import {Nav, NavDropdown} from "react-bootstrap"
   
function NavBar(){
    return(
        <div>
            <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
                
                    <Navbar.Brand href="#home">Event Report Express</Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="me-auto">
                            <Nav.Link href="#features">Página Principal</Nav.Link>
                            <Nav.Link href="#pricing">Detalhes</Nav.Link>
                            <NavDropdown title="Categotias de Eventos" id="collasible-nav-dropdown">
                                <NavDropdown.Item href="#action/3.1">Cultural</NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.2">Religiosos</NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.3">Educacionais</NavDropdown.Item>
                            </NavDropdown>
                        </Nav>
                        
                    </Navbar.Collapse>
               
            </Navbar>
                      
        </div>

    )



}


export default NavBar