import React, { Component } from 'react';
import TitreH1 from "../../../components/UI/Titres/TitreH1";
import axios from "axios";
import voitureInfo from '../voitureCard';

class Application extends Component {
    state = {
        voitureCard : null
    }

    componentDidMount = () => {
        axios.get(`http://localhost/garageback/front/voiturefiche/1`)
            .then(reponse => {
                this.setState({voitureCard:Object.values(reponse.data)});//On va prendre la valeur des différent object pour les mettre directement comme un élément d'un tableau
            })
    }


    render() {
        return (
            <>
                <TitreH1 bgColor="bg-success">Fiche voiture</TitreH1>
                <div className="container-fluid">
                    <div className="row no-gutters">
                        {
                            this.state.vehicule && 
                            this.state.vehicule.map(animal => {
                                return <h1>{vehicule.id - {vehicule.marque}</h1>
                                    
                                }
                            })
                        }
                    </div>
                </div>
            </>
        );
    }
}

export default Application;