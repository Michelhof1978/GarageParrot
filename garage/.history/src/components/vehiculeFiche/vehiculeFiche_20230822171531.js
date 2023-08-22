import React, { Component } from "react";
import axios from "axios";


const VoitureFiche = (props) => (
  <div className="card">
    {/* Ajoutez la balise <img> ici */}
    <img src={props.image} className="card-img-top" alt={props.marque} />

    <div className="card-body">
      <h5 className="card-title">{props.marque}</h5>
      <h6 className="card-subtitle mb-2 text-muted">{props.modele}</h6>
      <p className="card-text">Carburant: {props.energie}</p>
      <p className="card-text">Prix: {props.prix} €</p>
    </div>
  </div>
);

export default VoitureFiche;

voiture