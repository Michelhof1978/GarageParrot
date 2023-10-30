import React from 'react';
import "../../App.css";
import EtoileBouton from './EtoileBouton';

import React, { useState } from 'react';
import EtoileBouton from './EtoileBouton';

const EtoileNotation = () => {
  const [note, setNote] = useState(0);

  const handleNoteChange = (newNote) => {
    setNote(newNote);
  };

  const etoiles = [];

  for (let i = 0; i < 5; i++) {
    etoiles.push(
      <EtoileBouton
        key={i}
        selected={i < note}
        onEtoileClick={() => handleNoteChange(i + 1)}
      />
    );
  }

  return (
    <div className="rating-container">
      <div className="five-rate-active">{etoiles}</div>
    </div>
  );
};

export default EtoileNotation;
