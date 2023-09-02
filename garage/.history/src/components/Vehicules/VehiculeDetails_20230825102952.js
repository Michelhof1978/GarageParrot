import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import 

const VehiculeDetails = () => {
  const { id } = useParams();
  const [vehicule, setVehicule] = useState(null);

  useEffect(() => {
    axios.get(`http://localhost/garageback/front/voiturefiche/all/${id}`)
      .then(response => {
        setVehicule(response.data);
      })
      .catch(error => {
        console.error('Error fetching vehicule data:', error);
      });
  }, [id]);

  if (!vehicule) {
    return <div>Loading...</div>;
  }

  return (
    <div className="vehicule-details">
      <h2>{vehicule.marque}</h2>
      <p>Modèle: {vehicule.modele}</p>
      <p>Carburant: {vehicule.energie}</p>
      {/* Afficher toutes les autres informations du véhicule ici */}
    </div>
  );
};

export default VehiculeDetails;
