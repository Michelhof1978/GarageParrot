import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import "../../App.css";
import TitreH1 from "../UI/TitreH1/TitreH1";
// import Pagination from "./Pagination"; 
import Card from "./card";


const VehiculesCard = () => {
  const [vehicules, setVehicules] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const cardsPerPage = 20;

  useEffect(() => {
    axios
      .get("http://localhost/garageback/front/voiturefiche/all")
      .then((response) => {
        const jsonData = response.data;
        setVehicules(response.data);
      })
      .catch((error) => {
        console.error("Erreur lors de la récupération des véhicules :", error);
      });
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

        <Card image = {vehicule.imageVoiture.imageVoiture }
        marque = {vehicule.marque}
        nom = {vehicule.nom}
        modele = {vehicule.modele}
        energie = {vehicule.energie}
        prix = {vehicule.prix}
        id = {vehicule.idVehicule}
        key = {vehicule.idVehicule}
        /> 
       
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

export default VehiculesCard;
