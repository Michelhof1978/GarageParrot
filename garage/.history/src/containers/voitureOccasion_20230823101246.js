import React from "react";
import SearchFilters from "../components/UI/SearchFilters";

class carseextends Component {
    //Nom de la page ds onglet
    componentDidMount = () => {
      document.title = "Voiture Occasion";
    };
  
    render() {
      return (
        <>
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
  
            
             
  
              
            </div>
          </div>
        </>
      );
    }
  }
  
  export default Carsearch;
  