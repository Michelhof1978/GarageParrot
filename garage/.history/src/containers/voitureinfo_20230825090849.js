import React from 'react';

const CarListing = ({ carData }) => {
  const {
    famille,
    marque,
    modele,
    annee,
    kilometrage,
    boitevitesse,
    energie,
    datecirculation,
    puissance,
    places,
    couleur,
    reference,
    prix,
    imagevoiture,
    imagecritere,
    description,
    created_at,
    updated_at,
    deleted_at,
  } = carData;

  return (
    <div className="car-listing">
      <h2>{marque} - {modele}</h2>
      <p>Famille: {famille}</p>
      <p>Année: {annee}</p>
      <p>Kilométrage: {kilometrage} km</p>
      <p>Boîte de Vitesse: {boitevitesse}</p>
      <p>Énergie: {energie}</p>
      <p>Date de Circulation: {datecirculation}</p>
      <p>Puissance: {puissance}</p>
      <p>Nombre de Places: {places}</p>
      <p>Couleur: {couleur}</p>
      <p>Référence: {reference}</p>
      <p>Prix: {prix} $</p>
      <img src={imagevoiture} alt="Image de la voiture" />
      <img src={imagecritere} alt="Image des critères" />
      <p>Description: {description}</p>
      <p>Date de Création: {created_at}</p>
      <p>Dernière Mise à Jour: {updated_at}</p>
      <p>Date de Suppression: {deleted_at}</p>
    </div>
  );
};

export default CarListing;
