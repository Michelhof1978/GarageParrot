import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import "../../App.css";
import TitreH1 from "../UI/TitreH1/TitreH1";

const VehiculeCard = () => {
  const [vehicules, setVehicules] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost/garageback/front/voiturefiche/all")
      .then((response) => {
        setVehicules(response.data);
      })
      .catch((error) => {
        console.error("Erreur lors de la récupération des véhicules :", error);
      });
  }, []);

  return (
    <div className="vehicule-grid">
      {vehicules.map((vehicule) => (
        <div key={vehicule.idVehicule} className="card">
          <div className="card-body">
            <img src={vehicule.imagevoiture} alt={vehicule.marque} />
            <h5 className="card-title">{vehicule.nom}</h5>
            <p className="card-text">Modèle: {vehicule.prix} €</p>
            <p className="card-text">Prix: {vehicule.prix} €</p>
            <p className="card-text">Prix: {vehicule.prix} €</p>
          </div>
          <div className="card-footer">

            {/* Utilisation d'un lien */}
            <Link
              to={`/vehiculedetail/${vehicule.idVehicule}`}
              className="btn btn-primary"
            >
              En savoir plus
            </Link>
          </div>
        </div>
      ))}
    </div>
  );
};

export default VehiculeCard;
