import React, { Component } from "react";
import BannerInfo from "../../components/UI/Banner/BannerInfo";
import BannerPromoEntretien from "../../assets/images/bannerPromoEntretien.webp";
import BannerQuality from "../../assets/images/bannerQuality.webp";




class AvisClients extends Component {
       // Nom de la page dans l'onglet
        componentDidMount = () => {
          document.title = "Avis Client";
        };
  

    render() {
        
      return (
        <>
            <BannerInfo imageUrl={BannerPromoEntretien} altText="Promotion pneus" />


            <BannerInfo imageUrl={BannerQuality} altText="Offre satisfaction" />

        </>
      ); 
    }     
}

export default AvisClients;


import React, { Component } from 'react';

class AvisClient extends Component {
 
    );
  }
}

export default AvisClient;
