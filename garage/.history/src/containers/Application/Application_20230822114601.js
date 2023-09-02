import React, { Component } from 'react';
import TitreH1 from "../../../components/UI/Titres/TitreH1";
import axios from "axios";
import Animal from "./Animal/Animal";

//on va stocker les données dans le state
class Application extends Component {
    state = {
        cars : null
    }
//Ut
    componentDidMount = () => {
        axios.get(`http://localhost/garageback/front/voiturefiche/1`)
            .then(reponse => {
                this.setState({animaux:Object.values(reponse.data)});
            })
    }


    render() {
        return (
            <>
                <TitreH1 bgColor="bg-success">Les animaux du parc</TitreH1>
                <div className="container-fluid">
                    <div className="row no-gutters">
                        {
                            this.state.animaux && 
                            this.state.animaux.map(animal => {
                                return (
                                    <div className="col-12 col-md-6 col-xl-4" key={animal.id}>
                                        <Animal {...animal}/>
                                    </div>
                                )
                            })
                        }
                    </div>
                </div>
            </>
        );
    }
}

