import React from "react";
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import FormComments from "./CG/FormComments";

function contato(){
   return(
       <div>
<Container>
  <Row>
    <Col></Col>
    <Col> <FormComments /> </Col>
    <Col></Col>
  </Row>
</Container>              
       </div>
   )
}

export default contato;