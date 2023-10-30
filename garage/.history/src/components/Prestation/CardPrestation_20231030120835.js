import { Link } from "react-router-dom";


const CardPrestation = (props) => {
  const image = `http://localhost/garageback/public/images/${props.image}`;
  return (
<>
   

    <div className="card">
      <div className="card-body">
        <a
          href={props.image}
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src={image} alt={props.nom} />
        </a>
       
        <h5 className="card-title text-primary">{props.nom}</h5>
        <p className="card-text">Description: {props.prix} €</p>
        <p className="card-text">Prix: {props.prix} €</p>
      </div>
      <div className="card-footer">
        <Link
          to={`/prestationfiche/${props.id}`}
          className="btn btn-primary"
        >
          En savoir plus
        </Link>
      </div>
    </div>
    </>
  );
};

export default CardPrestation;