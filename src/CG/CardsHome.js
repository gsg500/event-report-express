import React from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import CardGroup from 'react-bootstrap/CardGroup';

function CardsHome(){
    return(      
      <>
<CardGroup>
  <Card>
       <Card.Body>
      <Card.Title>INDICE 1</Card.Title>
      <Card.Text>
      This is a wider card with supporting text below as a natural lead-in to
        additional content. This content is a little bit longer. This is a wider card with supporting text below as a natural lead-in to
        additional content. This content is a little bit longer.This is a wider card with supporting text below as a natural lead-in to
        additional.
      </Card.Text>      
    </Card.Body>
    <Card.Footer>
      <small className="text-muted"><Button variant="secondary">Emitir Ordem</Button></small>
    </Card.Footer>
  </Card>
  <Card>
       <Card.Body>
      <Card.Title>INDICE 2</Card.Title>
      <Card.Text>
        This card has supporting text below as a natural lead-in to additional
        content.{' '}
      </Card.Text>
    </Card.Body>
    <Card.Footer>
      <small className="text-muted"><Button variant="secondary">Emitir Ordem</Button></small>
    </Card.Footer>
  </Card>
  <Card>
    <Card.Body>
      <Card.Title>INDICE 3</Card.Title>
      <Card.Text>
        This is a wider card with supporting text .....
      </Card.Text>   
    </Card.Body>
    <Card.Footer>
      <small className="text-muted"><Button variant="secondary">Emitir Ordem</Button></small>
    </Card.Footer>
  </Card>
</CardGroup>
    </>      
    )
}

export default CardsHome;