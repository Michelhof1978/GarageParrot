import React, { useState } from "react";
import Avis from "../../components/Avis/Avis";
import TitreH3 from "../UI/Titres/TitreH3";

const AvisClients = () => {
  

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
      <TitreH3> Nos Avis Clients Actualisés Toutes Les Semaines !</TitreH3>
      <div className="row align-items-center justify-content-center h-100">
        <div className="col-md-8 col-lg-6 p-3">
          <div className="bg-light shadow p-5">
            <div className="text-center">{avisActuel[0]}</div>
            <div className="bg-secondary w-25 mx-auto p-1 my-4"></div>
            <div className="text-center" id="auteur">
              {avisActuel[1]}
            </div>
          </div>
          <div
            className="mt-2 text-center p-3 text-white font-weight-bold text-uppercase"
            id="nouveau"
            onClick={handleNouveauAvis}
          ></div>
        </div>
      </div>
    </section>
  );
};

export default AvisClients;
