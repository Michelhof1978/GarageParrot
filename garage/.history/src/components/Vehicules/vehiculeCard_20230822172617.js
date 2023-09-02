import React, { Component, useState, useEffect } from "react";
import axios from "axios";


const VehiculeCard = () => {
  const [vehicules, setVehicules] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost/garageback/front/voiturefiche")
      .then((response) => {
        setVehicules(response.data);
      })
      .catch((error) => {
        console.error("Error fetching voiture details:", error);
      });
  }, []);

  return (
    <div className="container">
      <div className="row">
        {vehicules.map((vehicule) => (
          <div className="col-md-4 mb-3" key={vehicule.idVehicule}>
            <div className="card">
              <img
                src={vehicule.imagevoiture}
                className="card-img-top"
                alt={vehicule.marque}
              />
              <div className="card-body">
                <h5 className="card-title">{vehicule.marque}</h5>
                <h6 className="card-subtitle mb-2 text-muted">
                  {vehicule.modele}
                </h6>
                <p className="card-text">Carburant: {vehicule.energie}</p>
                <p className="card-text">Prix: {vehicule.prix} €</p>
                {/* Ajoutez d'autres informations de véhicule ici */}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default VehiculeCard;
