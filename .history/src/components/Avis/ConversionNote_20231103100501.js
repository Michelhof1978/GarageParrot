import React, { useState } from "react";
import "../../App.css";
import Stars from "./Stars";

//Conversion de l'étoile en note

const ConversionNote = () => {
  const [note, setNote] = useState(0);

  const handleNoteChange = (newNote) => {
    setNote(newNote);
  };

  const etoiles = [];

  for (let i = 1; i <= 5; i++) {
    etoiles.push(
      <Stars
        key={i}
        selected={i <= note}
        onEtoileClick={() => handleNoteChange(i)}
      />
    );
  }
  

  return (
    <div className="rating-container">
      <div className="five-rate-active">{etoiles}</div>
      <p>Note : {note}</p>
    </div>
  );
};

export default ConversionNote;
