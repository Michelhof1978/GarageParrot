import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
I

const VehiculeCard = () => {
  const [vehicules, setVehicules] = useState([]);

  useEffect(() => {
    // Utilisez axios pour récupérer les données des véhicules
    axios.get("URL_DES_DONNÉES").then((response) => {
      setVehicules(response.data);
    }).catch((error) => {
      console.error("Erreur lors de la récupération des véhicules :", error);
    });
  }, []);

  return (
    <div>
      {vehicules.map((vehicule) => (
        <div key={vehicule.idVehicule} className="card">
          <div className="card-body">
            <h5 className="card-title">{vehicule.nom}</h5>
            <p className="card-text">Prix: {vehicule.prix} €</p>
          </div>
          <div className="card-footer">
            {/* Utilisation d'un bouton */}
            <button className="btn btn-primary">En savoir plus</button>
            {/* Utilisation d'un lien */}
            <Link to={`/vehiculedetail/${vehicule.idVehicule}`} className="btn btn-primary">En savoir plus</Link>
          </div>
        </div>
      ))}
    </div>
  );
};

export default VehiculeCard;
