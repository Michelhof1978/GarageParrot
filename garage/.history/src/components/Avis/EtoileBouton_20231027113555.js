import React from 'react';
import 

const EtoileBouton = (props) => {
  const { note } = props;
  // Ajoutez une classe CSS pour styliser l'étoile (par exemple, "filled" pour indiquer que l'étoile est sélectionnée)
  const filledClass = note <= props.note ? "filled" : "";

  return (
    <button
      type="button"
      className={"rate-value-empty " + filledClass}
      aria-label={`Noter ${note} sur 5`}
      style={{ border: 'none', background: 'none', padding: 0, cursor: 'pointer' }}
    >
      
    </button>
  );
};

export default EtoileBouton;
