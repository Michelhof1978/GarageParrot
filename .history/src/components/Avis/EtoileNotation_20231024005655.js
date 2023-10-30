import React from 'react';
import "../../App.css";
import EtoileBouton from './EtoileBouton';


const EtoileNot = () => {
  return (
    <div>
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

export default EtoileNote;
