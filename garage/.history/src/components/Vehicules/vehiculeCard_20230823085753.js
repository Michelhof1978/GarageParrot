import React, { useState, useEffect } from "react";
import axios from "axios";

const VehiculeCard = () => {
  const [vehicules, setVehicules] = useState([]);
  const vehiculesParPage = 12;
  const [pageCourante, setPageCourante] = useState(1);

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

  const indexDeDernierVehicule = pageCourante * vehiculesParPage;
  const indexDePremierVehicule = indexDeDernierVehicule - vehiculesParPage;
  const vehiculesAffiches = vehicules.slice(indexDePremierVehicule, indexDeDernierVehicule);

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
        {vehiculesAffiches.map((vehicule) => (
          <div className="col-md-4 mb-3" key={vehicule.idVehicule}>
            {/* Votre logique d'affichage de la carte ici */}
          </div>
        ))}
      </div>
      <div className="pagination">
        <div className="pagination-numbers">
          {numerosDePage.map((numeroDePage) => (
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

export default VehiculeCard;

