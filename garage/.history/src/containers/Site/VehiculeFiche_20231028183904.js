import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import "../../App.css";
import BannerInfo from "../../components/UI/Banner/BannerInfo";
import logoVoiture from "../../assets/images/logoVoiture.webp";
import BannerInfo1 from "../../assets/images/bannerInfo1.webp";
import TitreH1 from "../../components/UI/Titres/TitreH1";
import { Card } from "react-bootstrap";

const VehiculeFiche = () => {
  const [vehicules, setVehicules] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    axios
      .get(`http://localhost/garageback/front/voiturefiche/all`)
      .then((response) => {
        setVehicules(response.data);
      })
      .catch((error) => {
        console.error("Erreur lors de la récupération des détails des véhicules :", error);
      });
  }, [id]);

  if (vehicules.length === 0) {
    return <div>Loading...</div>;
  }

  return (
    <>
      <BannerInfo imageUrl={BannerInfo1} altText="Banner offre" />

      <TitreH1>Informations Véhicules</TitreH1>
      <div className="d-flex justify-content-center align-items-center vh-100">
        {vehicules.map((vehicule) => (
          <div key={vehicule.idVehicule} className="col-lg-4 col-md-4 col-sm-6 col-6 mt-3">
            <Card>
              <Card.Img variant="top" src={vehicule.imageVoiture} alt={vehicule.marque} />
              <Card.Body>
                <Card.Title>{vehicule.marque}</Card.Title>
                <Card.Text>
                  Modèle: {vehicule.modele}
                  <br />
                  Énergie: {vehicule.energie}
                  <br />
                  Prix: {vehicule.prix} €
                </Card.Text>
              </Card.Body>
            </Card>
          </div>
        ))}
      </div>

      <BannerInfo imageUrl={logoVoiture} altText="logos marques voitures" />
    </>
  );
};

export default VehiculeFiche;
