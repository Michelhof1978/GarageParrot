import React from 'react';
import "../../App.css";
import EtoileBouton from './EtoileBouton';

const EtoileNote = () => {
  return (
    <div>
      {/* Bloc cliquable étoiles */}
      <div className="five-rate-active">
        <button
          type="button"
          className="rate-value-empty"
          aria-label="Noter 1 sur 5"
          style={{ border: 'none', background: 'none', padding: 0, cursor: 'pointer' }}
        >
          <span aria-hidden="true">1</span>
        </button>
        {/* Répétez la même structure pour les autres étoiles */}
      </div>
    </div>
  );
};

export default EtoileNote;
