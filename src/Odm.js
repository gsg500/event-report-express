import React from "react";
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import BtcForm from "./CG/BtcForm";
import BtcList from "./CG/BtcList";


function contato(){
   return(
       <div>
       <br/>
<Container className="bg-light border">
  <br/>
  <Row>
    <Col sm={4}><BtcForm />  </Col>
    <Col sm={8}><BtcList />  </Col>

  </Row></Container>             
       </div>
   )
}

export default contato;