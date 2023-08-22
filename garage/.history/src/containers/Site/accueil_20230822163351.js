import React, { Component } from "react";
import TitreH1 from "../../components/UI/TitreH1/TitreH1";
import CarousselCard from "../../components/Caroussel/caroussel";
import peugeot208 from "../../assets/images/peugeot208.webp";
import logoVoiture from "../../assets/images/logoVoiture.webp";
import VoitureCard from "../../components/vehiculeFiche/vehiculeFiche";

class Accueil extends Component {
  //Nom de la page ds onglet
  componentDidMount = () => {
    document.title = "Accueil";
  };

  render() {
    return (
      <>
        <div>
          <TitreH1>Découvrez nos prestations</TitreH1>

          <div className="container">
            <p>
              Les réparateurs s’occupent de la réparation et l’entretien de
              votre voiture, peu importe la marque ou le modèle de celle-ci.
              Profitez d’une prestation de qualité effectuée par des véritables
              experts auto. Contactez nous dès maintenant pour un devis en ligne
              pour la réparation de votre voiture et obtenez un RDV immédiat !
            </p>

            <CarousselCard />

            <VoitureCard />
            <VehiculeCard />

            <img
              className="img-fluid"
              src={peugeot208}
              alt="Logo Garage PARROT"
            />

            <img
              className="img-fluid"
              src={logoVoiture}
              alt="Logo Garage PARROT"
            />
          </div>
        </div>
      </>
    );
  }
}

export default Accueil;
