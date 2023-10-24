import React from 'react';
import "../../App.css";
import EtoileBouton from './EtoileBouton';


const EtoileNotation = () => {
  return (
    <div className="rating-container">
      {/* Bloc cliquable étoiles */}
      <div className="five-rate-active">
        <EtoileBouton /> {/* Utilisez le composant EtoileBouton pour chaque étoile */}
        <EtoileBouton />
        <EtoileBouton />
        <EtoileBouton />
        <EtoileBouton />
      </div>
    </div>
  );
};

export default EtoileNotation;
