import React from "react"
import { CardImg, Container } from "react-bootstrap"
import Card from 'react-bootstrap/Card'
import axios from "axios";
import { useState, useEffect } from "react";


function Home(props){


  const [events, setEvents] = useState([]);

  useEffect(() => {
    async function fetchEvents() {
      try {
        const response = await axios.get(
          "https://ironrest.herokuapp.com/P2EventsRE"
        );
        setEvents([...response.data]);
        console.log(events)
      } catch (err) {
        console.error(err);
      }
    }

    fetchEvents();
  }, [events]);


    return(
      <div className="row">
      <div className="col">
        <Card  bg="success"text="white" className="" style={{ width: '800px' }}>
        {events.map((currentEvents) => {
          return (
            <div className="event"  key={currentEvents._id}>
            <Card.Body> 
              <p >{currentEvents.chave}</p>
              <p>{currentEvents.titulo}</p>
                <p>{currentEvents.dataPrevista}</p>
                 <p>{currentEvents.horario}</p>
                <p>{currentEvents.duração}</p>
                 <p>{currentEvents.tipoEntrada}</p>
                 <p>{currentEvents.idealizadores}</p>
                 <p>{currentEvents.status}</p>
                 <p>{currentEvents.stat_motivo}</p>
                 <p>{currentEvents.categoria}</p>
                 <p>{currentEvents.periodo}</p>
                 <Card.Text>{currentEvents.detalhes}</Card.Text>
                 <p>{currentEvents.fotocapa}</p>
              </Card.Body>
                <Card.Img variant="top"  src={currentEvents.fotoDestaque} />
              <Card.Img variant="top"  src={currentEvents.ultimoVideo} />
                <button>detalhes</button> 
             
            </div>
       
         );
        })}
        </Card>
      </div>
      </div>

    )    
    

}
export default Home 