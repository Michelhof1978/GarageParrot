import React from 'react';
const Avis = (props) => {
  return (
    <div className="avis">
      <h3>{props.auteur}</h3>
      <p>{props.contenu}</p>
    </div>
  );
};

export default Avis;
