import React from 'react';
import "../../App.css";
import EtoileBouton from './EtoileBouton';

const EtoileNotation = () => {
  return (
    <div>
      {/* Bloc cliquable étoiles */}
      <EtoileBouton/>
          <span aria-hidden="true">1</span>
       
        {/* Répétez la même structure pour les autres étoiles */}
      </div>
   
  );
};

export default EtoileNota;
