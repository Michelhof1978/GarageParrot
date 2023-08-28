import React from "react";

const Pagination = ({ currentPage, totalPages, onPageChange }) => {
  const pageNumbers = [];

  for (let i = 1; i <= totalPages; i++) {
    pageNumbers.push(i);
  }

  return (
    <div className="pagination">
      <button
        onClick={() => onPageChange(currentPage - 1)}
        disabled={currentPage === 1}
      >
        Précédent
      </button>
      {pageNumbers.map((pageNumber) => (
        <span
          key={pageNumber}
          className={`page-number ${currentPage === pageNumber ? "active" : ""}`}
          onClick={() => onPageChange(pageNumber)}
        >
          {pageNumber}
        </span>
      ))}
      <button
        onClick={() => onPageChange(currentPage + 1)}
        disabled={currentPage === totalPages}
      >
        Suivant
      </button>
    </div>
  );
};

export default Pagination;
