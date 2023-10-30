import React from "react";
import Banner from "../../components/UI/Banner/BannerWidh100";
import BannerPneusContinental from "../../assets/images/bannerPneusContinental.webp";
import TitreH1 from "../../components/UI/Titres/TitreH1";
import 
const Reparation = (props) => (
  <>
    <div className="">
    <Banner imageUrl={BannerPneusContinental} altText="Promotion pneus" />

        <TitreH1>
            Nos Services De réparation Et d'Entretien
            </TitreH1>

            <Textes>
              Les réparateurs s'occupent de la réparation et de l'entretien de votre voiture, peu importe la marque ou le modèle de celle-ci. Profitez d'une prestation de qualité effectuée par des véritables experts auto. Contactez-nous dès maintenant pour un devis en ligne pour la réparation de votre voiture et obtenez un RDV immédiat !
            </Textes>
    </div>
  </>
);

export default Reparation;
