import React from "react";
import { Pagination } from "react-bootstrap";

const CardPagination = ({ currentPage, pagesCount, onPageChange }) => {
  return (
    <div className="d-flex justify-content-center mt-4">
      <Pagination>
        {[...Array(pagesCount)].map((_, index) => (
          <Pagination.Item
            key={index}
            active={index === currentPage}
            onClick={() => onPageChange(index)}
          >
            {index + 1}
          </Pagination.Item>
        ))}
      </Pagination>
    </div>
  );
};

export defaultCardPagination;
