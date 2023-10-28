import React from "react";
import { Link } from "react-router-dom";

const CardFiche = (props) => {
  const image = `http://localhost/garageback/public/images/${props.image}`;
  

  // Fonction pour formater la date de circulation au format européen (jour/mois/année)
  const formatDateCirculation = (date) => {
    const dateObj = new Date(date);
    const day = String(dateObj.getDate()).padStart(2, "0"); // Ajoute un "0" au besoin
    const month = dateObj.getMonth() + 1; // Mois commence à 0, donc ajoutez 1
    const year = dateObj.getFullYear();
    return `${day}/${month}/${year}`;
  };

  const image2 = `http://localhost/garageback/public/images/${props.imageCritere}`;
  const image2Style = {
    width: "180px", 
    height: "auto", //  hauteur qui va s'ajuster automatiquement pour conserver les proportions
    margin-bottom: "",
  };

  return (
    <div className="card text-center border-4 border-primary">
      <div className="card-body">
        <a href={props.image} target="_blank" rel="noopener noreferrer">
          <img src={image} alt={props.marque} />
        </a>

        <h5 className="card-title text-primary">{props.marque}</h5>
        <p className="card-text">Modèle: {props.modele}</p>
        <p className="card-text">Année: {props.annee}</p>
        <p className="card-text">Date De Circulation: {formatDateCirculation(props.datecirculation)}</p>
        <p className="card-text">Famille: {props.famille}</p>
        <p className="card-text">Énergie: {props.energie}</p>
        <p className="card-text">Kilomètrage: {props.kilometrage} Km</p>
        <p className="card-text">Boite De Vitesse: {props.boitevitesse}</p>
        
        <a href={props.image2} target="_blank" rel="noopener noreferrer">
          <img src={image2} alt={props.imageCritere} style={image2Style} />
        </a>
     
        <p className="card-text fw-bold text-primary">Prix: {props.prix} €</p>
      </div>
      <div className="card-footer">
        <Link to={`/contact`} className="btn btn-primary">
          Contactez nous pour plus d'informations !
        </Link>
      </div>
     
    </div>
  );
};

export default CardFiche;
