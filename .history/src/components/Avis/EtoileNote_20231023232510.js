import React from 'react';
import "../../App.css";



const EtoileNote = () => {
  return (
    <div>
      {/* Bloc cliquable étoiles */}
      <div className="five-rate-active">
        <EtoileBouton /> Utilisez le composant EtoileBouton pour chaque étoile
        
      </div>
    </div>
  );
};

export default EtoileNote;
