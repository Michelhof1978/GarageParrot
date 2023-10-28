import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import "../../App.css";
import TitreH2 from "../UI/Titres/TitreH2";
import { Pagination } from "react-bootstrap";
import CardFiche from "../../components/Vehicules/CardFiche";


import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import axios from "axios";
import "../../App.css";


const VehiculesDetails = () => {
  const [vehicule, setVehicule] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    axios
      .get(`http://localhost/garageback/front/voiturefiche/all`)
      .then((response) => {
        console.log("Données du véhicule:", response.data);
        const vehiculeData = response.data.find(item => item.idVehicule === id);
        setVehicule(vehiculeData);
      })
      .catch((error) => {
        console.error("Erreur lors de la récupération des détails du véhicule :", error);
      });
  }, [id]);

  if (!vehicule) {
    return <div>Loading...</div>;
  }

  return (
    <div className="vehicule-details">
      <img src={vehicule.imageVoiture} alt={vehicule.marque} />
      <h5 className="card-title">{vehicule.nom}</h5>
      <p className="card-text">Modèle: {vehicule.modele} </p>
      <p className="card-text">Energie: {vehicule.energie} </p>
      <p className="card-text">Prix: {vehicule.prix} €</p>

      <Link to={`/contact`} className="btn btn-primary">
        Contactez-nous pour plus d'infos ! 
      </Link>
    </div>
  );
};

export default VehiculesDetails;

