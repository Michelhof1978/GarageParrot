import React, { useState } from "react";
import axios from "axios";
import BannerInfo from "../../components/UI/Banner/BannerInfo";
import BannerPromoEntretien from "../../assets/images/bannerPromoEntretien.webp";
import BannerQuality from "../../assets/images/bannerQuality.webp";
import TitreH2 from "../../components/UI/Titres/TitreH2";
import DetailsInfoAvisNoteSur5 from "../../components/Avis/InfoNoteUtilisateur";
import DetailsInfoAvis from "./DetailsInfoAvis";
import Textes from "../../components/UI/Textes/Textes";
import Stars from "../../components/Avis/Rating";


document.title = "Rédiger un av";

const stylesInput = {
  backgroundColor: "ghostwhite",
  border: "4px solid dodgerblue",
};

const AvisClients = () => {
  // Utilisation de useState pour gérer l'état du composant
  const [nom, setNom] = useState("");
  const [prenom, setPrenom] = useState("");
  const [note, setNote] = useState(0);
  const [commentaire, setCommentaire] = useState("");
  const [avisEnvoye, setAvisEnvoye] = useState(false);

  const handleNomChange = (e) => {
    setNom(e.target.value);
  };

  const handlePrenomChange = (e) => {
    setPrenom(e.target.value);
  };

  const handleNoteChange = (note) => {
    setNote(note);
  };

  const handleCommentaireChange = (e) => {
    setCommentaire(e.target.value);
  };

  const enregistrerAvis = (e) => {
    e.preventDefault();
    const avisData = {
      nom,
      prenom,
      note,
      commentaire,
    };

    axios
      .post("http://localhost/GarageBack/API/avis.php", avisData, {
        headers: {
          "Content-Type": "application/json",
        },
      })
      .then((response) => {
        console.log("Avis enregistré avec succès !", response.data);
        setAvisEnvoye(true);
      })
      .catch((error) => {
        console.error("Une erreur s'est produite lors de l'enregistrement de l'avis :", error);
      });
  };

  return (
    <>
      <BannerInfo imageUrl={BannerPromoEntretien} altText="Promotion pneus" />

      <div className="container">
        <div className="row justify-content-center">
          <div className="col-md-8">
            <TitreH2>Laissez un Avis !</TitreH2>

            <Textes>
              Chez Garage Parrot à Toulouse, l'excellence est notre norme.
              Notre équipe de professionnels qualifiés s'engage à offrir des
              services automobiles de la plus haute qualité. Notre passion pour
              l'automobile, notre expertise technique et notre souci du détail
              font de nous le partenaire de confiance pour prendre soin de votre
              véhicule.
            </Textes>

            <div className="text-center m-5">
              <DetailsInfoAvis />
              <DetailsInfoAvisNoteSur5 />
            </div>
            <form>
              <div className="form-group mb-3 fw-bold lead">
                <label className="mb-2">Nom :</label>
                <input
                  type="text"
                  className="form-control  mb-3 fw-bold lead"
                  style={stylesInput}
                  value={nom}
                  onChange={handleNomChange}
                />
              </div>
              <div className="form-group mb-3 fw-bold lead">
                <label className="mb-2">Prénom :</label>
                <input
                  type="text"
                  className="form-control  "
                  style={stylesInput}
                  value={prenom}
                  onChange={handlePrenomChange}
                />
              </div>
              <div className="form-group mb-3 fw-bold lead">
                <label>Note :</label>
                <div className="etoiles-container">
                  <Stars note={note} onEtoileClick={handleNoteChange} />
                </div>
              </div>

              <div className="form-group mb-3 fw-bold lead">
                <label className="mb-2">Commentaire :</label>
                <textarea
                  className="form-control form-control-thick"
                  style={stylesInput}
                  value={commentaire}
                  onChange={handleCommentaireChange}
                />
              </div>
              <button
                type="submit"
                className="btn btn-primary btn-lg btn-block"
                onClick={enregistrerAvis}
              >
                Envoyer
              </button>
              {avisEnvoye && (
                <div className="alert alert-success">
                  Votre avis a été enregistré avec succès !
                </div>
              )}
            </form>
          </div>
        </div>
      </div>
      <BannerInfo imageUrl={BannerQuality} altText="Offre satisfaction" />
    </>
  );
};

export default AvisClients;
