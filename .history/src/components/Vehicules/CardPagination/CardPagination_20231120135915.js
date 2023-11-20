// PaginationComponent.js
import React from "react";
import { Pagination } from "react-bootstrap";

const PaginationComponent = ({ currentPage, totalPages, onPageChange }) => {
  return (

// Composant Pagination de la bibliothèque Bootstrap
    <Pagination>

{/* //génére dynamiquement les éléments de pagination en utilisant 'map' qui va créer à partir d'un tableau vide */}
      {[...Array(totalPages)].map((_, index) => (
       
        <Pagination.Item
// key =  aide à identifier de manière unique chaque élément généré dynamiquement au sein d'une liste
          key={index}

//définit si l'élément de pagination est actif (sélectionné) ou non. Si l'index de la page + 1 est égal à la page actuelle (currentPage), alors l'élément est actif.         
          active={index + 1 === currentPage}

//Fonction de rappel qui sera déclench
          onClick={() => onPageChange(index + 1)}
        >
          {index + 1}
        </Pagination.Item>
      ))}
    </Pagination>
  );
};

export default PaginationComponent;
