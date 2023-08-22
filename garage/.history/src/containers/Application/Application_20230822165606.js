import React, { Component } from "react";
import TitreH1 from "../../../components/UI/Titres/TitreH1";
import axios from "axios";
import Vehicule from "../../components/vehiculeFiche/vehiculeFiche";



class VehiculeCard extends Component {
  state = {
    voitureDetails: null,
  };

  componentDidMount() {
    const { voitureId } = this.props;

    axios
      .get(`http://localhost/garageback/front/voiturefiche/${voitureId}`)
      .then((response) => {
        this.setState({ voitureDetails: response.data });
      })
      .catch((error) => {
        console.error("Error fetching voiture details:", error);
      });
  }

  render() {
    const { voitureDetails } = this.state;

    if (!voitureDetails) {
      return <div>Loading...</div>;
    }

    const { marque, modele, energie, prix, image } = voitureDetails;

    return (
      <div className="card">
        <img src={image} className="card-img-top" alt={marque} />
        <div className="card-body">
          <h5 className="card-title">{marque}</h5>
          <h6 className="card-subtitle mb-2 text-muted">{modele}</h6>
          <p className="card-text">Carburant: {energie}</p>
          <p className="card-text">Prix: {prix} €</p>
        </div>
      </div>
    );
  }
}

export default VehiculeCard;
