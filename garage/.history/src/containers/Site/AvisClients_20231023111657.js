import React, { Component } from "react";
import BannerInfo from "../../components/UI/Banner/BannerInfo";
import BannerPromoEntretien from "../../assets/images/bannerPromoEntretien.webp";
import BannerQuality from "../../assets/images/bannerQuality.webp";
import Etoile from "../../components/Avis/Etoile";
import React, { Component } from "react";
import Etoile from "../../components/Avis/Etoile";

class AvisClients extends Component {
  // ... (votre code existant)

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
        <h2 className="mb-4">Laissez un avis</h2>
        <form>
          <div className="form-group">
            <label htmlFor="nom">Nom:</label>
            <input
              type="text"
              className="form-control"
              id="nom"
              value={this.state.nom}
              onChange={this.handleNomChange}
            />
          </div>
          <div className="form-group">
            <label htmlFor="prenom">Prenom:</label>
            <input
              type="text"
              className="form-control"
              id="prenom"
              value={this.state.nom}
              onChange={this.handleNomChange}
            />
          </div>
          <div className="form-group">
            <label>Note:</label>
            <div className="etoiles-container">{etoiles}</div>
          </div>
          <div className="form-group">
            <label htmlFor="commentaire">Commentaire:</label>
            <textarea
              className="form-control"
              id="commentaire"
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
