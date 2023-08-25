// src/App.js
import React from 'react';
import { Admin, Resource, List, Datagrid, TextField, NumberField, DateField, DecimalField, ImageField, LongTextField } from 'react-admin';
import dataProvider from './dataProvider';
import "../../App.css";



const VehicleDetails = ({ vehicle }) => {
  return (
    <div className="vehicle-details">
      <h2>{vehicle.marque} {vehicle.modele}</h2>
      <p>Famille: {vehicle.famille}</p>
      <p>Année: {vehicle.annee}</p>
      <p>Kilométrage: {vehicle.kilometrage} km</p>
      <p>Boite de vitesse: {vehicle.boitevitesse}</p>
      <p>Énergie: {vehicle.energie}</p>
      <p>Date de circulation: {vehicle.datecirculation}</p>
      <p>Puissance: {vehicle.puissance}</p>
      <p>Places: {vehicle.places}</p>
      <p>Couleur: {vehicle.couleur}</p>
      <p>Référence: {vehicle.reference}</p>
      <p>Prix: {vehicle.prix} €</p>
      <img src={vehicle.imagevoiture} alt="Image de la voiture" />
      <img src={vehicle.imagecritere} alt="Image du critère" />
      <p>Description: {vehicle.description}</p>
    </div>
  );
};

export default VehicleDetails;
