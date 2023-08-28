// Envoi le visuel
import { Link } from "react-router-dom";

const VehiculeList = ({ vehicules, pageCourante, changerDePage }) => {
  const vehiculesParPage = 12;
  const indexDeDernierVehicule = pageCourante * vehiculesParPage;
  const indexDePremierVehicule = indexDeDernierVehicule - vehiculesParPage;
  const vehiculesAffiches = vehicules.slice(indexDePremierVehicule, indexDeDernierVehicule);

  const numerosDePage = [];
  for (let i = 1; i <= Math.ceil(vehicules.length / vehiculesParPage); i++) {
    numerosDePage.push(i);
  }

  return (
    <div className="container">
      <div className="row">
        {vehiculesAffiches.map((vehicule) => (
          <div className="col-md-4 mb-3" key={vehicule.idVehicule}>
            <div className="card">
              <img src={vehicule.imagevoiture} className="card-img-top" alt={vehicule.marque} />
              <div className="card-body">
                <h5 className="card-title">{vehicule.marque}</h5>
                <h6 className="card-subtitle mb-2 text-muted">{vehicule.modele}</h6>
                <p className="card-text">Carburant: {vehicule.energie}</p>
                <p className="card-text">Prix: {vehicule.prix} €</p>
              </div>
              <div className="card-footer">
                <Link to={`/vehiculedetail/${vehicule.idVehicule}`} className="btn btn-primary">En savoir plus</Link>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="pagination">
        <div className="pagination-numbers">
          {numerosDePage.map((numeroDePage) => (
            <span
              key={numeroDePage}
              className={`numero-de-page ${pageCourante === numeroDePage ? "actif" : ""}`}
              onClick={() => changerDePage(numeroDePage)}
            >
              {numeroDePage}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default VehiculeList;



// import React, { useState, useEffect } from "react";
// import { useParams } from "react-router-dom";
// import axios from "axios";
// import VehiculeCard from "../../components/Vehicules/vehiculeCard";

// const VehiculeDetail = () => {
//   // Appeler les Hooks ici, à l'intérieur du composant
//   const { id } = useParams();
//   const [vehicule, setVehicule] = useState({}); // à supposer que vous voulez utiliser useState pour stocker le détail du véhicule

//   useEffect(() => {
//       // Supposons que vous voulez obtenir les détails du véhicule en fonction de l'ID à partir de l'API
//       axios.get(`votre_url_api/vehicules/${id}`)
//           .then(response => {
//               setVehicule(response.data);
//           })
//           .catch(error => {
//               console.error("Erreur lors de la récupération des détails du véhicule:", error);
//           });
//   }, [id]); // Exécutez useEffect chaque fois que l'ID change

//   return (
//     <div className="container">
//       <div className="row">
//         {/* Afficher les détails du véhicule */}
//         <div className="col-md-12">
//           <h2>{vehicule.marque} - {vehicule.modele}</h2>
//           <img src={vehicule.imagevoiture} alt={vehicule.marque} />
//           <p>Date 1ère année circulation : {vehicule.datecirculation}</p>
//           <p>Couleur : {vehicule.couleur}</p>
//           <p>Nombre de places : {vehicule.place}</p>
//           <p>Energie : {vehicule.energie}</p>
//           <p>Année : {vehicule.annee}</p>
//           <p>Boîte de vitesse : {vehicule.boitevitesse}</p>
//           <p>Kilométrage : {vehicule.kilometrage}</p>
//           <p>Boîte de vitesse : {vehicule.boitevitesse}</p>
//           <p>Puissance : {vehicule.puissance}</p>
//           <p>Prix : {vehicule.prix} €</p>
//           {/* Ajouter plus de détails si nécessaire */}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default VehiculeDetail;
