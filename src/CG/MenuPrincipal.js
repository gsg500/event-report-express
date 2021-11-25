import React from 'react';
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import ListGroupItem from 'react-bootstrap/ListGroupItem';

function MenuPrincipal(){
    return(      
      <>
<Card style={{ width: '12rem' }} bg="light">
  <Card.Body>
    <img
          alt=""
          src="https://github.com/gsg500/imgs/blob/master/enressnews.png?raw=true"
          width="168"
          height="100"
          className="d-inline-block align-top"
        />
  </Card.Body>
  <ListGroup className="list-group-flush">
    <ListGroupItem>INDICES</ListGroupItem>
    <ListGroupItem>RISCO BRAZIL:</ListGroupItem>
    <ListGroupItem>SPCS:</ListGroupItem>
    <ListGroupItem>SELIC: </ListGroupItem>
    <ListGroupItem> </ListGroupItem>
  </ListGroup>
  <Card.Body>
    <img
          alt=""
          src="https://github.com/gsg500/imgs/blob/master/bmrdp1.fw.png?raw=true"
          width="160"
          height="236"
          className="d-inline-block align-top"
        />
  </Card.Body>
</Card>
    </>      
    )
}

export default MenuPrincipal;