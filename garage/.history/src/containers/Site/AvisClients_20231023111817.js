import React, { Component } from "react";
import BannerInfo from "../../components/UI/Banner/BannerInfo";
import BannerPromoEntretien from "../../assets/images/bannerPromoEntretien.webp";
import BannerQuality from "../../assets/images/bannerQuality.webp";
import Etoile from "../../components/Avis/Etoile";

import Etoile from "../../components/Avis/Etoile";

class AvisClients extends Component {
  componentDidMount = () => {
    document.title = "Avis Client";
  };

  constructor(props) {
    super(props);
    this.state = {
      nom: "",
      prenom: "", // Ajout du champ prénom
      note: 0,
      commentaire: "",
    };
  }

  handleNomChange = (e) => {
    this.setState({ nom: e.target.value });
  };

  handlePrenomChange = (e) => { // Ajout de la gestion du champ prénom
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
    console.log("Prenom:", this.state.prenom); // Affichage du prénom
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
      <div className="container text-center mt-5">
        <h2>Laissez un avis</h2>
        <form>
          <div className="form-group">
            <label>Nom:</label>
            <input
              type="text"
              className="form-control"
              value={this.state.nom}
              onChange={this.handleNomChange}
            />
          </div>
          <div className="form-group">
            <label>Prénom:</label>
            <input
              type="text"
              className="form-control"
              value={this.state.prenom}
              onChange={this.handlePrenomChange}
            />
          </div>
          <div className="form-group">
            <label>Note:</label>
            <div className="etoiles-container">{etoiles}</div>
          </div>
          <div className="form-group">
            <label>Commentaire:</label>
            <textarea
              className="form-control"
              value={this.state.commentaire}
              onChange={this.handleCommentaireChange}
            />
          </div>
          <button
            type="button"
            className="btn btn-primary"
            onClick={this.handleSubmit}
          >
            Envoyer
          </button>
        </form>
      </div>
    );
  }
}

export default AvisClients;
