import React from 'react';

const CarDetails = ({ car }) => {
  return (
    <div className="car-details">
      <h2>{vehicule.marque} - {vehicule.modele}</h2>
      <p>Famille: {vehicule.famille}</p>
      <p>Année: {vehicule.annee}</p>
      <p>Kilométrage: {vehicule.kilometrage} km</p>
      <p>Boîte de Vitesse: {vehicule.boitevitesse}</p>
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
