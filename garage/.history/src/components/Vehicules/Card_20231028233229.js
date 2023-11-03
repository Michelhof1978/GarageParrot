import { Link } from "react-router-dom";
import Textes from "../UI/Textes/Textes";

const Card = (props) => {
  const image = `http://localhost/garageback/public/images/${props.image}`;
  return (
<>
    <Textes>
            Faites confiance au Garage Parrot pour des réparations de qualité,
             des tarifs abordables et des voitures d'occasion qui répondent aux 
             normes les plus strictes. Avec notre garantie d'un an, vous savez 
             que vous faites un choix judicieux. Rejoignez notre famille de
              clients satisfaits dès aujourd'hui.           
               </Textes>

    <div className="card">
      <div className="card-body">
        <a
          href={props.image}
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src={image} alt={props.marque} />
        </a>
       
        <h5 className="card-title text-primary">{props.marque.toUpperCase()}</h5>
        <p className="card-text">Modèle: {props.modele} </p>
        <p className="card-text">Energie: {props.energie} </p>
        <p className="card-text">Prix: {props.prix} €</p>
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
  );
};

export default Card;