import React from 'react';
import "../../App.css";
import EtoileBouton from './EtoileBouton';



const EtoileNotation = ({ numero, selected, onEtoileClick }) => {
  return (
    <span onClick={() => onEtoileClick(numero)}>
      {selected ? '★' : '☆'}
    </span>
  );
};

export default EtoileNotation;
