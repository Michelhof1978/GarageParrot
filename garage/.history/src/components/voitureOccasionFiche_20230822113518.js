import React, { Component } from 'react';
import TitreH1 from "../components/UI/TitreH1/TitreH1";
import axios from "axios";
import CarCard from './'; 

class VoitureOccasion extends Component {
    state = {
        vehicules: []
    }

    componentDidMount() {
        axios.get("http://localhost/garageback/front/voiturefiche/1")
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
                <div className="container">
                    <div className="row">
                        {this.state.vehicules.map(vehicule => (
                            <div key={vehicule.idVehicule} className="col-md-4">
                                <CarCard vehicule={vehicule} />
                            </div>
                        ))}
                    </div>
                </div>
            </>
        );
    }
}

export default VoitureOccasion;
