import React, { Component } from "react";
import axios from "axios";

import React from "react";

const VoitureCard = (props) => (
  <div className="card">
    <div className="card-body">
      <h5 className="card-title">{props.marque}</h5>
      <h6 className="card-subtitle mb-2 text-muted">{props.modele}</h6>
      <p className="card-text">Carburant: {props.energie}</p>
      <p className="card-text">Prix: {props.prix} €</p>
    </div>
  </div>
);

export default VoitureCard;
