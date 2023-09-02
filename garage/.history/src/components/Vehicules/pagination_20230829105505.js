import React from "react";

const Pagination = ({ cardsPerPage, totalCards, currentPage, onPageChange }) => {
  const totalPages = Math.ceil(totalCards / cardsPerPage);

  const renderPageNumbers = () => {
    const pageNumbers = [];
    for (let i = 1; i <= totalPages; i++) {
      pageNumbers.push(
        <button key={i} onClick={() => onPageChange(i)}>
          {i}
        </button>
      );
    }
    return pageNumbers;
  };

  return <div className="pagination">{renderPageNumbers()}</div>;
};

export default Pagination;
