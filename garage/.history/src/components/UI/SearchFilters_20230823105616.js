import React, { useState } from "react";
import axios from "axios";
import

const SearchFilters = ({ onSearch }) => {
  const [filtres, setFiltres] = useState({
    prixMin: 5000,
    prixMax: 50000,
    anneeMin: 2000,
    anneeMax: 2023,
    kilometrageMin: 0,
    kilometrageMax: 200000,
    famille: [],
    marque: "",
    modele: ""
  });

  const [results, setResults] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFiltres({
      ...filtres,
      [name]: value
    });
  };

  const handleCheckboxChange = (event) => {
    // ...
  };

  const handleSearch = async (event) => {
    event.preventDefault();
    
    try {
      const response = await axios.post("http://localhost/search.php", filtres);
      setResults(response.data);
      setTotalPages(Math.ceil(response.data.length / itemsPerPage));
      setCurrentPage(1); // Reset to first page after new search
      onSearch(response.data);
    } catch (error) {
      console.error("Erreur lors de la recherche :", error);
    }
  };

  const itemsPerPage = 12;
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = results.slice(indexOfFirstItem, indexOfLastItem);

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  return (
    <div className="search-filters">
      <h2>Recherche par filtres</h2>
      <form onSubmit={handleSearch}>
        {/* ... Autres filtres ... */}
        <div className="filter-row">
          <label>Prix :</label>
          <div className="slider-container">
            <input
              type="range"
              name="prixMin"
              min="5000"
              max="50000"
              value={filtres.prixMin}
              onChange={handleInputChange}
              step="1000"
            />
            <span>{filtres.prixMin} €</span>
          </div>
          <div className="slider-container">
            <input
              type="range"
              name="prixMax"
              min="5000"
              max="50000"
              value={filtres.prixMax}
              onChange={handleInputChange}
              step="1000"
            />
            <span>{filtres.prixMax} €</span>
          </div>
        </div>
        <div className="filter-row">
          <button type="submit">Rechercher</button>
        </div>
      </form>
      
      <div className="results">
        {currentItems.map((item, index) => (
          <div key={index} className="result-item">
            {/* Afficher les détails de l'item */}
          </div>
        ))}
      </div>
      
      <div className="pagination">
        {Array.from({ length: totalPages }, (_, index) => index + 1).map(pageNumber => (
          <span
            key={pageNumber}
            className={`page-number ${currentPage === pageNumber ? "active" : ""}`}
            onClick={() => handlePageChange(pageNumber)}
          >
            {pageNumber}
          </span>
        ))}
      </div>
    </div>
  );
};

export default SearchFilters;
