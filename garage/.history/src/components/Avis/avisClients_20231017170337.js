import React, { useState } from 'react';
import avisconst AvisClients = () => {
  const avis = [
    ["Notre séjour chez Isabelle a été super ! L'hôte était très accueillant et la caravane était propre, confortable et bien situé. Nous avons vraiment apprécié notre séjour et nous recommandons vivement cet endroit !", "Carole"],
    ["Isabelle était très attentionnée et serviable, nous donnant des conseils sur les meilleurs endroits à visiter dans le coin. Nous avons adoré notre séjour ici et nous y retournerons certainement !", "Bastien"],
    ["Nous avons passé un excellent séjour au caravanes de la besbre! Logement confortable, l'hôte était très serviable et sympathique. Nous avons adoré l'emplacement, qui était proche du PAL. Nous recommandons vivement cet endroit.", "Pauline"],
    ["Nous avons passé un excellent séjour au camping. Tout était parfait, de la propreté de la caravane aux équipements fournis. La communication avec l'hôte était également excellente. Nous recommandons vivement cet endroit !", "Manu"],
    ["Nous avons été très impressionnés par la qualité du logement et l'hospitalité de l'hôte. Tout était propre et bien entretenu, et l'hôte était très sympathique et serviable. Nous le recommandons vivement.", "Marc"],
  ];

  const [avisActuel, setAvisActuel] = useState(avis[0]);
  const [dernier, setDernier] = useState(0);

  const genererNombreAleatoire = (max) => {
    let nombreAleatoire;
    do {
      nombreAleatoire = Math.floor(Math.random() * max);
    } while (nombreAleatoire === dernier);
    return nombreAleatoire;
  };

  const handleNouveauAvis = () => {
    const nombreAleatoire = genererNombreAleatoire(avis.length);
    setAvisActuel(avis[nombreAleatoire]);
    setDernier(nombreAleatoire);
  };

  return (
    <section className="container-fluid avisClients mt-5">
      <div className="row align-items-center justify-content-center h-100">
        <div className="col-md-8 col-lg-6 p-3">
          <div className="bg-light shadow p-5">
            <div className="text-center">
              {avisActuel[0]}
            </div>
            <div className="bg-secondary w-25 mx-auto p-1 my-4"></div>
            <div className="text-center" id="auteur">
              {avisActuel[1]}
            </div>
          </div>
          <div className="mt-2 text-center p-3 text-white font-weight-bold text-uppercase" id="nouveau" onClick={handleNouveauAvis}>
            Avis Clients
          </div>
        </div>
      </div>
    </section>
  );
};

export default AvisClients;
