import React from 'react';
import "../../App.css";
import EtoileBouton from './EtoileBouton';


const EtoileNotation = ({ numero, selected, onEtoileClick }) => {
  return (
    <EtoileBouton
      key={numero}
      selected={selected}
      onClick={() => onEtoileClick(numero)}
    />
  );
};
