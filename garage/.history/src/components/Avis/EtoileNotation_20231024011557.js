import React from 'react';
// import "../../App.css";
// import EtoileBouton from './EtoileBouton';



import React from 'react';

const EtoileNotation = ({ numero, selected, onEtoileClick }) => {
  const etoileStyle = {
    fontSize: '2em', // Ajustez la taille selon vos besoins
    cursor: 'pointer',
  };

  return
    <span onClick={() => onEtoileClick(numero)} style={etoileStyle}>
      {selected ? '★' : '☆'}
    </span>
  );
};

export default EtoileNotation;

