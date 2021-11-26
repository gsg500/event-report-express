import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

function BtcList() {
  const [moeda, setMoeda] = useState([]);

  // Esse useEffect serve pra garantir que o Axios só vai disparar a requisição depois que o componente for renderizado na tela
  useEffect(() => {
    async function fetchData() {
      try {
        const response = await axios.get(
          "https://ironrest.herokuapp.com/btc-brl"
        );
        setMoeda([...response.data]);
      } catch (err) {
      }
    }
    fetchData();
  }, []);

  return (
    <div>
      <table className="table table-hover">
        <thead className="thead-dark">
          <tr>
          <th>Nome</th>
          <th>Quantidade</th>
          <th>Valor</th>
            <th></th> 
          </tr>
        </thead>
        <tbody>
          {moeda.map((moeda) => (
              <tr key={moeda._id}>
              <td>{moeda.comprador}</td>
              <td>{moeda.quantidade}</td>              
              <td>{moeda.status}</td>
              <td>{ }</td>
              <td>
   <Link className="mr-2" to={`/ordemcompra/edit/${moeda._id}`}>Editar </Link>
   <Link className="btn btn-danger" to={`/ordemcompra/delete/${moeda._id}`}> Deletar </Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default BtcList;