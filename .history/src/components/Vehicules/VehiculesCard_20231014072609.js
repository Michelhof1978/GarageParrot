import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import "../../App.css";
import TitreH1 from "../UI/TitreH1/TitreH1";
import { Pagination } from "react-bootstrap";
import Card from "./Card"; // Importez le composant Card depuis le fichier approprié.

const VehiculesCard = () => {
  const [vehicules, setVehicules] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const cardsPerPage = 9;

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

  return (
    <div>
      <div className="vehicule-grid">
        {currentCards.map((vehicule) => (
          <Card
            image={vehicule.imageVoiture}
            marque={vehicule.marque}
            nom={vehicule.nom}
            modele={vehicule.modele}
            energie={vehicule.energie}
            prix={vehicule.prix}
            id={vehicule.idVehicule}
            key={vehicule.idVehicule}
          />
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
