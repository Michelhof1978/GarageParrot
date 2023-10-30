import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import axios from "axios";
import "../../App.css";
import BannerInfo from "../../components/UI/Banner/BannerInfo";
import logoVoiture from "../../assets/images/logoVoiture.webp";
import BannerInfo1 from "../../assets/images/bannerInfo1.webp";
import Card from "../../components/Vehicules/Card";
import TitreH2 from "../../components/UI/Titres/TitreH2";

const VehiculeFiche = () => {
  const [vehicule, setVehicule] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    axios
      .get(`http://localhost/garageback/front/voiturefiche/all`)
      .then((response) => {
        console.log("Données du véhicule:", response.data);
        const vehiculeData = response.data.find((item) => item.idVehicule === id);
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

      <TitreH1>Résultat de la recherche</TitreH>

      <div className="row">
        <div key={vehicule.idVehicule} className="col-lg-4 col-md-4 col-sm-6 col-6 mt-3">
          <Card
            image={vehicule.imageVoiture}
            marque={vehicule.marque}
            nom={vehicule.nom}
            modele={vehicule.modele}
            energie={vehicule.energie}
            prix={vehicule.prix}
            id={vehicule.idVehicule}
          />
        </div>
        <Link to={`/contact`} className="btn btn-primary">
          Contactez-nous pour plus d'infos !
        </Link>
      </div>

      <BannerInfo imageUrl={logoVoiture} altText="logos marques voitures" />
  

    {/* <div className="vehicule-details">
      <img src={vehicule.imageVoiture} alt={vehicule.marque} />
      <h5 className="card-title">{vehicule.nom}</h5>
      <p className="card-text">Modèle: {vehicule.modele} </p>
      <p className="card-text">Energie: {vehicule.energie} </p>
      <p className="card-text">Prix: {vehicule.prix} €</p>

      <Link to={`/contact`} className="btn btn-primary">
        Contactez-nous pour plus d'infos ! 
      </Link>
    </div> */}

      <BannerInfo imageUrl={logoVoiture} altText="logos marques voitures" />
      </>
  );
};

export default VehiculeFiche;
