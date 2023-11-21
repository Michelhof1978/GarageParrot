import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import "../../App.css";
import BannerInfo from "../../components/UI/Banner/BannerInfo";
import logoVoiture from "../../assets/images/logoVoiture.webp";
import BannerInfo1 from "../../assets/images/bannerInfo1.webp";
import TitreH1 from "../../components/UI/Titres/TitreH1";
import CardPrestationFiche from "../../components/Prestation/CardPrestationFiche";



const PrestationFiche = () => {

  useEffect(() => {
    // Titre de la page
    document.title = "Prestation du garage";
  }, []);


  const [prestation, setVehicule] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    axios
      .get(`http://localhost/GarageBack/API/prestation.php`)
      .then((response) => {
        const prestationData = response.data.find((item) => item.idPrestation === id);
        setVehicule(prestationData);
      })
      .catch((error) => {
        console.error("Erreur lors de la récupération des détails de la prestation :", error);
      });
  }, [id]);

  if (prestation === null) {
    return <div>Loading...</div>;
  } else if (!prestation) {
    return <div>Aucune prestation trouvée pour cet ID.</div>;
  }

  return (
    <div className="container">
      <BannerInfo imageUrl={BannerInfo1} altText="Banner offre" />

      <TitreH1>Détails Sur Nos Prestations</TitreH1>
      
      <div className="d-flex justify-content-center align-items-center ">
        <div className="col-lg-8">
          <CardPrestationFiche
            image={prestation.imagePrestation}
            nom={prestation.nom}
            description={prestation.description}
            prix={prestation.prix}
            id={prestation.idPrestation}
          />
        </div>
      </div>

      <BannerInfo imageUrl={logoVoiture} altText="logos marques voitures" />
    </div>
  );
};

export default PrestationFiche;
