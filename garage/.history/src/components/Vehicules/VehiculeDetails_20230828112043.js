import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import VehiculeCard from "../../components/Vehicules/vehiculeCard";

const { id } = useParams();
const [vehicule, setVehicule] = useState({});
useEffect(() => {
  const fetchVehiculeDetails = async () => {
      try {
          const response = await axios.get(`http://localhost/garageback/front/voiturefiche/${id}`);
          setVehicule(response.data);
      } catch (error) {
          console.error("Erreur lors de la récupération des détails du véhicule:", error);
      }
  };

  fetchVehiculeDetails();
}, [id]);




const VehiculeDetail = ({ vehicule }) => {
  return (
    <div className="container">
      <div className="row">
        {/* Afficher les détails du véhicule */}
        <div className="col-md-12">
          <h2>{vehicule.marque} - {vehicule.modele}</h2>
          <img src={vehicule.imagevoiture} alt={vehicule.marque} />
          <p>Date 1ère année circulation : {vehicule.datecirculation}</p>
          <p>Année : {vehicule.annee}</p>
          <p>Boîte de vitesse : {vehicule.boitevitesse}</p>
          <p>Kilométrage : {vehicule.kilometrage}</p>
          <p>Boîte de vitesse : {vehicule.boitevitesse}</p>
          <p>Puissance : {vehicule.puissance}</p>
          <p>Prix : {vehicule.prix} €</p>
          {/* Ajouter plus de détails si nécessaire */}
        </div>
      </div>
    </div>
  );
};

export default VehiculeDetail;
