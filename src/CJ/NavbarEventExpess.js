
import React from 'react';

import Navbar from 'react-bootstrap/Navbar';
import {Nav, NavDropdown} from "react-bootstrap"
   
function NavBar(){
    return(
        
            < div className="row">
            <div className="d-flex justify-content-around bg-dark">
                
            <Navbar collapseOnSelect expand="lg" bg="dark"  variant="dark">
                
                <Navbar.Brand href="#home" className="bg-primary mr-1  p-2">Event Report Express</Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav ">
                        <Nav className="me-auto d-flex justify-content-center">
                            <Nav.Link href="#features" className="p-2 m-2 bg-primary">Página Principal</Nav.Link>
                            <Nav.Link href="#pricing" className=" m-2 bg-primary">Detalhes</Nav.Link>
                            <NavDropdown className="m-2 bg-primary" title="Categotias de Eventos" id="collasible-nav-dropdown">
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


export default NavBar