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
