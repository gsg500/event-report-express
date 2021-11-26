import React, { useState } from "react";
import axios from "axios";


function BtcForm(props) {
  const [state, setState] = useState({ comprador: "", quantidade: "", status: "" });

  function handleChange(event) {
    setState({
      ...state,
      [event.currentTarget.name]: event.currentTarget.value,
    });
  }

  async function handleSubmit(event) {
    event.preventDefault();    
    await axios.post(
      "https://ironrest.herokuapp.com/btc-brl",
 
      state
    );

  }

  return (
    <form onSubmit={handleSubmit}>
      <h1>COMPRA BTC-BRL</h1>
      {/* Name */}
      <div className="form-group">
        <label htmlFor="newCharacterName">Comprador</label>
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
      <br/>
      <button type="submit" className="btn btn-primary">
        Gravar
      </button>      
    </form>
  );
}

export default BtcForm;