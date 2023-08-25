import React from 'react';

const CarDetails = ({ car }) => {
  return (
    <div className="car-details">
      <h2>{car.marque} - {car.modele}</h2>
      <p>Famille: {car.famille}</p>
      <p>Année: {car.annee}</p>
      <p>Kilométrage: {car.kilometrage} km</p>
      <p>Boîte de Vitesse: {car.boitevitesse}</p>
      <p>Énergie: {car.energie}</p>
      <p>Date de Circulation: {car.datecirculation}</p>
      <p>Puissance: {car.puissance}</p>
      <p>Nombre de Places: {car.places}</p>
      <p>Couleur: {car.couleur}</p>
      <p>Référence: {car.reference}</p>
      <p>Prix: {car.prix} $</p>
      <img src={car.imagevoiture} alt="Image de la voiture" />
      <img src={car.imagecritere} alt="Image des critères" />
      <p>Description: {car.description}</p>
      <p>Date de Création: {car.created_at}</p>
      <p>Dernière Mise à Jour: {car.updated_at}</p>
      <p>Date de Suppression: {car.deleted_at}</p>
    </div>
  );
};

export default CarDetails;
