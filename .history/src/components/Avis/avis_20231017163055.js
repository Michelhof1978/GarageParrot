import React, { useState } from 'react';

const Avis = (props) => {
  const [avi, setAvis] = useState("");
  const [auteur, setAuteur] = useState("");

  const avisList = [
    ["Je suis ravi du service exceptionnel que j'ai reçu au garage. L'équipe a été professionnelle, rapide et compétente pour résoudre les problèmes de ma voiture. Je recommande vivement ce garage à tous ceux qui recherchent des réparations de qualité et un service client de premier ordre", "Carole"],
    ["J'ai eu une expérience vraiment positive avec ce garage. Ils ont pris en charge ma voiture rapidement, m'ont fourni un devis clair, et le travail a été effectué dans les délais prévus. Le personnel était sympathique et informatif. Je suis très satisfait de leur service.", "Bastien"],
    ["Ce garage a fait un excellent travail pour réparer ma voiture. Ils m'ont expliqué en détail ce qui devait être fait et ont répondu à toutes mes questions. J'apprécie leur honnêteté et leur professionnalisme. Mon véhicule fonctionne parfaitement maintenant.", "Pauline"],
    ["J'ai trouvé ce garage grâce aux recommandations d'amis, et je suis heureux de les avoir écoutés. Leur équipe est compétente et attentionnée. Ils ont fait un excellent travail pour résoudre les problèmes de ma voiture à un prix raisonnable. Je suis reconnaissant pour leur excellent service.", "Manu"],
    ["Je tiens à remercier le garage pour leur réparation rapide et efficace de ma voiture. Le personnel a été amical et accueillant, et ils m'ont tenu informé tout au long du processus. Je n'hésiterai pas à revenir chez eux pour toutes mes futures réparations", "Marc"],
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
