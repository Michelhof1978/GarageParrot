import React, { Component } from "react";
import BannerInfo from "../../components/UI/Banner/BannerInfo";
import BannerPromoEntretien from "../../assets/images/bannerPromoEntretien.webp";
import BannerQuality from "../../assets/images/bannerQuality.webp";
import Etoile

class AvisClients extends Component {
  // Nom de la page dans l'onglet
  componentDidMount = () => {
    document.title = "Avis Client";
  };

  constructor(props) {
    super(props);
    this.state = {
      nom: "",
      note: 0,
      commentaire: "",
    };
  }

  handleNomChange = (e) => {
    this.setState({ nom: e.target.value });
  };

  handleNoteChange = (note) => {
    this.setState({ note });
  };

  handleCommentaireChange = (e) => {
    this.setState({ commentaire: e.target.value });
  };

  handleSubmit = () => {
    // Vous pouvez ajouter ici la logique pour envoyer l'avis au serveur ou effectuer d'autres actions
    console.log("Nom:", this.state.nom);
    console.log("Note:", this.state.note);
    console.log("Commentaire:", this.state.commentaire);
  };

  render() {
    const { note } = this.state;

    // Créez un tableau de 5 étoiles
    const etoiles = [1, 2, 3, 4, 5].map((etoile) => (
      <Etoile
        key={etoile}
        selected={etoile <= note}
        onSelect={() => this.handleNoteChange(etoile)}
      />
    ));

    return (
      <>
        <BannerInfo imageUrl={BannerPromoEntretien} altText="Promotion pneus" />
        <div>
          <h2>Laissez un avis</h2>
          <form>
            <div>
              <label>Nom:</label>
              <input type="text" value={this.state.nom} onChange={this.handleNomChange} />
            </div>
            <div>
              <label>Note:</label>
              <div className="etoiles-container">{etoiles}</div>
            </div>
            <div>
              <label>Commentaire:</label>
              <textarea value={this.state.commentaire} onChange={this.handleCommentaireChange} />
            </div>
            <button type="button" onClick={this.handleSubmit}>
              Envoyer
            </button>
          </form>
        </div>
        <BannerInfo imageUrl={BannerQuality} altText="Offre satisfaction" />
      </>
    );
  }
}

export default AvisClients;
