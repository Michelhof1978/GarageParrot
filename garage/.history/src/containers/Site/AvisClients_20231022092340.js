import React, { Component } from "react";
import BannerInfo from "../../components/UI/Banner/BannerInfo";
import BannerPromoEntretien from "../../assets/images/bannerPromoEntretien.webp";
import BannerQuality from "../../assets/images/bannerQuality.webp";




class AvisClients extends Component {
       // Nom de la page dans l'onglet
        componentDidMount = () => {
          document.title = "Avis Client";
        };
  

    render() {
        
      return (
        <>
            <BannerInfo imageUrl={BannerPromoEntretien} altText="Promotion pneus" />


            <BannerInfo imageUrl={BannerQuality} altText="Offre satisfaction" />

        </>
      ); 
    }     
}

export default AvisClients;


import React, { Component } from 'react';

class AvisClient extends Component {
  constructor(props) {
    super(props);
    this.state = {
      nom: '',
      note: 0,  // La note pourrait être un nombre d'étoiles de 1 à 5
      commentaire: '',
    };
  }

  handleNomChange = (e) => {
    this.setState({ nom: e.target.value });
  };

  handleNoteChange = (e) => {
    this.setState({ note: parseInt(e.target.value, 10) });
  };

  handleCommentaireChange = (e) => {
    this.setState({ commentaire: e.target.value });
  };

  handleSubmit = () => {
    // Vous pouvez ajouter ici la logique pour envoyer l'avis au serveur ou effectuer d'autres actions
    console.log('Nom:', this.state.nom);
    console.log('Note:', this.state.note);
    console.log('Commentaire:', this.state.commentaire);
  };

  render() {
    return (
      <div>
        <h2>Laissez un avis</h2>
        <form>
          <div>
            <label>Nom:</label>
            <input type="text" value={this.state.nom} onChange={this.handleNomChange} />
          </div>
          <div>
            <label>Note (de 1 à 5 étoiles):</label>
            <input type="number" value={this.state.note} min="1" max="5" onChange={this.handleNoteChange} />
          </div>
          <div>
            <label>Commentaire:</label>
            <textarea value={this.state.commentaire} onChange={this.handleCommentaireChange} />
          </div>
          <button type="button" onClick={this.handleSubmit}>Envoyer</button>
        </form>
      </div>
    );
  }
}

export default AvisClient;
