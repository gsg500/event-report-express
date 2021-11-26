import React from 'react';
import { useState, useEffect } from "react";
import axios from "axios";
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import CardGroup from 'react-bootstrap/CardGroup';
import Badge from 'react-bootstrap/Badge';

function CardsHome(){
  const [valorBtc, setBtcValor] = useState(0);
  const [nomeBtc, setBtcNome] = useState(0);
  useEffect(() => {
  axios({
    method: "get",
    url: "https://economia.awesomeapi.com.br/last/BTC-BRL",
  }).then((response) => {
    setBtcValor(response.data.BTCBRL.high)
    setBtcNome(response.data.BTCBRL.name)
  });
}, [valorBtc]);

const [valorETH, setETHValor] = useState(0);
const [nomeETH, setETHNome] = useState(0);
useEffect(() => {
axios({
  method: "get",
  url: "https://economia.awesomeapi.com.br/last/ETH-BRL",
}).then((response) => {
  setETHValor(response.data.ETHBRL.high)
  setETHNome(response.data.ETHBRL.name)
});
}, [valorETH]);

const [valorLTC, setLTCValor] = useState(0);
const [nomeLTC, setLTCNome] = useState(0);
const [bidLTC, setLTCbid] = useState(0);
const [lowLTC, setLTClow] = useState(0);
useEffect(() => {
axios({
  method: "get",
  url: "https://economia.awesomeapi.com.br/last/LTC-BRL",
}).then((response) => {
  setLTCValor(response.data.LTCBRL.high)
  setLTCNome(response.data.LTCBRL.name)
  setLTCbid(response.data.LTCBRL.bid)
  setLTClow(response.data.LTCBRL.low)
});
}, [valorLTC]);

    return(      
      <>
<CardGroup>
  <Card>
       <Card.Body>
      <Card.Title>{nomeBtc}</Card.Title>
      <Card.Text>
      <Badge bg="danger">Venda: $ {lowLTC}</Badge>{' '}
      <Badge bg="danger">Lance: $ {bidLTC}</Badge><br/>
      Bitcoin é uma criptomoeda descentralizada. O primeiro artigo descrevendo uma implementação do Bitcoin foi criado em 2008 sendo apresentado no começo de 2009 na lista de discussão The Cryptography Mailing por um programador ou grupo de programadores sob o pseudônimo Satoshi Nakamoto.
      </Card.Text>      
    </Card.Body>
    <Card.Footer>
      <small className="text-muted"><Button variant="secondary">ORDEM DE COMPRA <Badge bg="danger"> BTC$ {valorBtc}</Badge>
  <span className="visually-hidden"></span></Button></small>
    </Card.Footer>
  </Card>
  <Card>
       <Card.Body>
      <Card.Title>{nomeETH}</Card.Title>
      <Card.Text>
      <Badge bg="danger">Venda: $ {lowLTC}</Badge>{' '}
      <Badge bg="danger">Lance: $ {bidLTC}</Badge><br/>
      Ethereum é uma plataforma descentralizada capaz de executar contratos inteligentes e aplicações descentralizadas usando a tecnologia blockchain: São aplicações que funcionam exatamente como programadas sem qualquer possibilidade de censura, fraude ou interferência de terceiros, isso porque o contrato é imutável.
    </Card.Text>
    </Card.Body>
    <Card.Footer>
      <small className="text-muted"><Button variant="secondary">ORDEM DE COMPRA <Badge bg="danger"> ETH$ {valorETH}</Badge>
  <span className="visually-hidden"></span></Button></small>
    </Card.Footer>
  </Card>
  <Card>
    <Card.Body>
      <Card.Title>{nomeLTC}</Card.Title>
      <Card.Text>
      <Badge bg="danger">Venda: $ {lowLTC}</Badge>{' '}
      <Badge bg="danger">Lance: $ {bidLTC}</Badge><br/>
      Litecoin é uma criptomoeda sustentada por uma rede peer-to-peer e um projeto de software livre lançado sob a licença MIT. É inspirada e quase tecnicamente semelhante a Bitcoin (BTC). A criação e transferência de Litecoin está baseada num protocolo de criptografia de código aberto e não é gerida por uma autoridade central.
      </Card.Text>   
    </Card.Body>
    <Card.Footer>
      <small className="text-muted">      
      <Button variant="secondary">ORDEM DE COMPRA <Badge bg="danger"> LTC$ {valorLTC}</Badge>
  <span className="visually-hidden"></span></Button> </small>      
    </Card.Footer>
  </Card>
</CardGroup>

    </>      
    )
}

export default CardsHome;