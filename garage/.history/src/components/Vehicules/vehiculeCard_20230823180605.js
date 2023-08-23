import React, { useState, useEffect } from "react";
import axios from "axios";
import "../../App.css";

const VehiculeCard = (props) => {
  const [vehicules, setVehicules] = useState(props.vehicules); // Initialisation avec les véhicules passés en props
  const vehiculesParPage = 12;
  const [pageCourante, setPageCourante] = useState(1);

  useEffect(() => {
    setVehicules(props.vehicules); // Mettre à jour les véhicules lorsque les props changent
  }, [props.vehicules]);

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
            {/* Le reste du code de la carte de véhicule */}
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
