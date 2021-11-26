import React, { useEffect } from "react";
import {useParams} from 'react-router-dom'
import axios from "axios";

function BtcDelete(props) {
  const { id } = useParams(props);

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await axios.delete(
          `https://ironrest.herokuapp.com/btc-brl/${id}`
        );
        console.log(response);
      } catch (err) {
        console.error(err);
      }
    }
    fetchData();
  }, [id]);

  return <p>Registro Excluido</p>;
}

export default BtcDelete;