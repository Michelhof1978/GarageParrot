import React from 'react';

const CarDetails = ({ car }) => {
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
      <img src={car.imagecritere} alt="Image des critères" />
      <p>Description: {car.description}</p>
      <p>Date de Création: {car.created_at}</p>
      <p>Dernière Mise à Jour: {car.updated_at}</p>
      <p>Date de Suppression: {car.deleted_at}</p>
    </div>
  );
};

export default CarDetails;
