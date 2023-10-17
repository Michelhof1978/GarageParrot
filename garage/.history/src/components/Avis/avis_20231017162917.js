import React, { useState } from 'react';

const Avis = (props) => {
  const [avi, setAvis] = useState("");
  const [auteur, setAuteur] = useState("");

  const avisList = [
    ["Je suis ravi du service exceptionnel que j'ai reçu au garage. L'équipe a été professionnelle, rapide et compétente pour résoudre les problèmes de ma voiture. Je recommande vivement ce garage à tous ceux qui recherchent des réparations de qualité et un service client de premier ordre", "Carole"],
    ["J'ai eu une expérience vraiment positive avec ce garage. Ils ont pris en charge ma voiture rapidement, m'ont fourni un devis clair, et le travail a été effectué dans les délais prévus. Le personnel était sympathique et informatif. Je suis très satisfait de leur service.", "Bastien"],
    ["Nous avons passé un excellent séjour au caravanes de la besbre! Logement confortable, l'hôte était très serviable et sympathique. Nous avons adoré l'emplacement, qui était proche du PAL. Nous recommandons vivement cet endroit.", "Pauline"],
    ["Nous avons passé un excellent séjour au camping. Tout était parfait, de la propreté de la caravane aux équipements fournis. La communication avec l'hôte était également excellente. Nous recommandons vivement cet endroit !", "Manu"],
    ["Nous avons été très impressionnés par la qualité du logement et l'hospitalité de l'hôte. Tout était propre et bien entretenu, et l'hôte était très sympathique et serviable. Nous le recommandons vivement.", "Marc"],
  ];

  const genererNombreEntier = (max) => {
    return Math.floor(Math.random() * max);
  };

  const handleNouveauClick = () => {
    let nombreAleatoire;
    do {
      nombreAleatoire = genererNombreEntier(avisList.length);
    } while (nombreAleatoire === dernier);

    setAvis(avisList[nombreAleatoire][0]);
    setAuteur(avisList[nombreAleatoire][1]);
    dernier = nombreAleatoire;
  };

  let dernier = 0;

  return (
    <div>
      <button id="nouveau" onClick={handleNouveauClick}>Nouveau Avis</button>
      <div id="avi">{avi}</div>
      <div id="auteur">{auteur}</div>
    </div>
  );
};

export default Avis;
