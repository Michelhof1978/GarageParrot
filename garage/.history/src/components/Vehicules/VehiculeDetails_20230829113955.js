import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { Link } from "react-router-dom";
import "../../App.css";
import TitreH1 from "../UI/TitreH1/TitreH1";




const VehiculeDetail = ({ vehicule }) => {
  return (
    <div className="container">
      <div className="row">
        {/* Détails du véhicule */}
        <div className="col-md-12">
          <h2>{vehicule.marque} - {vehicule.modele}</h2>
          <img src={vehicule.imagevoiture} alt={vehicule.marque} />
          <p>Carburant : {vehicule.energie}</p>
          <p>Prix : {vehicule.prix} €</p>
         
        </div>
      </div>
    </div>
  );
};

export default VehiculeDetail;