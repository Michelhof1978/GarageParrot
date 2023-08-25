import React, { Component } from "react";
import TitreH1 from "../../components/UI/TitreH1/TitreH1";
im


class Voitureinfo extends Component {
  //Nom de la page ds onglet
  componentDidMount = () => {
    document.title = "Voiture info";
  };

  render() {
    return (
      <>
        <div>
        <img
              className="img-fluid"
              src={logoVoiture}
              alt="Logo Garage PARROT"
            />
        <img
              className="img-fluid"
              src={logoVoiture}
              alt="Logo Garage PARROT"
            />
          </div>
        
      </>
    );
  }
}

export default Voitureinfo;
