import React, { Component } from "react"; 
import SearchFilters from "../../components/UI/SearchFilters";
import TitreH1 from "../../components/UI/TitreH1/TitreH1";
imp


class Carsearch extends Component {
    //Nom de la page ds onglet
    componentDidMount = () => {
      document.title = "Voiture Occasion";
    };
  
    render() {
      return (
        <>
        <img
              className="img-fluid"
              src={logoVoiture}
              alt="Logo Garage PARROT"
            />
          <div>
            <TitreH1>Recherche Véhicules</TitreH1>
  
            <div className="container">
             
            <p>
              Les réparateurs s’occupent de la réparation et l’entretien de
              votre voiture, peu importe la marque ou le modèle de celle-ci.
              Profitez d’une prestation de qualité effectuée par des véritables
              experts auto. Contactez nous dès maintenant pour un devis en ligne
              pour la réparation de votre voiture et obtenez un RDV immédiat !
            </p>
              <SearchFilters/>
  
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
  
  export default Carsearch;
  