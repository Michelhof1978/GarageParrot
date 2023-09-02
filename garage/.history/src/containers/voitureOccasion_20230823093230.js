import React from "react";
import SearchFilters from "../components/UI/SearchFilters";

class carsearch extends Component {
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
  
  export default carsearch;
  