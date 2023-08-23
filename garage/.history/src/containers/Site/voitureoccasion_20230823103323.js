import React, { Component } from "react"; 
import SearchFilters from "../../components/UI/SearchFilters";
import TitreH1 from "../../components/UI/TitreH1/TitreH1";


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
             
            <p>
             gsrglkjgljbldjbnlkdnd;bknxknbkldnbldkfgglsjglsgmsjgsjggklgdnbkdnkdnldglg
            </p>
              <SearchFilters/>
  
            
             
  
              
            </div>
          </div>
        </>
      );
    }
  }
  
  export default Carsearch;
  