
import React, { Component, useState, useEffect } from 'react';
import TitreH1 from "../../components/UI/TitreH1/TitreH1";
import logoVoiture from "../../assets/images/logoVoiture.webp";
import bannierevente from "../../assets/images/bannierevente.webp";


function Voitureinfo() {
    // Nom de la page dans l'onglet
    useEffect(() => {
      document.title = 'Voiture info';
    }, []);
  
    return (
      <>
        <img className="img-fluid" src={bannierevente} alt="Logo Garage PARROT" />
  
        <img className="img-fluid" src={logoVoiture} alt="Logo Garage PARROT" />
      </>
    );
  }
  
  export default Voitureinfo;