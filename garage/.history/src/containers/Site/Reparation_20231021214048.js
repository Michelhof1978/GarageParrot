import React from "react";
import BannerInfo from "../../components/UI/Banner/BannerInfo";
import BannerPneusContinental from "../../assets/images/bannerPneusContinental.webp";
import TitreH1 from "../../components/UI/Titres/TitreH1";
import Textes from "../../components/UI/Textes/Textes";
import BannerQuality from "../../assets/images/bannerQuality.webp";

const Reparation = (props) => (
  <>
  
   <BannerInfo imageUrl={BannerPneusContinental} altText="Promotion pneus" />


    <div className="container">
   

        <TitreH1>
        Découvrez Les Prestations Proposées Par Nos Réparateurs
            </TitreH1>

            <Textes>
            Les réparateurs du Garage Parrot s’occupent de la réparation et l’entretien de votre voiture, peu importe la marque ou le modèle de celle-ci. Profitez d’une prestation de qualité effectuée par des véritables experts auto. Réalisez dès maintenant un devis en ligne en nous contactant via le formulaire pour la réparation de votre voiture et obtenez un RDV immédiat !
            </Textes>

<div>
            <BannerInfo imageUrl={BannerQuality} altText="Offre satisfaction" />
           
    </div>
   
  </>
);

export default Reparation;
