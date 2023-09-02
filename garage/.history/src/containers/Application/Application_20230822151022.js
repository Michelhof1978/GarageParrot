import React, { Component } from "react";
import TitreH1 from "../../../components/UI/Titres/TitreH1";
import axios from "axios";
import CarCard from "../../components/voitureOccasion/vehiculeFiche";

class Application extends Component {
  state = {
    cars: null,
  };

  componentDidMount = () => {
    axios
      .get(`http://localhost/garageback/front/voiturefiche/1`)
      .then((response) => {
        this.setState({ cars: response.data }); // Mettre à jour l'état avec les données récupérées
      });
  };

  render() {
    return (
      <>
        <TitreH1 bgColor="bg-success">Les Voitures en vente</TitreH1>
        <div className="container-fluid">
          <div className="row no-gutters">
            {this.state.cars &&
              this.state.cars.map((vehicule) => {
                // Utiliser vehicule comme paramètre
                return (
                  <div className="col-12 col-md-6 col-xl-4" key={vehicule.id}>
                    <CarCard {...vehicule} />{" "}
                    {/* Utiliser CarCard au lieu de Cardcar */}
                  </div>
                );
              })}
          </div>
        </div>
      </>
    );
  }
}

export default Application;
