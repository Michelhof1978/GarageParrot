import React, { useState, useEffect } from "react";
import axios from "axios";
import VehiculeCard from "./VehiculeCard";
import { generateURL } from './apiUtils';

const VehiculeList = ({ filtres }) => {
  const [vehicules, setVehicules] = useState([]);
  const vehiculesParPage = 12; // Nombre de véhicules à afficher par page
  const [pageCourante, setPageCourante] = useState(1); // Pour gérer la pagination

  const indexDeDernierVehicule = pageCourante * vehiculesParPage;
  const indexDePremierVehicule = indexDeDernierVehicule - vehiculesParPage;

  useEffect(() => {
    const url = generateURL(filtres);
    axios.get(url)
      .then(response => setVehicules(response.data))
      .catch(error => console.error("Erreur de récupération:", error));
  }, [filtres]);

  const changerDePage = (numeroDePage) => {
    setPageCourante(numeroDePage);
  };

  const numerosDePage = [];
  for (let i = 1; i <= Math.ceil(vehicules.length / vehiculesParPage); i++) {
    numerosDePage.push(i);
  }

  return (
    <div className="container">
      <div className="row">
        {vehicules.slice(indexDePremierVehicule, indexDeDernierVehicule).map(vehicule => (
          <VehiculeCard key={vehicule.idVehicule} vehicule={vehicule} />
        ))}
      </div>
      <div className="pagination">
        <div className="pagination-numbers">
          {numerosDePage.map(numeroDePage => (
            <span
              key={numeroDePage}
              className={`numero-de-page ${pageCourante === numeroDePage ? "actif" : ""}`}
              onClick={() => changerDePage(numeroDePage)}
            >
              {numeroDePage}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default VehiculeList;
