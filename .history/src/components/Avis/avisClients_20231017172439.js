import React, { useState } from 'react';
import Avis from './avis';

const AvisClients = () => {
  const avis = [
    ["Je suis ravi du service exceptionnel que j'ai reçu au garage. L'équipe a été professionnelle, rapide et compétente pour résoudre les problèmes de ma voiture. Je recommande vivement ce garage à tous ceux qui recherchent des réparations de qualité et un service client de premier ordre.","Carole"],
    ["J'ai eu une expérience vraiment positive avec ce garage. Ils ont pris en charge ma voiture rapidement, m'ont fourni un devis clair, et le travail a été effectué dans les délais prévus. Le personnel était sympathique et informatif. Je suis très satisfait de leur service.", "Bastien"],
    ["Ce garage a fait un excellent travail pour réparer ma voiture. Ils m'ont expliqué en détail ce qui devait être fait et ont répondu à toutes mes questions. J'apprécie leur honnêteté et leur professionnalisme. Mon véhicule fonctionne parfaitement maintenant.", "Pauline"],
    ["Je tiens à remercier le garage pour leur réparation rapide et efficace de ma voiture. Le personnel a été amical et accueillant, et ils m'ont tenu informé tout au long du processus. Je n'hésiterai pas à revenir chez eux pour toutes mes futures réparations." , "Marc"],
    ["" , "Marc"],

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
