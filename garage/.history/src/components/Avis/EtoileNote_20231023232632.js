import React from 'react';
import "../../App.css";
import EtoileBouton from './EtoileBouton';


const EtoileNote = () => {
  return (
    <div>
      {/* Bloc cliquable étoiles */}
      <div className="five-rate-active">
        <EtoileBouton /> {/* Utilisez le composant EtoileBouton pour chaque étoile */}
        <EtoileBouton />
      </div>
    </div>
  );
};

export default EtoileNote;
