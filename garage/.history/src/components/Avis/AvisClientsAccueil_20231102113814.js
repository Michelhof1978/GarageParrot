import React, { useState, useEffect } from "react";
import TitreH3 from "../UI/Titres/TitreH3";
import { Link } from "react-router-dom";
import EtoileNotation from "../../components/Avis/EtoileNotation";
import DetailsInfoAvisNoteSur5 from "../../components/Avis/DetailsInfoAvisNoteSur5";
import DetailsInfoAvis from "../../containers/Site/DetailsInfoAvis";

const AvisClientsAccueil = () => {
  const [avis, setAvis] = useState([]);
  const [avisActuel, setAvisActuel] = useState(null);
  const [dernier, setDernier] = useState(-1);

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
    // Effectuer une requête pour récupérer les avis depuis l'API
    fetch("http://localhost/GarageBack/API/avis.php")
      .then((response) => response.json())
      .then((data) => setAvis(data))
      .catch((error) => console.error(error));

    // Change d'avis toutes les 5 secondes
    const intervalId = setInterval(handleNouveauAvis, 5000);

    return () => {
      clearInterval(intervalId); // Nettoie l'intervalle lorsque le composant est démonté
    };
  }, []);

  return (
    <section className="container-fluid avisClients mt-5">
      <TitreH3>Nos Clients Nous Recommandent</TitreH3>
      <div className="text-center">
        <DetailsInfoAvis />
        <DetailsInfoAvisNoteSur5 />
      </div>

      <div className="row align-items-center justify-content-center h-100">
        <div className="col-md-8 col-lg-6 p-3">
          <div className="bg-light shadow p-5">
            {avisActuel && (
              <div>
                <div className="text-center lead">{avisActuel.commentaire}</div>
                <div className="bg-secondary w-25 mx-auto p-1 my-4"></div>
                <div className="text-center" id="auteur">
                  {avisActuel.nom} {avisActuel.prenom}
                </div>
                <div className="text-center">
                  <EtoileNotation note={avisActuel.note} />
                </div>
                <div className="text-center lead mt-3">
                  <Link to={`/avisclients`} className="btn btn-primary">
                    Laisser Un Avis !
                  </Link>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AvisClientsAccueil;
