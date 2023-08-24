import React, { useState, useEffect } from "react";
import axios from "axios";
import "../../App.css";
import VehiculeCard from "../Vehicules/vehiculeCard";

const SearchFilters = ({ onSearch }) => {
  const [filtres, setFiltres] = useState({
    famille: [],
    marque: "",
    anneeMin: 2000,
    anneeMax: 2023,
    prixMin: 5000,
    prixMax: 50000,
    kilometrageMin: 0,
    kilometrageMax: 200000,
  });

  const [searchResults, setSearchResults] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const resultsPerPage = 20;

  useEffect(() => {
    // Call your search function here or handle the search results in the handleSearch function
    // This should be triggered whenever the filters or currentPage change
  }, [filtres, currentPage]);

  const handleSearch = async () => {
    try {
      const response = await axios.get(
        `http://localhost/garageback/front/voiturefiche/all/?marque=${filtres.marque}&anneeMin=${filtres.anneeMin}&anneeMax=${filtres.anneeMax}`
      );
      setSearchResults(response.data); // Update search results
    } catch (error) {
      console.error("Error during search:", error);
    }
  };

  // Other functions remain the same...

  return (
    <div className="search-filters">
      {/* Existing JSX code */}
      {/* ... */}
      <div className="filter-row">
        <label>Prix :</label>
        <div className="range-filter">
          <span>5000 €</span>
          <input
            type="range"
            name="prixMin"
            min="5000"
            max="50000"
            value={filtres.prixMin}
            onChange={handleInputChange}
            onMouseMove={(e) => handleMouseMove(e, "prix")}
            step="1000"
          />
          <span>{currentMousePosition.prix.toFixed(0)} €</span>
          {currentMousePosition.prix === 50000 && <span>50000 €</span>}
        </div>
      </div>

      <div className="filter-row">
        <label>Année :</label>
        <div className="range-filter">
          <span>2000</span>
          <input
            type="range"
            name="anneeMin"
            min="2000"
            max="2023"
            value={filtres.anneeMin}
            onChange={handleInputChange}
            onMouseMove={(e) => handleMouseMove(e, "annee")}
            step="1"
          />
          <span>{currentMousePosition.annee.toFixed(0)}</span>
          {currentMousePosition.annee === 2023 && <span>2023</span>}
        </div>
      </div>

      <div className="filter-row">
        <label>Kilométrage :</label>
        <div className="range-filter">
          <span>0 km</span>
          <input
            type="range"
            name="kilometrageMin"
            min="0"
            max="200000"
            value={filtres.kilometrageMin}
            onChange={handleInputChange}
            onMouseMove={(e) => handleMouseMove(e, "kilometrage")}
            step="1000"
          />
          <span>{currentMousePosition.kilometrage.toFixed(0)} km</span>
          {currentMousePosition.kilometrage === 200000 && <span>200000 km</span>}
        </div>
      </div>

      <button onClick={handleSearch}>Rechercher</button>
    </div>
  );
};

export default SearchFilters;
