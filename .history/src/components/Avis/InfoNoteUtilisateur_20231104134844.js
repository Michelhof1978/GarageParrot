//pour afficher la note moyenne et le nombre d'avis et le nombre d'avis souhaités
import React from 'react';
import "../../App.css";

const InfoNoteUtilisateur = ({ ratingValue, ratingCount }) => {
  return (
    <div>
      <span className="sr-only"> La note actuelle est de </span>
      <span itemProp="ratingValue">{ratingValue}</span>
      <span className="sr-only"> sur </span>
      <span aria-hidden="true">/</span>{' '}
      <span itemProp="ratingCount">{ratingCount}</span> avis
    </div>
  );
};

export default InfoNoteUtilisateur;
