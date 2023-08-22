import React, { useState } from 'react';

const AvisClients = () => {
  const [avisIndex, setAvisIndex] = useState(0);

  const avis = [
    ["Notre séjour chez Isabelle a été super ! L'hôte était très accueillant et la caravane était propre, confortable et bien situé. Nous avons vraiment apprécié notre séjour et nous recommandons vivement cet endroit !", "Carole"],
    ["Notre séjour chez Isabelle a été super ! L'hôte était très accueillant et la caravane était propre, confortable et bien situé. Nous avons vraiment apprécié notre séjour et nous recommandons vivement cet endroit !", "Carhhhhe"],
  ];

  const genererNombreEntier = (max) => {
    return Math.floor(Math.random() * Math.floor(max));
  };

  const changerAvis = () => {
    let nouveauAvisIndex;
    do {
      nouveauAvisIndex = genererNombreEntier(avis.length);
    } while (nouveauAvisIndex === avisIndex);

    setAvisIndex(nouveauAvisIndex);
  };

  return (
    <section className="container-fluid avisClients mt-5">
      <div className="row align-items-center justify-content-center h-100 ">
        <div className="col-md-8 col-lg-6 p-3">
          <div className="bg-light shadow p-5">
            <div className="text-center" id="avi">
              {avis[avisIndex][0]}
            </div>
            <div className="bg-secondary w-25 mx-auto p-1 my-4"></div>
            <div className="text-center" id="auteur">
              {avis[avisIndex][1]}
            </div>
          </div>
          <div
            id="nouveau"
            className="mt-2 text-center p-3 text-white font-weight-bold text-uppercase"
            onClick={changerAvis}
          >
            Avis Clients
          </div>
        </div>
      </div>
    </section>
  );
};

export default AvisClients;
