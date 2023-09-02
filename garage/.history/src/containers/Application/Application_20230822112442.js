import React, { Component } from 'react';
import TitreH1 from "../components/UI/TitreH1/TitreH1";
import axios from "axios";
import VoitureOccasionFiche from './VoitureOccasionFiche'; 

class VoitureOccasion extends Component {
    state = {
        vehicules: []
    }

    componentDidMount() {
        axios.get("http://localhost/garageback/front/avis")
            .then(response => {
                const vehiculesData = response.data;
                this.setState({ vehicules: vehiculesData });
            })
            .catch(error => {
                console.error("Erreur lors de la récupération des données :", error);
            });
    }

    render() {
        return (
            <>
                <TitreH1 bgColor="bg-success">Voitures d'occasion</TitreH1>
                <div className="container-fluid">
                    <div className="row no-gutters">
                        {this.state.vehicules.map(vehicule => (
                            <VoitureOccasionFiche
                                key={vehicule.idVehicule}
                                marque={vehicule.marque}
                                modele={vehicule.modele}
                                annee={vehicule.annee}
                                // Ajoutez d'autres propriétés ici
                            />
                        ))}
                    </div>
                </div>
            </>
        );
    }
}

export default VoitureOccasion;
