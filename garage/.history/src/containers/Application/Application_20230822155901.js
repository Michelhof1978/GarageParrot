import React, { Component } from "react";
import TitreH1 from "../../../components/UI/Titres/TitreH1";
import axios from "axios";
import VoitureCard from "../../components/vehiculeFiche/vehiculeFiche";
import axios from "axios";

class VoitureCard extends Component {
    state = {
        animaux : null
    }

    componentDidMount = () => {
        axios.get(`http://localhost/garageback/front/voiturefiche/1`)
            .then(reponse => {
                this.setState({:Object.values(reponse.data)});
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

export default VoitureCard;

// class VoitureCard extends Component {
//   state = {
//     voitureDetails: null,
//   };

//   componentDidMount() {
//     const { voitureId } = this.props;

//     axios
//       .get(`http://localhost/garageback/front/voiturefiche/${voitureId}`)
//       .then((response) => {
//         this.setState({ voitureDetails: response.data });
//       })
//       .catch((error) => {
//         console.error("Error fetching voiture details:", error);
//       });
//   }

//   render() {
//     const { voitureDetails } = this.state;

//     if (!voitureDetails) {
//       return <div>Loading...</div>;
//     }

//     const { marque, modele, energie, prix } = voitureDetails;

//     return (
//       <div className="card">
//         <div className="card-body">
//           <h5 className="card-title">{marque}</h5>
//           <h6 className="card-subtitle mb-2 text-muted">{modele}</h6>
//           <p className="card-text">Carburant: {energie}</p>
//           <p className="card-text">Prix: {prix} €</p>
//         </div>
//       </div>
//     );
//   }
// }

// export default VoitureCard;

