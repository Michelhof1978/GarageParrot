import React, { useState, useEffect } from "react";
import TitreH3 from "../UI/Titres/TitreH3";
import { Link } from "react-router-dom";
import EtoileNotation from "./EtoileNotation";

import DetailsInfoAvisNoteSur5 from "../../components/Avis/DetailsInfoAvisNoteSur5";
import DetailsInfoAvis from "../../components/Avis/DetailsInfoAvis";


const AvisClientsAccueil = () => {
  const avis = [
    [
      "Je suis ravi du service exceptionnel que j'ai reçu au garage. L'équipe a été professionnelle, rapide et compétente pour résoudre les problèmes de ma voiture. Je recommande vivement ce garage à tous ceux qui recherchent des réparations de qualité et un service client de premier ordre.",
      "Carole",
    ],
    [
      "J'ai eu une expérience vraiment positive avec ce garage. Ils ont pris en charge ma voiture rapidement, m'ont fourni un devis clair, et le travail a été effectué dans les délais prévus. Le personnel était sympathique et informatif. Je suis très satisfait de leur service.",
      "Bastien",
    ],
    [
      "Ce garage a fait un excellent travail pour réparer ma voiture. Ils m'ont expliqué en détail ce qui devait être fait et ont répondu à toutes mes questions. J'apprécie leur honnêteté et leur professionnalisme. Mon véhicule fonctionne parfaitement maintenant.",
      "Pauline",
    ],
    [
      "Je tiens à remercier le garage pour leur réparation rapide et efficace de ma voiture. Le personnel a été amical et accueillant, et ils m'ont tenu informé tout au long du processus. Je n'hésiterai pas à revenir chez eux pour toutes mes futures réparations.",
      "Marc",
    ],
    [
      "Ce garage a dépassé mes attentes. Leur équipe a réparé ma voiture rapidement, et le travail était de grande qualité. En plus de cela, le service client était exceptionnel. Je suis extrêmement satisfait et je les recommande à tous mes amis et ma famille. ",
      "Germaine",
    ],
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

  useEffect(() => {
    const intervalId = setInterval(handleNouveauAvis, 5000); // Change d'avis toutes les 5 secondes

    return () => {
      clearInterval(intervalId); // Nettoie l'intervalle lorsque le composant est démonté
    };
  }, []);

  return (
    <section className="container-fluid avisClients mt-5">
      <TitreH3>Nos Clients Nous Recommendent</TitreH3>
      <div className="text-center">
        <DetailsInfoAvis />
        <DetailsInfoAvisNoteSur5 />
      </div>

      <div className="row align-items-center justify-content-center h-100">
        <div className="col-md-8 col-lg-6 p-3">
          <div className="bg-light shadow p-5">
            <div className="text-center lead">{avisActuel[0]}</div>
            <div className="bg-secondary w-25 mx-auto p-1 my-4"></div>
            <div className="text-center" id="auteur">
              {avisActuel[1]}
            </div>
            <div className="text-center">
              <EtoileNotation />
            </div>
            <div className=" text-center lead mt-3">
              <Link to={`/avisclients`} className="btn btn-primary">
                Laisser Un Avis !
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AvisClientsAccueil;


import React, { useState, useEffect } from "react";
import TitreH3 from "../UI/Titres/TitreH3";
import { Link } from "react-router-dom";
import EtoileNotation from "./EtoileNotation";

const AvisClientsAccueil = () => {
  const [avis, setAvis] = useState([]);
  const [avisActuel, setAvisActuel] = useState(null);
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

  useEffect(() => {
    // Effectuez une requête vers votre backend pour récupérer les avis validés
    fetch("/votre/point/terminaison/avis-valides")
      .then((response) => response.json())
      .then((data) => {
        setAvis(data); // Mettez à jour l'état avec les avis validés
        if (data.length > 0) {
          const nombreAleatoire = genererNombreAleatoire(data.length);
          setAvisActuel(data[nombreAleatoire]);
          setDernier(nombreAleatoire);
        }
      })
      .catch((error) => {
        console.error("Erreur lors de la récupération des avis validés", error);
      });
  }, []);

  return (
    <section className="container-fluid avisClients mt-5">
      <TitreH3>Nos Clients Nous Recommendent</TitreH3>
      <div className="text-center">
        {/* Composants pour afficher les informations sur les avis */}
      </div>

      <div className="row align-items-center justify-content-center h-100">
        <div className="col-md-8 col-lg-6 p-3">
          <div className="bg-light shadow p-5">
            {avisActuel ? (
              <>
                <div className="text-center lead">{avisActuel.commentaire}</div>
                <div className="bg-secondary w-25 mx-auto p-1 my-4"></div>
                <div className="text-center" id="auteur">
                  {avisActuel.auteur}
                </div>
                <div className="text-center lead mt-3">
                  <Link to={`/avisclients`} className="btn btn-primary">
                    Laisser Un Avis !
                  </Link>
                </div>
              </>
            ) : (
              <p>Aucun avis validé disponible pour le moment.</p>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AvisClientsAccueil;

