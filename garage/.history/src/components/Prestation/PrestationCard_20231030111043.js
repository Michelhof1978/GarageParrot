import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import "../../App.css";
import TitreH2 from "../UI/Titres/TitreH2";
import { Pagination } from "react-bootstrap";
import Card from "./Card";


const PrestationCard = () => {
  const [prestations, sets] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const cardsPerPage = 12;

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
    <>
    
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
    </>
  );
};

export default PrestationCard;




