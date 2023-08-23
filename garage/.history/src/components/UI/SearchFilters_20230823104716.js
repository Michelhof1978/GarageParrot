import React, { useState } from "react";
import axios from "axios";


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
        <div className="filter-row">
          <label>Prix Min :</label>
          <input type="number" name="prixMin" value={filtres.prixMin} onChange={handleInputChange} />
        </div>
        <div className="filter-row">
          <label>Prix Max :</label>
          <input type="number" name="prixMax" value={filtres.prixMax} onChange={handleInputChange} />
        </div>
        <div className="filter-row">
          <label>Année Min :</label>
          <input type="number" name="anneeMin" value={filtres.anneeMin} onChange={handleInputChange} />
        </div>
        <div className="filter-row">
          <label>Année Max :</label>
          <input type="number" name="anneeMax" value={filtres.anneeMax} onChange={handleInputChange} />
        </div>
        <div className="filter-row">
          <label>Kilométrage Min :</label>
          <input type="number" name="kilometrageMin" value={filtres.kilometrageMin} onChange={handleInputChange} />
        </div>
        <div className="filter-row">
          <label>Kilométrage Max :</label>
          <input type="number" name="kilometrageMax" value={filtres.kilometrageMax} onChange={handleInputChange} />
        </div>
        {/* Ajoutez ici les filtres famille, marque et modèle */}
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
