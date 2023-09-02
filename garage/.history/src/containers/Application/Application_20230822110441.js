import React, { Component } from "react";
import TitreH1 from "../../../components/UI/Titres/TitreH1";
import axios from "axios";
import voitu

class Application extends Component {
  state = {
    vehicules: [], // Utilisez un tableau pour stocker plusieurs véhicules
  };

  componentDidMount() {
    // Utilisation d'une requête GET pour récupérer les données des véhicules depuis l'API
    axios
      .get("http://localhost/garageback/front/voiturefiche/1") // Remplacez l'URL par celle de votre API
      .then((response) => {
        const vehiculesData = response.data; // Les données des véhicules provenant de la réponse
        this.setState({ vehicules: vehiculesData }); // Mettez à jour le state avec les données des véhicules
      })
      .catch((error) => {
        console.error("Erreur lors de la récupération des données :", error);
      });
  }

  render() {
    return (
      <>
        <TitreH1 bgColor="bg-success">Fiche voiture</TitreH1>
        <div className="container-fluid">
          <div className="row no-gutters">
            {this.state.vehicules.map((vehicule) => (
              <div key={vehicule.idVehicule} className="col-md-4">
                <div className="card">
                  {/* Affichez les détails du véhicule dans la carte */}
                  <img
                    src={vehicule.imagevoiture}
                    alt={vehicule.marque}
                    className="card-img-top"
                  />
                  <div className="card-body">
                    <h5 className="card-title">
                      {vehicule.marque} - {vehicule.modele}
                    </h5>
                    <p className="card-text">Année: {vehicule.annee}</p>
                    <p className="card-text">
                      Kilométrage: {vehicule.kilometrage} km
                    </p>
                    {/* Ajoutez d'autres propriétés du véhicule à afficher */}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </>
    );
  }
}

export default Application;
