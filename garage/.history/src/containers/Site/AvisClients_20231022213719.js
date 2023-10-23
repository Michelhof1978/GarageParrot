import React, { Component } from "react";
import BannerInfo from "../../components/UI/Banner/BannerInfo";
import BannerPromoEntretien from "../../assets/images/bannerPromoEntretien.webp";
import BannerQuality from "../../assets/images/bannerQuality.webp";
import Etoile from "../../components/Avis/Etoile";

class AvisClients extends Component {
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
    console.log("Nom:", this.state.nom);
    console.log("Nom:", this.state.nom);
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
              <textarea
                value={this.state.commentaire}
                onChange={this.handleCommentaireChange}
              />
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



