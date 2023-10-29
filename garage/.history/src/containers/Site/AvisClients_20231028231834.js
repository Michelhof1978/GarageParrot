import React, { Component } from "react";
import axios from 'axios';
import BannerInfo from "../../components/UI/Banner/BannerInfo";
import BannerPromoEntretien from "../../assets/images/bannerPromoEntretien.webp";
import BannerQuality from "../../assets/images/bannerQuality.webp";
import EtoileNotation from "../../components/Avis/EtoileNotation";
import TitreH2 from "../../components/UI/Titres/TitreH2";
import DetailsInfoAvisNoteSur5 from "../../components/Avis/DetailsInfoAvisNoteSur5";
import DetailsInfoAvis from "./DetailsInfoAvis";
import Textes from "../../components/UI/Textes/Textes";

const stylesInput = {
  backgroundColor: "ghostwhite",
  border: "4px solid dodgerblue",
};

class AvisClients extends Component {
  componentDidMount() {
    document.title = "Avis Client";
  }

  constructor(props) {
    super(props);
    this.state = {
      nom: "",
      prenom: "",
      note: 0,
      commentaire: "",
      avisEnvoye: false, // État initial, pas de message de confirmation
    };
  }

  handleNomChange = (e) => {
    this.setState({ nom: e.target.value });
  };

  handlePrenomChange = (e) => {
    this.setState({ prenom: e.target.value });
  };

  handleNoteChange = (note) => {
    this.setState({ note });
  };

  handleCommentaireChange = (e) => {
    this.setState({ commentaire: e.target.value });
  };

  enregistrerAvis = (e) => {
    e.preventDefault(); // Empêche la soumission normale du formulaire
    const { nom, prenom, note, commentaire } = this.state;

    // Créez un objet contenant les données de l'avis
    const avisData = {
      nom,
      prenom,
      note,
      commentaire,
    };

    // Effectuez une requête POST vers votre API PHP
    axios.post('http://localhost/GarageBack/API/avis.php', avisData)
      .then((response) => {
        // Gérez la réponse de votre API (par exemple, affichez un message de succès)
        console.log('Avis enregistré avec succès !', response.data);
        // Mettez à jour l'état pour afficher un message de confirmation
        this.setState({ avisEnvoye: true });
      })
      .catch((error) => {
        // Gérez les erreurs en cas d'échec de la requête
        console.error('Une erreur s\'est produite lors de l\'enregistrement de l\'avis :', error);
      });
  };

  render() {
    return (
      <>
        <BannerInfo imageUrl={BannerPromoEntretien} altText="Promotion pneus" />
        
        
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-md-8">
              <TitreH2>Laissez un Avis !</TitreH2>

              <Textes>
              Les réparateurs s'occupent de la réparation et de l'entretien de
              votre voiture, peu importe la marque ou le modèle de celle-ci.
              Profitez d'une prestation de qualité effectuée par des véritables
              experts auto. Contactez-nous dès maintenant pour un devis en ligne
              pour la réparation de votre voiture et obtenez un RDV immédiat !
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
                    className="form-control form-control-thick mb-3 fw-bold lead"
                    style={stylesInput}
                    value={this.state.nom}
                    onChange={this.handleNomChange}
                  />
                </div>
                <div className="form-group mb-3 fw-bold lead">
                  <label className="mb-2">Prénom :</label>
                  <input
                    type="text"
                    className="form-control form-control-thick "
                    style={stylesInput}
                    value={this.state.prenom}
                    onChange={this.handlePrenomChange}
                  />
                </div>
                <div className="form-group mb-3 fw-bold lead">
                  <label>Note :</label>
                  <div className="etoiles-container">
                    <EtoileNotation
                      note={this.state.note}
                      onEtoileClick={this.handleNoteChange}
                    />
                  </div>
                </div>

                <div className="form-group mb-3 fw-bold lead">
                  <label className="mb-2">Commentaire :</label>
                  <textarea
                    className="form-control form-control-thick"
                    style={stylesInput}
                    value={this.state.commentaire}
                    onChange={this.handleCommentaireChange}
                  />
                </div>
                <button
                  type="submit"
                  className="btn btn-primary btn-lg btn-block"
                  onClick={this.enregistrerAvis}
                >
                  Envoyer
                </button>
                {this.state.avisEnvoye && (
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
  }
}

export default AvisClients;
