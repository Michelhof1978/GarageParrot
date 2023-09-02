import React from "react";
import SearchFilters from "../components/UI/SearchFilters";

class Carsearch extends Component {
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
             
  
              <CarousselCard />
  
            
             
  
              
            </div>
          </div>
        </>
      );
    }
  }
  
  export default carsearch;
  