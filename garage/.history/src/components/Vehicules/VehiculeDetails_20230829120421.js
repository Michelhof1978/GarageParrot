import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import axios from "axios";
import "../../App.css";
import TitreH1 from "../UI/TitreH1/TitreH1";

const VehiculeDetails = () => {
  const [vehicule, setVehicule] = useState({});
  const { id } = useParams(); // Récupère l'ID depuis l'URL

  useEffect(() => {
    axios
      .get(`http://localhost/garageback/front/voiturefiche/${id}`) // Utilisez l'ID dans l'URL de l'appel API
      .then((response) => {
        setVehicule(response.data);
      })
      .catch((error) => {
        console.error("Erreur lors de la récupération du véhicule :", error);
      });
  }, [id]); 

  return (

    <div className="vehicule-grid">
    {vehicules.map((vehicule) => (
      <div key={vehicule.idVehicule} className="card">
        <div className="card-body">
          <img src={vehicule.imagevoiture} alt={vehicule.marque} />
          <h5 className="card-title">{vehicule.nom}</h5>
          <p className="card-text">Modèle: {vehicule.modele} </p>
          <p className="card-text">Energie: {vehicule.energie} </p>
          <p className="card-text">Prix: {vehicule.prix} €</p>
        </div>
        <div className="card-footer">

          {/* Utilisation d'un lien */}
          <Link to={`/contact`} className="btn btn-primary">
            En savoir plus
           </Link>
          
        </div>
      </div>
    ))}

  </div>
);

    }

    export default VehiculeDetails;