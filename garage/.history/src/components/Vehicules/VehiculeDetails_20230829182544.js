import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import axios from "axios";
import "../../App.css";
import TitreH1 from "../UI/TitreH1/TitreH1";

const VehiculeFi = () => {
  const [vehicule, setVehicule] = useState(null);
  const { id } = useParams(); // Extract the ID from the URL

  useEffect(() => {
    axios
    //Inclure les filtres ds l url et aussi ds controller
      .get(`http://localhost/garageback/front/voiturefiche/all`)
      .then((response) => {
        setVehicule(response.data);
      })
      .catch((error) => {
        console.error("Erreur lors de la récupération des détails du véhicule :", error);
      });
  }, [id]);

  if (!vehicule) {
    return <div>Loading...</div>; // Loading indicator while fetching data
  }

  return (
    <div className="vehicule-details">
      <img src={vehicule.imagevoiture} alt={vehicule.marque} />
      <h5 className="card-title">{vehicule.nom}</h5>
      <p className="card-text">Modèle: {vehicule.modele} </p>
      <p className="card-text">Energie: {vehicule.energie} </p>
      <p className="card-text">Prix: {vehicule.prix} €</p>

      <Link to={`/contact`} className="btn btn-primary">
        En savoir plus
      </Link>
    </div>
  );
};

export default VehiculeDetails;
