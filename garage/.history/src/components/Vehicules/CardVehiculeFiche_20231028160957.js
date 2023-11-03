import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import "../../App.css";

import CardFiche from "../../components/Vehicules/CardFiche";

const CardVehiculeFiche = () => {
  const [vehicule, setVehicule] = useState(null);

  useEffect(() => {
    axios
      .get("http://localhost/garageback/front/voiturefiche/all")
      .then((response) => {
        const jsonData = response.data;
        // Ici, vous pouvez choisir le véhicule à afficher, par exemple le premier élément
        const selectedVehicule = jsonData[0];
        setVehicule(selectedVehicule);
      })
      .catch((error) => {
        console.error("Erreur lors de la récupération des véhicules :", error);
      });
  }, []);

  if (vehicule === null) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <div className="row">
        <div className="col-lg-4 col-md-4 col-sm-6 col-6 mt-3">
          <CardFiche
            image={vehicule.imageVoiture}
            famille={vehicule.famille}
            marque={vehicule.marque}
            nom={vehicule.nom}
            modele={vehicule.modele}
            energie={vehicule.energie}
            prix={vehicule.prix}
            id={vehicule.idVehicule}
          />
        </div>
      </div>
    </div>
  );
};

export default CardVehiculeFiche;
