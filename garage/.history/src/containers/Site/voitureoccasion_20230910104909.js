
import React, { Component } from "react";
import TitreH1 from "../../components/UI/TitreH1/TitreH1";

import logoVoiture from "../../assets/images/logoVoiture.webp";
import bannierevente from "../../assets/images/bannierevente.webp";
import VehiculeFilters from "../../components/Vehicules/VehiculeFilters";

class Carsearch extends Component {
  componentDidMount() {
    document.title = "Voiture Occasion";
  }

  render() {
    return (
      <div>
        <img
          className="img-fluid w-50"
          src={bannierevente}
          alt="Logo Garage PARROT"
        />
        <div className="container">
          <TitreH1>Recherche Véhicules</TitreH1>
          <p>
            Les réparateurs s’occupent de la réparation et l’entretien de votre voiture, peu importe la marque ou le modèle de celle-ci. Profitez d’une prestation de qualité effectuée par des véritables experts auto. Contactez nous dès maintenant pour un devis en ligne pour la réparation de votre voiture et obtenez un RDV immédiat !
          </p>
          <VehiculeFilters />
        </div>
        <img
          className="img-fluid"
          src={logoVoiture}
          alt="Logo Garage PARROT"
        />
      </div>
    );
  }
}

export default Carsearch;
