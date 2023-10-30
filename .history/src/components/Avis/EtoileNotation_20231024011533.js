import React from 'react';
// import "../../App.css";
// import EtoileBouton from './EtoileBouton';



const EtoileNotation = ({ numero, selected, onEtoileClick }) => {
  const etoileStyle = {
    fontSize: '2em', // Ajustez la taille selon vos besoins
    cursor: 'pointer',
  };

  return (
    <span onClick={() => onEtoileClick(numero)} style={etoileStyle}>
      {selected ? '★' : '☆'}
    </span>
  );
};

export default EtoileNotation;
Dans cet exemple, nous avons ajouté la propriété fontSize dans le style etoileStyle. Vous pouvez ajuster la valeur de '2em' selon la taille souhaitée pour les étoiles. Cela agrandira les étoiles et les rendra plus visibles.

Assurez-vous que le style CSS est appliqué correctement à vos étoiles en fonction de votre structure CSS actuelle. Vous pouvez également personnaliser d'autres styles, tels que la couleur, la police, etc., en fonction de vos préférences.






