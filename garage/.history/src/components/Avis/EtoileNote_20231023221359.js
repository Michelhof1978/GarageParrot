import React from 'react';
import "../../App.css";




const EtoileNote = () => {
  return (
    <div>
      {/* Bloc cliquable étoiles */}
      <div className="five-rate-active">
        <button type="button" className="rate-value-empty" aria-label="Noter 1 sur 5">
          <span aria-hidden="true">1</span>
        </button>
        <button type="button" className="rate-value-empty" aria-label="Noter 2 sur 5">
          <span aria-hidden="true">2</span>
        </button>
        <button type="button" className="rate-value-empty" aria-label="Noter 3 sur 5">
          <span aria-hidden="true">3</span>
        </button>
        <button type="button" className="rate-value-empty" aria-label="Noter 4 sur 5">
          <span aria-hidden="true">4</span>
        </button>
        <button type="button" className="rate-value-empty" aria-label="Noter 5 sur 5">
          <span aria-hidden="true">5</span>
        </button>
      </div>

     
    </div>
  );
};

export default EtoileNote;


