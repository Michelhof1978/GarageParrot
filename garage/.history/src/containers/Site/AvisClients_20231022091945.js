import React, { Component } from "react";
import BannerInfo from "../../components/UI/Banner/BannerInfo";
import annerPromoEntretien from "../../assets/images/bannerPromoEntretien.webp";




class AvisClients extends Component {
       // Nom de la page dans l'onglet
        componentDidMount = () => {
          document.title = "Avis Client";
        };
  

    render() {
        
      return (
        <>
            <BannerInfo imageUrl={BannerPneusContinental} altText="Promotion pneus" />

        </>
      ); 
    }     
}

export default AvisClients;