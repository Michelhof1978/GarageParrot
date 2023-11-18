import React, { useState, useEffect } from "react";
import TitreH3 from "../UI/Titres/TitreH3";
import { Link } from "react-router-dom";
import Stars from "./Rating";
import ConversionNote from "./ConversionNote";
import InfoNoteUtilisateur from "./InfoNoteUtilisateur";
import InfoBilanAvis from "./InfoBilanAvis";
import axios from "axios";

const AvisClientsAccueil = () => {
  const [avis, setAvis] = useState([]); // Utilisez un tableau vide pour stocker les avis récupérés

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
    const intervalId = setInterval(handleNouveauAvis, 5000); // Change d'avis toutes les 5 secondes

    return () => {
      clearInterval(intervalId); // Nettoie l'intervalle lorsque le composant est démonté
    };
  }, []);

  // Effectuer la requête GET pour récupérer les avis depuis l'API
  useEffect(() => {
    axios.get("http://localhost/GarageBack/API/avis.php")
      .then((response) => {
        // Stockez les avis dans l'état local
        setAvis(response.data);
      })
      .catch((error) => {
        console.error("Erreur lors de la récupération des avis :", error);
      });
  }, []); // Le tableau vide [] signifie que cela ne s'exécute qu'une fois

  return (
    <section className="container-fluid avisClients mt-5">
      <TitreH3>Nos Clients Nous Recommendent</TitreH3>
      <div className="text-center">
         <InfoBilanAvis />
        <InfoNoteUtilisateur /> 
      </div>

      <div className="row align-items-center justify-content-center h-100">
        <div className="col-md-8 col-lg-6 p-3">
          <div className="bg-light shadow p-5">
            <div className="text-center lead">{avisActuel ? avisActuel[0] : "Chargement..."}</div>
            <div className="bg-secondary w-25 mx-auto p-1 my-4"></div>
            <div className="text-center" id="auteur">
              {avisActuel ? avisActuel[1] : "Chargement..."}
            </div>
            <div className="text-center">
              <Stars />
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
