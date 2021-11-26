import React from 'react';
import { useState, useEffect } from "react";
import axios from "axios";
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import ListGroupItem from 'react-bootstrap/ListGroupItem';

function MenuPrincipal(){
 const [valorCHF, setCHFValor] = useState(0);
  useEffect(() => {
  axios({
    method: "get",
    url: "https://economia.awesomeapi.com.br/last/CHF-BRL",
  }).then((response) => {
    setCHFValor(response.data.CHFBRL.high)
  });
}, [valorCHF]);

const [valorUs, setUsValor] = useState(0);
useEffect(() => {
axios({
  method: "get",
  url: "https://economia.awesomeapi.com.br/last/USD-BRL",
}).then((response) => {
  setUsValor(response.data.USDBRL.high)
});
}, [valorUs]);
const [valorEur, setEurValor] = useState(0);
useEffect(() => {
axios({
  method: "get",
  url: "https://economia.awesomeapi.com.br/last/EUR-BRL",
}).then((response) => {
  setEurValor(response.data.EURBRL.high)
});
}, [valorEur]);
const [valorGBP, setGBPValor] = useState(0);
useEffect(() => {
axios({
  method: "get",
  url: "https://economia.awesomeapi.com.br/last/GBP-BRL",
}).then((response) => {
  setGBPValor(response.data.GBPBRL.high)
});
}, [valorGBP]);

  return (      
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
    <ListGroupItem>CHF/BRL$ {valorCHF}</ListGroupItem>
    <ListGroupItem>USD/BRL$ {valorUs}</ListGroupItem>
    <ListGroupItem>EUR/BRL$ {valorEur}</ListGroupItem>
    <ListGroupItem>GBP/BRL$ {valorGBP}</ListGroupItem> 
  </ListGroup>
  <Card.Body>
    <img
          alt=""
          src="https://github.com/gsg500/imgs/blob/master/bmrdp1.fw.png?raw=true"
          width="160"
          height="302"
          className="d-inline-block align-top"
        />
  </Card.Body>
</Card>
    </>      
    )
}

export default MenuPrincipal;