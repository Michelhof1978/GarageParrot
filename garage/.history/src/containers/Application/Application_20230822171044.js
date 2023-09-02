import React, { Component } from "react";
import TitreH1 from "../../../components/UI/Titres/TitreH1";
import axios from "axios";
import VehiculeFiche from "../../components/vehiculeFiche/vehiculeFiche";


import React, { Component } from "react";
import axios from "axios";
import VoitureFiche from "../../components/voitureFiche/VoitureFiche"; // Assurez-vous de corriger le chemin

class VehiculeCard extends Component {
  state = {
    vehicules: [], // Utilisez un tableau vide comme état initial
  };

  componentDidMount() {
    axios
      .get("http://localhost/garageback/front/voiturefiche/all")
      .then((response) => {
        this.setState({ vehicules: response.data });
      })
      .catch((error) => {
        console.error("Error fetching voiture details:", error);
      });
  }

  render() {
    const { vehicules } = this.state;

    return (
      <>
        {vehicules.map((voiture) => (
          <div className="card mb-3" key={voiture.id}>
            <VoitureFiche {...voiture} />
          </div>
        ))}
      </>
    );
  }
}

export default VehiculeCard;
