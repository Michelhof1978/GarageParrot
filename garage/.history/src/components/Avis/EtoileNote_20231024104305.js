import React from 'react';
import "../../App.css";
import EtoileBouton from './EtoileBouton';

const EtoileNotation = () => {
  const etoiles = [];

  for (let i = 1; i <= 5; i++) {
    etoiles.push(
      <EtoileBouton key={i} />
    );
  }

  return (
    <div>
      {/* Bloc cliquable étoiles */}
      {etoiles}
    </div>
  );
};

export default EtoileNotation;
