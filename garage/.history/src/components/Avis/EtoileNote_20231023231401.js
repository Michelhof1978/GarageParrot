import React from 'react';
import "../../App.css";
import EtoileBouton from './EtoileBouton';


const EtoileNote = () => {
  return (
    <div>
      {/* Bloc cliquable étoiles */}
      <div className="five-rate-active">
        <Etoilen /> {/* Utilisez le composant EtoileBouton pour chaque étoile */}
        <EtoileBouton />
        <EtoileBouton />
        <EtoileBouton />
        <EtoileBouton />
      </div>
    </div>
  );
};

export default EtoileNote;
