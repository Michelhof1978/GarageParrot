import React, { Component } from "react";
import TitreH1 from "../../components/UI/Titres/TitreH1";
import CarousselCard from "../../components/Caroussel/caroussel";
import peugeot208 from "../../assets/images/peugeot208.webp";
import peugeot3008 from "../../assets/images/peugeot3008.webp";
import logoVoiture from "../../assets/images/logoVoiture.webp";
import VehiculesCard from "../../components/Vehicules/VehiculesCard";
import AvisClients from "../../components/Avis/avisClients";
import TitreH2 from "../../components/UI/Titres/TitreH2";
import Texte from "../../components/UI/Textes/textes";

class Accueil extends Component {
  // Nom de la page dans l'onglet
  componentDidMount = () => {
    document.title = "Accueil";
  };

  render() {
    return (
      <>
        <div>
          <Texte>Découvrez nos prestations</Texte>

          <div className="container">
            <p className="textIntro lead bg-light rounded shadow p-4 pb-5 bg-white rounded ms-1 me-1">
              
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

            <AvisClients />

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
