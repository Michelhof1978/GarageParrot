import React from "react";
import { Link } from "react-router-dom";
import Textes from "../UI/Textes/Textes";

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

  const imageCritere = `http://localhost/garageback/public/images/${props.imageCritere}`;
  const imageCritereCss = {
    width: "180px",
    height: "auto", // hauteur qui va s'ajuster automatiquement pour conserver les proportions
    marginBottom: "20px",
  };

  return (
    <>
    <Textes>
            Les réparateurs du Garage Parrot s’occupent de la réparation et l’entretien de votre voiture, peu importe la marque ou le modèle de celle-ci. Profitez d’une prestation de qualité effectuée par des véritables experts auto. Réalisez dès maintenant un devis en ligne en nous contactant via le formulaire pour la réparation de votre voiture et obtenez un RDV immédiat !
            </Textes>


    <div className="card text-center border-4 border-primary ">
      <div className="card-body  ">
      
        <a href={props.image} target="_blank" rel="noopener noreferrer">
       
          <img className="rounded-2 mb-4"  src={image} alt={props.marque} />
         
        </a>

        <h5 className="card-title text-primary lead fw-bold mb-4">{props.marque.toUpperCase()}</h5>


        <p className="card-text lead"><strong>Modèle:</strong> {props.modele}</p>        
        <p className="card-text lead"><strong>Année: </strong>{props.annee}</p>
>>>>>>> b70df5b829a6fdf84dfdb5a9df5fb8cd8191952d
        <p className="card-text lead"><strong>Date De Circulation:</strong> {formatDateCirculation(props.datecirculation)}</p>
        <p className="card-text lead"><strong>Famille:</strong> {props.famille}</p>
        <p className="card-text lead"><strong>Énergie:</strong> {props.energie}</p>
        <p className="card-text lead"><strong>Kilomètrage:</strong> {props.kilometrage} Km</p>
        <p className="card-text lead"><strong>Boite De Vitesse:</strong> {props.boitevitesse}</p>
        <p className="card-text lead"><strong>Puissance:</strong> {props.puissance}</p>
        <p className="card-text lead"><strong>Places:</strong> {props.places}</p>
        <p className="card-text lead"><strong>Couleur:</strong> {props.couleur}</p>
<<<<<<< HEAD
        <p className="card-text lead"><strong>Description </strong><br /> {props.description}</p>
=======
        <p className="card-text lead"><strong>Description</strong> <br /> {props.description}</p>
>>>>>>> b70df5b829a6fdf84dfdb5a9df5fb8cd8191952d
        <a href={props.imageCritere} target="_blank" rel="noopener noreferrer">
          <img src={imageCritere} alt={props.imageCritere} style={imageCritereCss} />
        </a>
        <Textes>
        <p className="card-text fw-bold text-primary lead">Prix: {props.prix} €</p>
        </Textes>
      </div>
      <div className="card-footer">
        <Link to={`/contact`} className="btn btn-primary">
          Contactez Nous Pour Plus D'Informations !
        </Link>
      </div>
    </div>
      </>
  );
};

export default CardFiche;
