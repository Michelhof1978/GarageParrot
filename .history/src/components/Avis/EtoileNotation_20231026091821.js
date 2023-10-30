import React, { useState } from 'react';
import EtoileBouton from './EtoileBouton';
import "../../App.css";

const EtoileNotation = () => {
  const nombreEtoiles = 5;
  const [notes, setNotes] = useState(Array(nombreEtoiles).fill(false));

  const handleEtoileClick = (index) => {
    const newNotes = notes.map((note, i) => i <= index);
    setNotes(newNotes);
  };

  const noteSurCinq = (notes) => {
    const note = (notes.filter((note) => note).length / nombreEtoiles) * 5;
    return isNaN(note) ? 0 : note; // Si aucune étoile n'est cliquée, la note est 0.
  };

  return (
    <div className="rating-container">
      <div className="five-rate-active">
        {notes.map((isActive, index) => (
          <EtoileBouton
            key={index}
            isActive={isActive}
            onClick={() => handleEtoileClick(index)}
          />
        ))}
      </div>
      <div className="note">Note : {noteSurCinq(notes)}/5</div>
    </div>
  );
};

export default EtoileNotation;
