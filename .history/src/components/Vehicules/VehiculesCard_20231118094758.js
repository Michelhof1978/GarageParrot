import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import "../../App.css";
import TitreH2 from "../UI/Titres/TitreH2";
import { Pagination } from "react-bootstrap";
import Card from "./Card";


const VehiculesCard = () => {
//State pour stocker la liste des véhicules
  const [vehicules, setVehicules] = useState([]);

//State pour gérer la pagination
  const [currentPage, setCurrentPage] = useState(1);
  const cardsPerPage = 6;

//Utilisation de useEffect qui va effectuer des opérations asynchrones lors du rendu d'un composant.
  useEffect(() => {

//Utilisation de la bibliothèque Axios pour effectuer une requête HTTP GET vers l'URL spécifiée
    axios
      .get("http://localhost/garageback/front/voiturefiche/all")

//La méthode .then est appelée sur la promesse renvoyée par la requête HTTP. Elle prend une fonction callback avec le paramètre response qui représente la réponse de la requête.
      .then((response) => {
//Extraction des données Json de la réponse HTTP.
        const jsonData = response.data;
//
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

export default VehiculesCard;




