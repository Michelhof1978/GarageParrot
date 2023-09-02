import React, { useState } from "react";
import axios from "axios";
import "../../App.css";






import React, { useState } from "react";
import axios from "axios";
import "./SearchFilters.css"; // Assurez-vous d'avoir ce fichier CSS

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
  const [currentMousePosition, setCurrentMousePosition] = useState({
    prixMin: filtres.prixMin,
    anneeMin: filtres.anneeMin,
    kilometrageMin: filtres.kilometrageMin
  });

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

  const handleMouseMove = (event, filterName) => {
    const filterRange = event.target;
    const max = parseFloat(filterRange.max);
    const min = parseFloat(filterRange.min);
    const rangeWidth = parseFloat(filterRange.offsetWidth);
    const mouseX = parseFloat(event.nativeEvent.offsetX);
    const filterValue = min + ((max - min) * (mouseX / rangeWidth));

    setCurrentMousePosition({ ...currentMousePosition, [filterName]: filterValue });
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
          <div className="range-filter">
            <span>{currentMousePosition.prixMin.toFixed(0)} €</span>
            <input
              type="range"
              name="prixMin"
              min="5000"
              max="50000"
              value={filtres.prixMin}
              onChange={handleInputChange}
              onMouseMove={(e) => handleMouseMove(e, "prixMin")}
              step="1000"
            />
            <span>50000 €</span>
          </div>
        </div>

        <div className="filter-row">
          <label>Année :</label>
          <div className="range-filter">
            <span>{currentMousePosition.anneeMin.toFixed(0)}</span>
            <input
              type="range"
              name="anneeMin"
              min="2000"
              max="2023"
              value={filtres.anneeMin}
              onChange={handleInputChange}
              onMouseMove={(e) => handleMouseMove(e, "anneeMin")}
              step="1"
            />
            <span>{filtres.anneeMax}</span>
            <input
              type="range"
              name="anneeMax"
              min="2000"
              max="2023"
              value={filtres.anneeMax}
              onChange={handleInputChange}
              onMouseMove={(e) => handleMouseMove(e, "anneeMax")}
              step="1"
            />
          </div>
        </div>

        <div className="filter-row">
          <label>Kilométrage :</label>
          <div className="range-filter">
            <span>{currentMousePosition.kilometrageMin.toFixed(0)}</span>
            <input
              type="range"
              name="kilometrageMin"
              min="0"
              max="200000"
              value={filtres.kilometrageMin}
              onChange={handleInputChange}
              onMouseMove={(e) => handleMouseMove(e, "kilometrageMin")}
              step="1000"
            />
            <span>{filtres.kilometrageMax}</span>
            <input
              type="range"
              name="kilometrageMax"
              min="0"
              max="200000"
              value={filtres.kilometrageMax}
              onChange={handleInputChange}
              onMouseMove={(e) => handleMouseMove(e, "kilometrageMax")}
              step="1000"
            />
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
