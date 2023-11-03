import React, { Component } from "react";
import BannerInfo from "../../components/UI/Banner/BannerInfo";
import BannerPromoEntretien from "../../assets/images/bannerPromoEntretien.webp";
import BannerQuality from "../../assets/images/bannerQuality.webp";
import Etoile from "../../components/Avis/Etoile";
import "../../App.css";

class AvisClients extends Component {
  componentDidMount = () => {
    document.title = "Avis Client";
  };

  constructor(props) {
    super(props);
    this.state = {
      nom: "",
      prenom: "",
      note: 0,
      commentaire: "",
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

  handleSubmit = () => {
    console.log("Nom:", this.state.nom);
    console.log("Prenom:", this.state.prenom);
    console.log("Note:", this.state.note);
    console.log("Commentaire:", this.state.commentaire);
  };

  render() {
    const { note } = this.state;
    const etoiles = [];

    for (let i = 1; i <= 5; i++) {
      etoiles.push(
        <Etoile
          key={i}
          numero={i}
          selected={i <= note}
          onEtoileClick={this.handleNoteChange}
        />
      );
    }

    return (
      <>
        <BannerInfo imageUrl={BannerPromoEntretien} altText="Promotion pneus" />
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-md-8">
              <h2 className="text-center">Laissez un avis</h2>
              <form>
                <div className="form-group mb-3">
                  <label>Nom:</label>
                  <input
                    type="text"
                    className="form-control mb-3"
                    value={this.state.nom}
                    onChange={this.handleNomChange}
                  />
                </div>
                <div className="form-group mb-3">
                  <label>Prénom:</label>
                  <input
                    type="text"
                    className="form-control mb-3"
                    value={this.state.prenom}
                    onChange={this.handlePrenomChange}
                  />
                </div>
                <div className="form-group mb-3">
                  <label>Note:</label>
                  <div className="etoiles-container">{etoiles}</div>
                </div>
                <div className="form-group mb-3 fw-bold">
                  <label>Commentaire:</label>
                  <textarea
                    className="form-control"
                    value={this.state.commentaire}
                    onChange={this.handleCommentaireChange}
                  />
                </div>
                <button
                  type="button"
                  className="btn btn-primary btn-lg btn-block" // Classe Bootstrap pour un bouton
                  onClick={this.handleSubmit}
                >
                  Envoyer
                </button>
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
