import { Link } from "react-router-dom";

const CardFiche = (props) => {
    const image = `http://localhost/garageback/public/images/${props.image}`;
    return (
      <div className="card">
        <div className="card-body">
          <a
            href={props.image}
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={image} alt={props.marque} />
          </a>
         
          <h5 className="card-title">{props.marque}</h5>
          <p className="card-text">Modèle: {props.modele} </p>
          <p className="card-text">Energie: {props.energie} </p>
          <p className="card-text">Prix: {props.prix} €</p>
        </div>
      <div className="card-footer">
      
        </div> 
        
      </div>
      
    );
  };
  
  export default CardFiche;
  