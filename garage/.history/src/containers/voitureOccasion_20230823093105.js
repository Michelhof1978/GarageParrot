import React from "react";
import SearchFilters from "../components/UI/SearchFilters";

class Accueil extends Component {
    //Nom de la page ds onglet
    componentDidMount = () => {
      document.title = "Voiture Occasion";
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
  
              <VehiculeCard/>
             
  
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
  