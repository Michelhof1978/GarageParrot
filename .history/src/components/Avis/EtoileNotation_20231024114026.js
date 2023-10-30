// EtoileNotation.js
import React from 'react';
import "../../App.css";
import EtoileBouton from './EtoileBouton';

const EtoileNotation = ({ note, onEtoileClick }) => {
  const etoiles = [];

  for (let i = 1; i <= 5; i++) {
    etoiles.push(
      <EtoileBouton
        key={i}
        numero={i}
        selected={i <= note}
        onEtoileClick={onEtoileClick}
      />
    );
  }

  return (
    <div className="rating-container">
      <div className="" style={{ display: 'flex' }}>
        {etoiles}
      </div>
    </div>
  );
};

export default EtoileNotation;
