
import React, { useState, useEffect } from "react";
import axios from "axios";

const VehiculeCard = () => {
  const [vehicules, setVehicules] = useState([]);// hook useState pour créer un état local appelé vehicules, qui sera initialisé en tableau vide.
  const vehiculesParPage = 12;//Affichage de 12 véhicules par page max
  const [pageCourante, setPageCourante] = useState(1);//initialisé à 1. Cet état garde une trace de la page actuelle que l'utilisateur est en train de voir.

  useEffect(() => {
    axios
      .get("http://localhost/garageback/front/voiturefiche/all")// all = pour récupérer toutes les données de la table, copie de l'url lors des tests effectués avec Postman en local avec de fausses données.
      .then((response) => {
        setVehicules(response.data);
      })
      .catch((error) => {
        console.error("Erreur lors de la récupération des détails des voitures :", error);
      });
  }, []);

  const indexDeDernierVehicule = pageCourante * vehiculesParPage;
  const indexDePremierVehicule = indexDeDernierVehicule - vehiculesParPage;
  const vehiculesAffiches = vehicules.slice(indexDePremierVehicule, indexDeDernierVehicule);//slice va prendre les indices de début et de fin du tableau et va extraire les éléments correspondants qui seront stockés ds un

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
        {vehiculesAffiches.map((vehicule) => (//méthode map pour parcourir chaque objet de la liste vehicules et générer une carte Bootstrap pour chaque véhicule.
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