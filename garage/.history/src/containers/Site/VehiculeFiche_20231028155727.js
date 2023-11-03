import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import "../../App.css";
import BannerInfo from "../../components/UI/Banner/BannerInfo";
import logoVoiture from "../../assets/images/logoVoiture.webp";
import BannerInfo1 from "../../assets/images/bannerInfo1.webp";
import CardFicheVoiture from "../../components/Vehicules/CardVehiculeFiche";
import TitreH1 from "../../components/UI/Titres/TitreH1";

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
    <>
      <BannerInfo imageUrl={BannerInfo1} altText="Banner offre" />

      <TitreH1>Informations Véhicule</TitreH1>

      <div className="d-flex justify-content-center align-items-center vh-100 w-">
        <div className="col-lg-8">
          <div className="row">
            <div className="col-12 mt-3">
              <CardFicheVoiture
                id={vehicule.idVehicule}
                image={vehicule.imageVoiture}
                famille={vehicule.famille}
                marque={vehicule.marque}
                nom={vehicule.nom}
                modele={vehicule.modele}
                energie={vehicule.energie}
                prix={vehicule.prix}
              />
            </div>
          </div>
        </div>
      </div>

      <BannerInfo imageUrl={logoVoiture} altText="logos marques voitures" />
    </>
  );
};

export default VehiculeFiche;
