import React from 'react';
import "../../App.css";
import EtoileBouton from './EtoileBouton';

const EtoileNote = () => {
  return (
    <div>
      {/* Bloc cliquable étoiles */}
      <EtoileB/>
          <span aria-hidden="true">1</span>
       
        {/* Répétez la même structure pour les autres étoiles */}
      </div>
   
  );
};

export default EtoileNote;
