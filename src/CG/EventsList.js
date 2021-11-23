import { Link } from 'react-router-dom';

function EventsList(props) {
  const Tipo = props.tipo;
  return tipo.map((currenttipo) => {
    return (
    <div key={} className="list-group">
    </div>
    );
  });
}

export default EventsList;