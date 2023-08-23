import React, {useState, useEffect } from "react";
import axios from "axios";


const VehiculeCard = () => {
  const [vehicules, setVehicules] = useState([]);// hook useState pour créer un état local appelé vehicules, qui sera initialisé en tableau vide.

  useEffect(() => {
    axios
      .get("http://localhost/garageback/front/voiturefiche/all")// all = pour récupérer toutes les données de la table, copie de l'url lors des tests effectués avec Postman en local avec de fausses données.
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
        {vehicules.map((vehicule) => (//méthode map pour parcourir chaque objet de la liste vehicules et générer une carte Bootstrap pour chaque véhicule.
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
               
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default VehiculeCard;

import React, { useState, useEffect } from "react";
import axios from "axios";

const VehiculeCard = () => {
  const [vehicules, setVehicules] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const vehiculesParPage = 12;

  useEffect(() => {
    axios
      .get("http://localhost/garageback/front/voiturefiche/all")
      .then((response) => {
        setVehicules(response.data);
      })
      .catch((error) => {
        console.error("Erreur lors de la récupération des détails des voitures :", error);
      });
  }, []);

  const indexDuDernierVehicule = currentPage * vehiculesParPage;
  const indexDuPremierVehicule = indexDuDernierVehicule - vehiculesParPage;
  const vehiculesCourants = vehicules.slice(indexDuPremierVehicule, indexDuDernierVehicule);

  const numerosDePage = [];
  for (let i = 1; i <= Math.ceil(vehicules.length / vehiculesParPage); i++) {
    numerosDePage.push(i);
  }

  const changerDePage = (numeroDePage) => {
    setCurrentPage(numeroDePage);
  };

  return (
    <div className="container">
      <div className="row">
        {vehiculesCourants.map((vehicule) => (
          <div className="col-md-4 mb-3" key={vehicule.idVehicule}>
            {/* Votre logique d'affichage de la carte ici */}
          </div>
        ))}
      </div>
      <div className="pagination">
        {numerosDePage.map((numeroDePage) => (
          <span
            key={numeroDePage}
            className={`numero-de-page ${currentPage === numeroDePage ? "actif" : ""}`}
            onClick={() => changerDePage(numeroDePage)}
          >
            {numeroDePage}
          </span>
        ))}
      </div>
    </div>
  );
};

export default VehiculeCard;
