import { useParams } from 'react-router-dom';


function EventsDetails() {
  const tipo = useParams();  
  const tipoSearch = tipo.find((currentTipoObj) => {
    return ''
  }); 

  return (
    <div> 

   </div>
  );
}

export default EventsDetails;