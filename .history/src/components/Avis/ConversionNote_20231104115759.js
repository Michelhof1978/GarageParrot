import React, { useState } from "react";
import "../../App.css";
import Stars from "./Rating";

//Conversion de l'étoile en note

const ConversionNote = () => {//création d une variable d’état ‘note’ à l’aide du Hook ‘UseState’ et je vais l’initialiser à 0.
  const [note, setNote] = useState(0);
  const handleNoteChange = (newNote) => {
    setNote(newNote);
  };
  const etoiles = [];// Pour stocker les composant 'Stars'

  for (let i = 1; i <= 5; i++) {//pour chaque composant étoile créée, on l'ajoutera au tableau
    etoiles.push(
      <Stars
        key={i}// Pour aider Reacr à identifier chaque élément de manière unique
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
