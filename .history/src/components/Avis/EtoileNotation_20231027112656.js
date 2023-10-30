import React from 'react';
import "../../App.css";
import EtoileBouton from './EtoileBouton';

const EtoileNotation = () => {
  const nombreEtoiles = 5;
  const etoiles = [];

  for (let i = 0; i < nombreEtoiles; i++) {
    // Ajoutez 1 pour obtenir la note de 1 à 5
    const note = i + 1;
    etoiles.push(<EtoileBouton key={i} note={note} />);
  }

  return (
    <div className="ratrate-value-full ">
      {/* Bloc cliquable étoiles */}
      <div className="five-rate-active " >
        {etoiles}
      </div>
    </div>
  );
};

export default EtoileNotation;
