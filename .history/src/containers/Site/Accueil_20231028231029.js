import React, { Component } from "react";
import TitreH1 from "../../components/UI/Titres/TitreH1";
import CarousselCard from "../../components/Caroussel/Caroussel";
import peugeot208 from "../../assets/images/peugeot208.webp";
import peugeot3008 from "../../assets/images/peugeot3008.webp";
import logoVoiture from "../../assets/images/logoVoiture.webp";
import VehiculesCard from "../../components/Vehicules/VehiculesCard";
import AvisClientsAccueil from "../../components/Avis/AvisClientsAccueil";
import Textes from "../../components/UI/Textes/Textes";
import TitreH3 from "../../components/UI/Titres/TitreH3";
import BannerInfo from "../../components/UI/Banner/BannerInfo";
import BannerInfo1 from "../../assets/images/bannerInfo1.webp";

class Accueil extends Component {
  componentDidMount = () => {
    //Titre de la page
    document.title = "Accueil Garage Parrot";
  };

  render() {
    return (
      <>
        <BannerInfo imageUrl={BannerInfo1} altText="Banner offre" />

        <div>
          <div className="container">
            <TitreH1>Bienvenue au Garage Parrot De Toulouse</TitreH1>

            <Textes>
              Les réparateurs s'occupent de la réparation et de l'entretien de
              votre voiture, peu importe la marque ou le modèle de celle-ci.
              Profitez d'une prestation de qualité effectuée par des véritables
              experts auto. Contactez-nous dès maintenant pour un devis en ligne
              pour la réparation de votre voiture et obtenez un RDV immédiat !
            </Textes>

            <CarousselCard />

            <TitreH3>V Voitures d'Occasions En Vente !</TitreH3>
            <Textes>
            Les réparateurs du Garage Parrot s’occupent de la réparation et l’entretien de votre voiture, peu importe la marque ou le modèle de celle-ci. Profitez d’une prestation de qualité effectuée par des véritables experts auto. Réalisez dès maintenant un devis en ligne en nous contactant via le formulaire pour la réparation de votre voiture et obtenez un RDV immédiat !
            </Textes>
            <VehiculesCard />

            <div className="container-fluid mt-3">
              <img
                className="img-fluid w-50"
                src={peugeot208}
                alt="peugeot 208"
              />
              <img
                className="img-fluid w-50"
                src={peugeot3008}
                alt="peugeot 3008"
              />
            </div>

            <AvisClientsAccueil />

            <BannerInfo
              imageUrl={logoVoiture}
              altText="logos marques voitures"
            />
          </div>
        </div>
      </>
    );
  }
}

export default Accueil;
