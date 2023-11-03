import React, { useState, useEffect } from "react";
import BannerInfo from "../../components/UI/Banner/BannerInfo";
import CardPrestation from "../../components/Prestation/CardPrestation";
import BannerPneusContinental from "../../assets/images/bannerPneusContinental.webp";
import TitreH1 from "../../components/UI/Titres/TitreH1";
import Textes from "../../components/UI/Textes/Textes";
import BannerQuality from "../../assets/images/bannerQuality.webp";

const Prestation = (props) => (

  useEffect(() => {
    fetch(//fetch effectue une requête http, si reponse, elle sera encapsulé dans une promesse
     "http://localhost/GarageBack/API/prestation.php"
    )
    //Si reponse reçu de la requête http, then va gére la reponse de cette promesse et va prendre une fonction de rappel en argument:
      .then((res) => res.json())// Va extraire les données de l'API sous format json
      .then((data) => {
        setCards(data)
        console.log();
      })//data ou on aurait pu mettre un nom reprèsente la réponse de la requête http
      .catch((err) => console.log(err));//Si erreur de la requête, catch retourne une erreur
  }, [lien]);

  


  return (
  <>
   <BannerInfo imageUrl={BannerPneusContinental} altText="Promotion pneus" />


    <div className="container">
   

        <TitreH1>
        Découvrez Les Prestations Proposées Par Nos Réparateurs
            </TitreH1>

            <Textes>
            Les réparateurs du Garage Parrot s’occupent de la réparation et l’entretien de votre voiture, peu importe la marque ou le modèle de celle-ci. Profitez d’une prestation de qualité effectuée par des véritables experts auto. Réalisez dès maintenant un devis en ligne en nous contactant via le formulaire pour la réparation de votre voiture et obtenez un RDV immédiat !
            </Textes>

            <div className="row">
        {cards.map((vehicule) => (
          <div
            key={vehicule.idVehicule}
            className="col-lg-4 col-md-4 col-sm-6 col-6 mt-3" 
          >
             <Card
              image={vehicule.imageVoiture}
              marque={vehicule.marque}
              nom={vehicule.nom}
              modele={vehicule.modele}
              energie={vehicule.energie}
              prix={vehicule.prix}
              id={vehicule.idVehicule}
            />
        

            <BannerInfo imageUrl={BannerQuality} altText="Offre satisfaction" />
          
    </div>
   
  </>
);

export default Prestation;
