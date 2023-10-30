import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import "../../App.css";
import BannerInfo from "../../components/UI/Banner/BannerInfo";
import logoVoiture from "../../assets/images/logoVoiture.webp";
import BannerInfo1 from "../../assets/images/bannerInfo1.webp";
import TitreH1 from "../../components/UI/Titres/TitreH1";
import { Card } from "react-bootstrap";
import CardPrestationFiche from "../../components/Prestation/CardPrestationFiche";

const VehiculeFiche = () => {
  const [vehicule, setVehicule] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    axios
      .get(`http://localhost/garageback/front/voiturefiche/all`)
      .then((response) => {
        const vehiculeData = response.data.find((item) => item.idVehicule === id);
        setVehicule(vehiculeData);
      })
      .catch((error) => {
        console.error("Erreur lors de la récupération des détails du véhicule :", error);
      });
  }, [id]);

  if (vehicule === null) {
    return <div>Loading...</div>;
  } else if (!vehicule) {
    return <div>Aucune voiture trouvée pour cet ID.</div>;
  }

  return (
    <div className="container">
      <BannerInfo imageUrl={BannerInfo1} altText="Banner offre" />

      <TitreH1>Dé</TitreH1>
      
      <div className="d-flex justify-content-center align-items-center ">
        <div className="col-lg-8">
          <CardPrestationFiche
            image={vehicule.imageVoiture}
            marque={vehicule.marque}
            nom={vehicule.nom}
            modele={vehicule.modele}
            annee={vehicule.annee}
            datecirculation={vehicule.datecirculation}
            famille={vehicule.famille}
            energie={vehicule.energie}
            kilometrage={vehicule.kilometrage}
            boitevitesse={vehicule.boitevitesse}
            puissance={vehicule.puissance}
            places={vehicule.places}
            couleur={vehicule.couleur}
            description={vehicule.description}
            imageCritere={vehicule.imageCritere}
            prix={vehicule.prix}
            id={vehicule.idVehicule}
          />
        </div>
      </div>

      <BannerInfo imageUrl={logoVoiture} altText="logos marques voitures" />
    </div>
  );
};

export default VehiculeFiche;
