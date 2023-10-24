import React from 'react';
import "../../App.css";
import EtoileBouton from './EtoileBouton';


const EtoileNotation = () => {
  return (
    <div>
      {/* Bloc cliquable étoiles */}
      <div className="five-rate-active">
        <EtoileBouton /> {/* Utilisez le composant EtoileBouton pour chaque étoile */}
       
      </div>
    </div>
  );
};

export default EtoileNotation;
