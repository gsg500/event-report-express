import React, { useState, useEffect } from "react";
import {useParams} from 'react-router-dom'
import axios from "axios";

function BtcEdit(props) {
  const [state, setState] = useState({ comprador: "", quantidade: "", status: "" });
  const { id } = useParams(props);

  // Esse useEffect é praticamente igual o do CharacterDetail, pois estamos fazendo a mesma coisa
  useEffect(() => {
    async function fetchData() {
      try {
        const response = await axios.get(
          `https://ironrest.herokuapp.com/btc-brl/${id}`
        );
         delete response.data._id
        setState({ ...response.data });
        

      } catch (err) {
        console.error(err);
      }
    }
    fetchData();
  }, [id]);

  function handleChange(event) {
    setState({
      ...state,
      [event.currentTarget.name]: event.currentTarget.value,
    });
  }

  async function handleSubmit(event) {
    // Disparar a requisição com os dados para a API
    event.preventDefault();

    const response = await axios.put(
      `https://ironrest.herokuapp.com/btc-brl/${id}`,
      state
    );

    console.log(response);

    // O history é injetado automaticamente pelo component Route
  }

  return (
    <form onSubmit={handleSubmit}>
      <h1>Editar Ordem</h1>
      {/* Name */}
      <div className="form-group">
        <label htmlFor="newCharacterName">Nome</label>
        <input
          name="comprador"
          type="text"
          className="form-control"
          id="newCharacterName"
          onChange={handleChange}
          value={state.comprador}
        />
      </div>
      {/* Occupation */}
      <div className="form-group">
        <label htmlFor="newCharacterOccupation">Quantidade</label>
        <input
          type="text"
          className="form-control"
          id="newCharacterOccupation"
          name="quantidade"
          onChange={handleChange}
          value={state.quantidade}
        />
      </div>
      {/* Weapon */}
      <div className="form-group">
        <label htmlFor="newCharacterWeapon">Valor</label>
        <input
          type="text"
          className="form-control"
          id="newCharacterWeapon"
          name="status"
          onChange={handleChange}
          value={state.status}
        />
      </div>
      <button type="submit" className="btn btn-primary">
        Gravar
      </button>
    </form>
  );
}

export default BtcEdit;