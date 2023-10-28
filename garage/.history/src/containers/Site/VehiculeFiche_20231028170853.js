import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import axios from "axios";
import "../../App.css";
import BannerInfo from "../../components/UI/Banner/BannerInfo";
import logoVoiture from "../../assets/images/logoVoiture.webp";
import BannerInfo1 from "../../assets/images/bannerInfo1.webp";
import CardFicheVoiture
import TitreH1 from "../../components/UI/Titres/TitreH1";




const VehiculeFiche = () => {
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
    <>
    <BannerInfo imageUrl={BannerInfo1} altText="Banner offre" />
    <TitreH1>Informations Véhicule</TitreH1>

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

    <BannerInfo imageUrl={logoVoiture} altText="logos marques voitures" />

    </>
  );
};

export default VehiculeFiche;
