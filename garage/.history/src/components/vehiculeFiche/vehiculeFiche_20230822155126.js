import React, { Component } from "react";
import axios from "axios";

im

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
