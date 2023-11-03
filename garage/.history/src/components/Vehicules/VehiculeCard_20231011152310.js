import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import "../../App.css";
import TitreH1 from "../UI/TitreH1/TitreH1";

const VehiculeCard = () => {
  const [vehicules, setVehicules] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  let cardsPerPage = 10;

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
  }, []);

  // Calcul du nombre de cartes à afficher en fonction de la largeur de l'écran
  if (window.innerWidth <= 767) {
    cardsPerPage = 6; // Afficher seulement 6 cartes en mode mobile
  }

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

      {/* Pagination component here */}
    </div>
  );
};

export default VehiculeCard;
