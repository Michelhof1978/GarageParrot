import React from 'react';
import "../../App.css";


const EtoileNote = ({ numero, selected, onEtoileClick }) => {
  return (
    <button
      type="button"
      className={`rate-value-${selected ? 'full' : 'empty'}`}
      aria-label={`Noter ${numero} sur 5`}
      style={{ display: selected ? 'none' : 'inline' }}
      onClick={() => onEtoileClick(numero)}
    >
      <span aria-hidden="true">{numero}</span>
    </button>
  );
};

export default EtoileNote;



