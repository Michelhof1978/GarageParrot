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
key =  aide à identifier de manière unique chaque élément généré dynamiquement au sein d'une liste

          key={index}
          active={index + 1 === currentPage}
          onClick={() => onPageChange(index + 1)}
        >
          {index + 1}
        </Pagination.Item>
      ))}
    </Pagination>
  );
};

export default PaginationComponent;
