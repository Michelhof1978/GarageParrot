//Composant carte vitrine qui va représenter le véhicule
import React from "react";
import { Link } from "react-router-dom";
import "../../App.css";

const VehiculeCard = ({ vehicule }) => (
  <div className="col-md-2 mb-3"> {/* Utilisez col-md-2 pour que 5 éléments prennent toute la largeur */}
    <div className="card" style={{ width: "100%" }}> {/* Appliquez une largeur de 100% à la carte */}
      <img
        src={vehicule.imagevoiture}
        className="card-img-top"
        alt={vehicule.marque}
      />
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
);

export default VehiculeCard;
Dans le composant VehiculeList.js, modifiez la classe de la div principale pour utiliser row avec une classe personnalisée pour créer une mise en page en colonnes :
jsx
Copy code
import React, { useState, useEffect } from "react";
import axios from "axios";
import VehiculeCard from "./VehiculeCard";
import Pagination from "./Pagination";

const VehiculeList = ({ filtres }) => {
  const [vehicules, setVehicules] = useState([]);
  const vehiculesPerPage = 20; // Nombre de véhicules à afficher par page
  const [currentPage, setCurrentPage] = useState(1); // Pour gérer la pagination
  const [totalPages, setTotalPages] = useState(0);

  useEffect(() => {
    const url = generateURL(filtres);
    axios.get(url)
      .then(response => {
        setVehicules(response.data);
        setTotalPages(Math.ceil(response.data.length / vehiculesPerPage));
      })
      .catch(error => console.error("Erreur de récupération:", error));
  }, [filtres]);

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const indexLastVehicule = currentPage * vehiculesPerPage;
  const indexFirstVehicule = indexLastVehicule - vehiculesPerPage;
  const displayedVehicules = vehicules.slice(indexFirstVehicule, indexLastVehicule);

  return (
    <div className="container">
      <div className="row row-cols-5"> {/* Utilisez row-cols-5 pour créer 5 colonnes */}
        {displayedVehicules.map(vehicule => (
          <VehiculeCard key={vehicule.idVehicule} vehicule={vehicule} />
        ))}
      </div>

      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={handlePageChange}
      />
    </div>
  );
};

export default VehiculeList;
Avec ces modifications, les cartes auront une largeur de 20% chacune (5 éléments par ligne), ce qui leur permettra de prendre toute la largeur de la page. N'oubliez pas d'ajuster les styles CSS en fonction de vos besoins et de vos classes de style personnalisées.







export default VehiculeCard;


// import React, { useState, useEffect } from "react";
// import axios from "axios";
// import  {generateURL} from "../../apiUtils";
// import {link} from "react-router-dom"
// // import VehiculeList from "./VehiculeList";

// const VehiculeCard = () => {
//   const [vehicules, setVehicules] = useState([]);
//   const [pageCourante, setPageCourante] = useState(1);

//   useEffect(() => {
//     const url = generateURL();
//     axios
//       .get(url)
//       })
//       .catch((error) => {
//         console.error("Erreur lors de la récupération des détails des voitures:", error);
//       });
//   }, []);

//   const changerDePage = (numeroDePage) => {
//     setPageCourante(numeroDePage);
//   };

//   return <VehiculeList vehicules={vehicules} pageCourante={pageCourante} changerDePage={changerDePage} />;
// };

// export default VehiculeCard;


// import React, { useState, useEffect } from "react";
// import axios from "axios";
// import { Link } from "react-router-dom";

// const VehiculeCard = ({vehicules}) => {
//   const [vehicules, setVehicules] = useState([]); // hook useState pour créer un état local appelé vehicules, qui sera initialisé en tableau vide.
//   const vehiculesParPage = 12; // Affichage de 12 véhicules par page max
//   const [pageCourante, setPageCourante] = useState(1);

//   useEffect(() => {
//     axios
//       .get("http://localhost/garageback/front/voiturefiche/all") // all = pour récupérer toutes les données de la table, copie de l'url lors des tests effectués avec Postman en local avec de fausses données.
//       .then((response) => {
//         setVehicules(response.data);
//       })
//       .catch((error) => {
//         console.error("Erreur lors de la récupération des détails des voitures :", error);
//       });
//   }, []);

//   const indexDeDernierVehicule = pageCourante * vehiculesParPage;
//   const indexDePremierVehicule = indexDeDernierVehicule - vehiculesParPage;
//   const vehiculesAffiches = vehicules.slice(indexDePremierVehicule, indexDeDernierVehicule);

//   const changerDePage = (numeroDePage) => {
//     setPageCourante(numeroDePage);
//   };

//   const numerosDePage = [];
//   for (let i = 1; i <= Math.ceil(vehicules.length / vehiculesParPage); i++) {
//     numerosDePage.push(i);
//   }

//   return (
//     <div className="container">
//       <div className="row">
//         {vehiculesAffiches.map((vehicule) => (//méthode map pour parcourir chaque objet de la liste vehicules et générer une carte Bootstrap pour chaque véhicule.
//           <div className="col-md-4 mb-3" key={vehicule.idVehicule}>
//             <div className="card">
//               <img
//                 src={vehicule.imagevoiture}
//                 className="card-img-top"
//                 alt={vehicule.marque}
//               />
//               <div className="card-body">
//                 <h5 className="card-title">{vehicule.marque}</h5>
//                 <h6 className="card-subtitle mb-2 text-muted">
//                   {vehicule.modele}
//                 </h6>
//                 <p className="card-text">Carburant: {vehicule.energie}</p>
//                 <p className="card-text">Prix: {vehicule.prix} €</p>
//               </div>
//               <div className="card-footer">
//     <Link to={`/vehiculedetail/${vehicule.idVehicule}`} className="btn btn-primary">En savoir plus</Link>
//   </div>
//             </div>
//           </div>
//         ))}
//       </div>
//       <div className="pagination">
//         <div className="pagination-numbers">
//           {numerosDePage.map((numeroDePage) => (
//             <span
//               key={numeroDePage}
//               className={`numero-de-page ${pageCourante === numeroDePage ? "actif" : ""}`}
//               onClick={() => changerDePage(numeroDePage)}
//             >
//               {numeroDePage}
//             </span>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default VehiculeCard;
