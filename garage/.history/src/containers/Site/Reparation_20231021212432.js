import React from "react";
import Banner from "../../components/UI/Banner/BannerWidh100";
import BannerPneusContinental from "../../assets/images/bannerPneusContinental.webp";
import TitreH1 from "../../components/UI/Titres/TitreH1";
import Textes from "../../components/UI/Textes/Textes";
// import BannerQuality from "/assets/images/bannerQuality.webp";

const Reparation = (props) => (
  <>
    <div className="container">
    <Banner imageUrl={BannerPneusContinental} altText="Promotion pneus" />

        <TitreH1>
        Découvrez Les Prestations Proposées Par  Nos Réparateurs
            </TitreH1>

            <Textes>
            Les réparateurs du Garage Parrot s’occupent de la réparation et l’entretien de votre voiture, peu importe la marque ou le modèle de celle-ci. Profitez d’une prestation de qualité effectuée par des véritables experts auto. Réalisez dès maintenant un devis en ligne en nous contactant via le formulaire pour la réparation de votre voiture et obtenez un RDV immédiat !
            </Textes>
            <div className="col-12">
              <div className="d-flex justify-content-center">
                <img className="img-fluid w-75 mx-auto" src={BannerQuality} alt="Logo Garage PARROT" />
              </div>
            </div>
    </div>
   
  </>
);

export default Reparation;
