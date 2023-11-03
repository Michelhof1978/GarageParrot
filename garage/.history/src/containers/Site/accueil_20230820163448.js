import React, { Component } from "react";
import TitreH1 from "../../components/UI/Titreh1/TitresH1";
import CarousselCard from "../../components/caroussel/caroussel";
import Peugeot208 
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
          <p>Les réparateurs s’occupent de la réparation et l’entretien de votre voiture, peu importe la marque 
ou le modèle de celle-ci. Profitez d’une prestation de qualité effectuée par des véritables experts auto. 
Contactez nous dès maintenant pour un devis en ligne pour la réparation de votre voiture et obtenez un RDV immédiat !</p>

<CarousselCard />

<Peugeot208/>
          </div>

        </div>
      </>
    );
  }
}

export default Accueil;
