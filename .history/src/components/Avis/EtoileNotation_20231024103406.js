import React from 'react';
import "../../App.css";
import EtoileBouton from './EtoileBouton';

const EtoileNotation = () => {
  return (
    <div className="rating-container">
      {/* Bloc cliquable étoiles */}
      <div className="five-rate-active" style={{ display: 'flex' }}>
        <EtoileBouton />
        <EtoileBouton />
        <EtoileBouton />
        <EtoileBouton />
        <EtoileBouton />
      </div>
    </div>
  );
};

export default EtoileNotation;
