import React from 'react';
import "../../App.css";
import EtoileBouton from './EtoileBouton';

const EtoileNotation = () => {
  const nombreEtoiles = 5;
  const etoiles = [];

  for (let i = 0; i < nombreEtoiles; i++) {
    etoiles.push(<EtoileBouton key={i} />);
  }

  return (
    <div className="rating-container ">
      {/* Bloc cliquable étoiles */}
      <div className="five-rate-active te" style={{ display: 'flex' }}>
        {etoiles}
      </div>
    </div>
  );
};

export default EtoileNotation;
