import React, { useState } from "react";
import axios from "axios";
import "../../App.css";






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
  const [currentMousePosition, setCurrentMousePosition] = useState(filtres.prixMin);

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFiltres({
      ...filtres,
      [name]: value
    });
  };

  const handleCheckboxChange = (event) => {
    const { name, value } = event.target;
    const updatedFamille = filtres.famille.includes(value)
      ? filtres.famille.filter(item => item !== value)
      : [...filtres.famille, value];
    
    setFiltres({
      ...filtres,
      famille: updatedFamille
    });
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

  const handleMouseMove = (event) => {
    const priceRange = event.target;
    const max = parseFloat(priceRange.max);
    const min = parseFloat(priceRange.min);
    const rangeWidth = parseFloat(priceRange.offsetWidth);
    const mouseX = parseFloat(event.nativeEvent.offsetX);
    const price = min + ((max - min) * (mouseX / rangeWidth));
    setCurrentMousePosition(price);
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
          <label>Prix :</label>
          <div className="price-range">
            <span>{currentMousePosition.toFixed(0)} €</span>
            <input
              type="range"
              name="prixMin"
              min="5000"
              max="50000"
              value={filtres.prixMin}
              onChange={handleInputChange}
              onMouseMove={handleMouseMove}
              step="1000"
            />
            <span>50000 €</span>
          </div>
        </div>
        
        {/* ... Autres filtres ... */}
        
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
