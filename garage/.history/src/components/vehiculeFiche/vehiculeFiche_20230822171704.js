import React, { Component } from "react";
import axios from "axios";


import React, { Component } from "react";
import axios from "axios";

class VehiculeCard extends Component {
  state = {
    vehicules: [],
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
      <div className="container">
        <div className="row">
          {vehicules.map((voiture) => (
            <div className="col-md-4 mb-3" key={voiture.id}>
              <div className="card">
                <img
                  src={voiture.image} // Assurez-vous d'ajouter le champ image dans vos données
                  className="card-img-top"
                  alt={voiture.marque}
                />
                <div className="card-body">
                  <h5 className="card-title">{voiture.marque}</h5>
                  <h6 className="card-subtitle mb-2 text-muted">
                    {voiture.modele}
                  </h6>
                  <p className="card-text">Carburant: {voiture.energie}</p>
                  <p className="card-text">Prix: {voiture.prix} €</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }
}

export default VehiculeCard;
