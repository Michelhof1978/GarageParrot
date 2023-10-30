import React, { Component } from "react";
import TitreH1 from "../../components/UI/TitreH1/TitreH1";
import CarousselCard from "../../components/Caroussel/caroussel";
import peugeot208 from "../../assets/images/peugeot208.webp";
import peugeot3008 from "../../assets/images/peugeot3008.webp";
import logoVoiture from "../../assets/images/logoVoiture.webp";
import VehiculesCard from "../../components/Vehicules/VehiculesCard";

class Accueil extends Component {
  // Nom de la page dans l'onglet
  componentDidMount = () => {
    document.title = "Accueil";
  };

  render() {
    return (
      <>
        <div>
          <TitreH1 className="ms-">Découvrez nos prestations</TitreH1>

          <div className="container">
            <p className="textIntro lead bg-light rounded shadow p-4 pb-5 bg-white rounded ms-1 me-1">
              Les réparateurs s’occupent de la réparation et l’entretien de
              votre voiture, peu importe la marque ou le modèle de celle-ci.
              Profitez d’une prestation de qualité effectuée par des véritables
              experts auto. Contactez-nous dès maintenant pour un devis en ligne
              pour la réparation de votre voiture et obtenez un RDV immédiat !
            </p>

            <CarousselCard />

            <TitreH1>Nouvel Arrivage en exclusivité !</TitreH1>
            <VehiculesCard />

            <div className="container-fluid mt-3">
            <img
              className="img-fluid w-50"
              src={peugeot208}
              alt="peugeot 2008"
            />

            <img
              className="img-fluid w-50"
              src={peugeot3008}
              alt="peugeot 3008"
            />
            </div>

            <div className="col-12">
              <div className="d-flex justify-content-center">
                <img
                  className="img-fluid w-75 mx-auto"
                  src={logoVoiture}
                  alt="Logo Garage PARROT"
                />
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default Accueil;
