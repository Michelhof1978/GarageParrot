import React from 'react';

const CarCard = ({ vehicule }) => {
    return (
        <div className="card mb-4">
            <img src={vehicule.imagevoiture} className="card-img-top" alt={vehicule.marque} />
            <div className="card-body">
                <h5 className="card-title">{vehicule.marque} - {vehicule.modele}</h5>
                <p className="card-text">Année: {vehicule.annee}</p>
                <p className="card-text">Kilométrage: {vehicule.kilometrage} km</p>
                <p className="card-text">Puissance: {vehicule.puissance}</p>
                {/* Ajoutez d'autres propriétés de description ici */}
            </div>
        </div>
    );
};

export default CarCard;
