
//Permet d'enlever l'arrière plan qui est la case à cocher
import React from 'react';

const EtoileBouton = () => {
  return (
    <button
      type="button"
      className="rate-value-empty"
      aria-label="Noter 1 sur 5"
      style={{ border: 'none', background: 'none', padding: 0, cursor: 'pointer' }}
    >
      
    </button>
  );
};

export default EtoileBouton;
