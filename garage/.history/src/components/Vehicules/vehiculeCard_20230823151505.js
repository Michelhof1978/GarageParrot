import React, { useState, useEffect } from "react";
import axios from "axios";
import "../../App.css";



import React, { useState } from "react";
import axios from "axios";

const SearchFilters = ({ onSearch }) => {
  const [filtres, setFiltres] = useState({
    famille: [],
    marque: "",
    anneeMin: 2000,
    anneeMax: 2023,
    prixMax: 5000, // Limite de prix
    kilometrageMax: 0, // Limite de kilométrage
  });

  const [results, setResults] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 20;

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFiltres({
      ...filtres,
      [name]: value,
    });
  };

  const handleFamilleChange = (event) => {
    const { value } = event.target;
    if (filtres.famille.includes(value)) {
      setFiltres({
        ...filtres,
        famille: filtres.famille.filter((f) => f !== value),
      });
    } else {
      setFiltres({
        ...filtres,
        famille: [...filtres.famille, value],
      });
    }
  };

  const handleSearch = async () => {
    try {
      const response = await axios.post("http://localhost/search.php", filtres);
      setResults(response.data);
      setCurrentPage(1);
    } catch (error) {
      console.error("Erreur lors de la recherche :", error);
    }
  };

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = results.slice(indexOfFirstItem, indexOfLastItem);

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  return (
    <div className="search-filters">
      <h2>Recherche par filtres</h2>
      <div className="checkbox-filter">
        <label>
          <input
            type="checkbox"
            name="famille"
            value="utilitaire"
            checked={filtres.famille.includes("utilitaire")}
            onChange={handleFamilleChange}
          />
          Utilitaire
        </label>
        {/* Autres cases à cocher pour la famille */}
      </div>

      <div className="filter-row">
        <label>Marque :</label>
        <input
          type="text"
          name="marque"
          value={filtres.marque}
          onChange={handleInputChange}
        />
      </div>

      <div className="filter-row">
        <label>Année :</label>
        <div className="range-filter">
          <input
            type="number"
            name="anneeMin"
            min="2000"
            max="2023"
            value={filtres.anneeMin}
            onChange={handleInputChange}
          />
          <input
            type="number"
            name="anneeMax"
            min="2000"
            max="2023"
            value={filtres.anneeMax}
            onChange={handleInputChange}
          />
        </div>
      </div>

      <div className="filter-row">
        <label>Prix maximal :</label>
        <input
          type="number"
          name="prixMax"
          min="0"
          max="5000"
          value={filtres.prixMax}
          onChange={handleInputChange}
        />
      </div>

      <div className="filter-row">
        <label>Kilométrage maximal :</label>
        <input
          type="number"
          name="kilometrageMax"
          min="0"
          max="200000"
          value={filtres.kilometrageMax}
          onChange={handleInputChange}
        />
      </div>

      <button onClick={handleSearch}>Rechercher</button>

      <div className="results">
        {currentItems.map((item, index) => (
          <div key={index} className="result-item">
            {/* Afficher les détails de l'élément */}
            <p>{item.nom}</p>
            <p>{item.marque}</p>
            {/* Autres détails à afficher */}
          </div>
        ))}
      </div>

      <div className="pagination">
        {Array.from({ length: Math.ceil(results.length / itemsPerPage) }).map((_, index) => (
          <button key={index} onClick={() => handlePageChange(index + 1)}>
            {index + 1}
          </button>
        ))}
      </div>
    </div>
  );
};

export default SearchFilters;
