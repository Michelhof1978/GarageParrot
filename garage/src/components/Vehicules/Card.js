import { Link } from "react-router-dom";


const Card = (props) => {
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
          <img src={image} alt={props.marque} className="img-fluid rounded mx-auto d-block mb-3"/>
        </a>
       
        <h5 className="card-title text-primary">{props.marque.toUpperCase()}</h5>
        <p className="card-text">Modèle: {props.modele} </p>
        <p className="card-text">Energie: {props.energie} </p>
        <p className="card-text fw-bold text-primary">Prix: {props.prix} €</p>
      </div>
      <div className="card-footer">
        <Link
          to={`/vehiculefiche/${props.id}`}
          className="btn btn-primary"
        >
          En savoir plus
        </Link>
      </div>
    </div>
    </>
  );
};

export default Card;