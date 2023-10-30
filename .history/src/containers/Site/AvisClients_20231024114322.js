// AvisClients.js
import React, { Component } from "react";
import BannerInfo from "../../components/UI/Banner/BannerInfo";
import BannerPromoEntretien from "../../assets/images/bannerPromoEntretien.webp";
import BannerQuality from "../../assets/images/bannerQuality.webp";
import EtoileNotation from "../../components/Avis/EtoileNotation";
import TitreH2 from "../../components/UI/Titres/TitreH2";
// import DetailsInfoAvis from "./DetailsInfoAvis";
// import DetailsInfoAvisNoteSur5 from "./DetailsInfoAvisNoteSur5";

const inputStyles = {
  backgroundColor: "ghostwhite",
  border: "4px solid dodgerblue",
};

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
    console.log("Prénom:", this.state.prenom);
    console.log("Note:", this.state.note);
    console.log("Commentaire:", this.state.commentaire);
  };

  render() {
    return (
      <>
        <BannerInfo imageUrl={BannerPromoEntretien} altText="Promotion pneus" />
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-md-8">
              <TitreH2>Laissez Un Avis !</TitreH2>

              <form>
                <div className="form-group mb-3 fw-bold lead">
                  <label className="mb-2">Nom:</label>
                  <input
                    type="text"
                    className="form-control form-control-thick mb-3 fw-bold lead"
                    style={inputStyles}
                    value={this.state.nom}
                    onChange={this.handleNomChange}
                  />
                </div>
                <div className="form-group mb-3 fw-bold lead">
                  <label className="mb-2">Prénom:</label>
                  <input
                    type="text"
                    className="form-control form-control-thick "
                    style={inputStyles}
                    value={this.state.prenom}
                    onChange={this.handlePrenomChange}
                  />
                </div>
                <div className="form-group mb-3 fw-bold lead">
                  <label >Note:</label>
                  <div className="etoiles-container mt-2">
                    <EtoileNotation
                      note={this.state.note}
                      onEtoileClick={this.handleNoteChange}
                    />
                  </div>
                </div>
              

<div className="form-group mb-3 fw-bold lead ">
  <label className="mb-2">Commentaire:</label>
  <textarea
    className="form-control form-control-thick"
    style={inputStyles}
    value={this.state.commentaire}
    onChange={this.handleCommentaireChange}
  />
</div>
<button
  type="button"
  className="btn btn-primary btn-lg btn-block"
  onClick={this.handleSubmit}
>
  Envoyer
</button>
</form>
</div>
</div>
</div>

{/* <div className="text-center">
  <DetailsInfoAvis />
  <DetailsInfoAvisNoteSur5 />
</div> */}

<BannerInfo imageUrl={BannerQuality} altText="Offre satisfaction" />
</>
);
}
}

export default AvisClients;
