import React from "react";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Pagehome from "./CG/Pagehome";
import MenuPrincipal from "./CG/MenuPrincipal";

function Home(){
    
    return(
       <div>
<Container>
  <Row>
    <Col sm={2}><MenuPrincipal /></Col>
    <Col sm={10}><Pagehome /></Col>

  </Row></Container>

       </div>         
    )
}

export default Home