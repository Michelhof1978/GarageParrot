import React from "react";
import { Link } from "react-router-dom";
import Textes from "../UI/Textes/Textes";

const CardPrestationFiche = (props) => {
  const image = `http://localhost/garageback/public/images/${props.image}`;

 

  

  

  return (
    <>
    <Textes>
            Les réparateurs du Garage Parrot s’occupent de la réparation et l’entretien de votre voiture, peu importe la marque ou le modèle de celle-ci. Profitez d’une prestation de qualité effectuée par des véritables experts auto. Réalisez dès maintenant un devis en ligne en nous contactant via le formulaire pour la réparation de votre voiture et obtenez un RDV immédiat !
            </Textes>


    <div className="card text-center border-4 border-primary ">
      <div className="card-body  ">
      
        <a href={props.image} target="_blank" rel="noopener noreferrer">
       <img className="rounded-2 mb-4"  src={image} alt={props.nom} />
         </a>

        <h5 className="card-title text-primary lead fw-bold mb-4">{props.nom.toUpperCase()}</h5>

        <p className="card-text lead"><strong>Description </strong><br /> {props.description}</p>

     
        <Textes>
        <p className="card-text fw-bold text-primary lead">Prix: {props.prix} €</p>
        </Textes>
      </div>
      <div className="card-footer">
        <Link to={`/contact`} className="btn btn-primary">
          Prendre Un Rdv Ici !
        </Link>
      </div>
    </div>
      </>
  );
};

export default CardPrestationFiche;
