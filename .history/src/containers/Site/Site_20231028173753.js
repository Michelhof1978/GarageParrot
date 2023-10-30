import React, { Component } from 'react';
import Navbar from '../../components/UI/Navbar/Navbar';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Link } from 'react-router-dom';
import Footer from '../../components/Footer/Footer';
import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import "../../App.css";
import TitreH2 from "../UI/Titres/TitreH2";
import { Pagination } from "react-bootstrap";
import Card from "./Card";

const VehiculesCard = () => {
  const [vehicules, setVehicules] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const cardsPerPage = 6;

  useEffect(() => {
    axios
      .get("http://localhost/garageback/front/voiturefiche/all")
      .then((response) => {
        const jsonData = response.data;
        const sortedVehicules = [...jsonData];
        const sortByCreatedAt = (a, b) => {
          const dateA = new Date(a.created_at).getTime();
          const dateB = new Date(b.created_at).getTime();
          return dateA - dateB;
        };
        sortedVehicules.sort(sortByCreatedAt);
        setVehicules(sortedVehicules);
      })
      .catch((error) => {
        console.error("Erreur lors de la récupération des véhicules :", error);
      });

    return () => {
      // Code de nettoyage
    };
  }, []);

  const indexOfLastCard = currentPage * cardsPerPage;
  const indexOfFirstCard = indexOfLastCard - cardsPerPage;
  const currentCards = vehicules.slice(indexOfFirstCard, indexOfLastCard);

  const paginate = (pageNumber) => {
    setCurrentPage(pageNumber);
  };
console.log(currentCards);
  return (
    <div>
      <div className="row">
        {currentCards.map((vehicule) => (
          <div
            key={vehicule.idVehicule}
            className="col-lg-4 col-md-4 col-sm-6 col-6 mt-3" 
          >
            <Card
              image={vehicule.imageVoiture}
              marque={vehicule.marque}
              nom={vehicule.nom}
              modele={vehicule.modele}
              energie={vehicule.energie}
              prix={vehicule.prix}
              id={vehicule.idVehicule}
            />
          </div>
        ))}
      </div>
      <div className="pagination-container">
        <Pagination>
          {Array.from(
            { length: Math.ceil(vehicules.length / cardsPerPage) },
            (_, index) => (
              <Pagination.Item
                key={index}
                active={index + 1 === currentPage}
                onClick={() => paginate(index + 1)}
              >
                {index + 1}
              </Pagination.Item>
            )
          )}
        </Pagination>
      </div>
    </div>
  );
};

export default VehiculesCard;




// import React, { useState, useEffect } from "react";
// import axios from "axios";
// import { Link } from "react-router-dom";
// import "../../App.css";
// import TitreH1 from "../UI/Titres/TitreH1";
// import { Pagination } from "react-bootstrap";


// const VehiculesCard = () => {
//   const [vehicules, setVehicules] = useState([]);
//   const [currentPage, setCurrentPage] = useState(1);
//   const cardsPerPage = 6;

//   useEffect(() => {
//     axios
//       .get("http://localhost/garageback/front/voiturefiche/all")
//       .then((response) => {
//         const jsonData = response.data;
//         const sortedVehicules = [...jsonData];
//         const sortByCreatedAt = (a, b) => {
//           const dateA = new Date(a.created_at).getTime();
//           const dateB = new Date(b.created_at).getTime();
//           return dateA - dateB;
//         };
//         sortedVehicules.sort(sortByCreatedAt);
//         setVehicules(sortedVehicules);
//       })
//       .catch((error) => {
//         console.error("Erreur lors de la récupération des véhicules :", error);
//       });

//     return () => {
//       // Code de nettoyage
//     };
//   }, []);

//   const indexOfLastCard = currentPage * cardsPerPage;
//   const indexOfFirstCard = indexOfLastCard - cardsPerPage;
//   const currentCards = vehicules.slice(indexOfFirstCard, indexOfLastCard);

//   const paginate = (pageNumber) => {
//     setCurrentPage(pageNumber);
//   };

//   return (
//     <div>
//       <div className="row">
//         {currentCards.map((vehicule) => (
//           <div
//             key={vehicule.idVehicule}
//             className="col-lg-4 col-md-6 col-sm-12 col-6"
//           >
//             <div className="card mt-4 ms-2 me-2">
//               <img
//                 src={`http://localhost/GarageBack/public/images/${vehicule.imageVoiture}`}
//                 alt={vehicule.marque}
//                 className="card-img-top"
//               />

//               <div className="card-body ">
//                 <h5 className="card-title">{vehicule.marque}</h5>
//                 <p className="card-text">Modèle: {vehicule.modele} </p>
//                 <p className="card-text">Energie: {vehicule.energie} </p>
//                 <p className="card-text">Prix: {vehicule.prix} €</p>
//               </div>
//               <div className="card-footer">
//                 <Link
//                   to={`/vehiculedetail/${vehicule.idVehicule}`}
//                   className="btn btn-primary"
//                 >
//                   En savoir plus
//                 </Link>
//               </div>
//             </div>
//           </div>
//         ))}
//       </div>

//       <div className="pagination-container">
//         <Pagination>
//           {Array.from(
//             { length: Math.ceil(vehicules.length / cardsPerPage) },
//             (_, index) => (
//               <Pagination.Item
//                 key={index}
//                 active={index + 1 === currentPage}
//                 onClick={() => paginate(index + 1)}
//               >
//                 {index + 1}
//               </Pagination.Item>
//             )
//           )}
//         </Pagination>
//       </div>
//     </div>
//   );
// };

// export default VehiculesCard;
import VehiculesFilters from '../../containers/Site/VehiculesFilters';
import Contact from '../../containers/Site/Contact';
import Reparation from '../../containers/Site/Reparation';
import AvisClients from '../../containers/Site/AvisClients';
import Accueil from '../../containers/Site/Accueil'




class Site extends Component {
  render() {
    return (
          <>
            <div className='site'>
        <Navbar />
      
        <Routes>
        <Route path="/" element={<Accueil />} />
            <Route path="/pneumatique" element={<h1>Pneumatique</h1>} />
            <Route path="/freinage" element={<h1>Freinage</h1>} />
            <Route path="/mecanique" element={<h1>Mecanique </h1>} />
            <Route path="/entretien" element={<h1>Entretien </h1>} />
            <Route path="/parebrise" element={<h1>PareBrise</h1>} />
            <Route path="/vidange" element={<h1>Vidange</h1>} />
            <Route path="/voitureoccasion" element={<VehiculesFilters />} />
            <Route path="/vehiculefiche/:id" element={<VehiculeFiche />} />
            <Route path="/contact" element={<Contact/>} />
            <Route path="/reparation" element={<Reparation/>} />
            <Route path="/avisclients/" element={<AvisClients/>} />

        </Routes>
        </div>
       

        <Footer />
        </>
    );
  }
}

export default Site;






  