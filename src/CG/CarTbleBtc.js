import React from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

function CarTbleBtc(props){
    return(      
<>         
    <Card>
    <Card.Header>Comprador {props.nomeComprador}</Card.Header>
    <Card.Body>
        <Card.Title>BTC - BRL$ {props.valor}</Card.Title>
        <Card.Text>
        Quantidade: {props.quantidade}
        Status: {props.status}
        </Card.Text>
        <Button variant="primary">Alterar</Button>
        <Button variant="primary">Excluir</Button>
    </Card.Body>
    </Card>
</>
    )
}

export default CarTbleBtc;