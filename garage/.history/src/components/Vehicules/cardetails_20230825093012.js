import React, { useState, useEffect } from 'react';
import axios from 'axios';

const CarDetails = ({ vehicule }) => {
  
    const CarDetails = ({ vehiculeId }) => {
        const [vehicule, setVehicule] = useState(null);
      
        useEffect(() => {
          axios.get(`/api/cars/${vehiculeId}`)
            .then(response => {
              setVehicule(response.data);
            })
            .catch(error => {
              console.error('Error fetching vehicule data:', error);
            });
        }, [vehiculeId]);
      
        if (!vehicule) {
          return <div>Loading...</div>;
        }
  
    return (
    <div className="car-details">
      <h2>{vehicule.marque} - {vehicule.modele}</h2>
      <p>Famille: {vehicule.famille}</p>
      <p>Année: {vehicule.annee}</p>
      <p>Kilométrage: {vehicule.kilometrage} km</p>
      <p>Boîte de Vitesse: {vehicule.boitevitesse}</p>
      <p>Énergie: {vehicule.energie}</p>
      <p>Date de Circulation: {vehicule.datecirculation}</p>
      <p>Puissance: {vehicule.puissance}</p>
      <p>Nombre de Places: {vehicule.places}</p>
      <p>Couleur: {vehicule.couleur}</p>
      <p>Référence: {vehicule.reference}</p>
      <p>Prix: {vehicule.prix} $</p>
      <img src={vehicule.imagevoiture} alt="Image de la voiture" />
      <img src={vehicule.imagecritere} alt="Image des critères" />
      <p>Description: {vehicule.description}</p>
      <p>Date de Création: {vehicule.created_at}</p>
      <p>Dernière Mise à Jour: {vehicule.updated_at}</p>
      <p>Date de Suppression: {vehicule.deleted_at}</p>
    </div>
  );
};

export default CarDetails;
