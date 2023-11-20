import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import "../../App.css";
import TitreH2 from "../UI/Titres/TitreH2";
import PaginationComponent from "../../components/Vehicules/CardPagination/CardPagination";
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
//Tri des données avec sort() en fonction de la  date de création
        jsonData.sort((a, b) => new Date(a.created_at) - new Date(b.created_at));
        setVehicules(jsonData);
      })
      .catch((error) => {
        console.error("Erreur lors de la récupération des véhicules :", error);
      });
  

    return () => {
      
    };
  }, []);

  //calcule l'index du dernier élément dans la page actuelle en multipliant le numéro de la page actuelle (currentPage) par le nombre de cartes par page (cardsPerPage).
  const indexOfLastCard = currentPage * cardsPerPage;

  //calcule l'index du premier élément dans la page actuelle en soustrayant le nombre de cartes par page (cardsPerPage) de l'index du dernier élément.
  const indexOfFirstCard = indexOfLastCard - cardsPerPage;

  //méthode slice pour extraire une portion du tableau vehicules qui correspond aux cartes à afficher sur la page actuelle.
//La méthode slice(indexOfFirstCard, indexOfLastCard) prend une portion du tableau qui commence à l'index indexOfFirstCard (inclus) et se termine à l'index indexOfLastCard (exclus).
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

//PAGINATION--------------------------------------------------------------
      <PaginationComponent
//Page actuellement active. Obtention de cette valeur à partir de l'état local avec const [currentPage, setCurrentPage] = useState(1);
          currentPage={currentPage}
//Math.ceil qui va arrondir vers le haut si le resultat de la division n'est pas un nombre entier
//Nb total des pages, calculé en fonction de la longueur du tableau et du nombre de cartes par page
          totalPages={Math.ceil(vehicules.length / cardsPerPage)}
//Fonction qui sera appelé lorsque que 'utilisateur va cliquer sur le numéro de page
          onPageChange={paginate}
        />


      </div>
    </div>
    </>
  );
};

export default VehiculesCard;




