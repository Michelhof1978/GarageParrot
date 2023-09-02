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
