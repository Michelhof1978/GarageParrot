import React, { useState } from 'react';

const Navbar = (props) => {
  const [avi, setAvis] = useState("");
  const [auteur, setAuteur] = useState("");

  const avisList = [
    ["Notre séjour chez Isabelle a été super ! L'hôte était très accueillant et la caravane était propre, confortable et bien situé. Nous avons vraiment apprécié notre séjour et nous recommandons vivement cet endroit !", "Carole"],
    ["Isabelle était très attentionnée et serviable, nous donnant des conseils sur les meilleurs endroits à visiter dans le coin. Nous avons adoré notre séjour ici et nous y retournerons certainement !", "Bastien"],
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

export default Navbar;
