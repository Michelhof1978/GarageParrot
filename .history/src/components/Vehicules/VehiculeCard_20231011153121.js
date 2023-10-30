import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import "../../App.css";
import TitreH1 from "../UI/TitreH1/TitreH1";
// import Pagination from "./Pagination"; 

const VehiculeCard = () => {
  const [vehicules, setVehicules] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const cardsPerPage = 8;

  useEffect(() => {
    axios
      .get("http://localhost/garageback/front/voiturefiche/all")
      .then((response) => {
        const jsonData = response.data;
        const sortedVehicules = [...jsonData]; // Copie les données pour ne pas modifier l'original
  
        // Fonction de tri par la date de création (champ created_at)
        const sortByCreatedAt = (a, b) => {
          const dateA = new Date(a.created_at).getTime();
          const dateB = new Date(b.created_at).getTime();
          return dateA - dateB;
        };
  
        // Triez les véhicules par date de création
        sortedVehicules.sort(sortByCreatedAt);
        setVehicules(sortedVehicules); // Mettez à jour le tableau des véhicules triés
      })
      .catch((error) => {
        console.error("Erreur lors de la récupération des véhicules :", error);
      });
  
    // Le return est placé ici pour nettoyer l'effet lorsque le composant est démonté
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

  return (
    <div className="vehicule-grid">
      {currentCards.map((vehicule) => (
  <div key={vehicule.idVehicule} className="card">
    <div className="card-body">
    <img
  src={`http://localhost/GarageBack/public/images/${vehicule.imageVoiture}`}
  alt={vehicule.marque}
  className="img-fluid rounded w-100 h-75"
/>




            <h5 className="card-title">{vehicule.nom}</h5>
            <p className="card-text">Modèle: {vehicule.modele} </p>
            <p className="card-text">Energie: {vehicule.energie} </p>
            <p className="card-text">Prix: {vehicule.prix} €</p>
          </div>
          <div className="card-footer">
            <Link
              to={`/vehiculedetail/${vehicule.idVehicule}`}
              className="btn btn-primary"
            >
              En savoir plus
            </Link>
          </div>
        </div>
      ))}

     
      {/* <Pagination
        cardsPerPage={cardsPerPage}
        totalCards={vehicules.length}
        currentPage={currentPage}
        onPageChange={paginate}
      /> */}
    </div>
  );
};

export default VehiculeCard;
