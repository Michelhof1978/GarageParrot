import React, { Component } from "react";
import TitreH1 from "../../../components/UI/Titres/TitreH1";
import axios from "axios";
import voitu

//on va stocker les données dans le state
class Application extends Component {
  state = {
    cars: null,
  };
  //Utilisation de la méthode componentDidMount pour récupérer les données avec AXIOS depuis le serveur
  componentDidMount = () => {
    axios
      .get(`http://localhost/garageback/front/voiturefiche/1`)
      .then((response) => {
        console.log(response);
      });
  };

  render() {
    return (
      <>
        <TitreH1 bgColor="bg-success">Les Voitures en vente</TitreH1>
        <div className="container-fluid">
          <div className="row no-gutters">
            {this.state.animaux &&
              this.state.animaux.map((animal) => {
                return (
                  <div className="col-12 col-md-6 col-xl-4" key={animal.id}>
                    <Animal {...animal} />
                  </div>
                );
              })}
          </div>
        </div>
      </>
    );
  }
}
