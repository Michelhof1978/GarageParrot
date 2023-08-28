import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import VehiculeCard from "../../components/Vehicules/vehiculeCard";

const { id } = useParams();


const VehiculeDetail = ({ vehicule }) => {
  return (
    <div className="container">
      <div className="row">
        {/* Afficher les détails du véhicule */}
        <div className="col-md-12">
          <h2>{vehicule.marque} - {vehicule.modele}</h2>
          <img src={vehicule.imagevoiture} alt={vehicule.marque} />
          <p>Carburant : {vehicule.energie}</p>
          <p>Prix : {vehicule.prix} €</p>
          {/* Ajouter plus de détails si nécessaire */}
        </div>
      </div>
    </div>
  );
};

export default VehiculeDetail;
