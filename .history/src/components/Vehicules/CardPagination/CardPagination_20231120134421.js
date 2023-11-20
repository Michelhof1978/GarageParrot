// PaginationComponent.js
import React from "react";
import { Pagination } from "react-bootstrap";

const PaginationComponent = ({ currentPage, totalPages, onPageChange }) => {
  return (

Composant Pagination
    <Pagination>
      {[...Array(totalPages)].map((_, index) => (
        <Pagination.Item
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
