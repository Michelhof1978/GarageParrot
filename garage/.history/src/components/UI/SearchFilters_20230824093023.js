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

  const handleInputChange = (event) => {
    // Handle input changes for filters
  };

  const handleMouseMove = (event, filterName) => {
    // Handle mouse move for range filters
  };

  const getDisplayedResults = () => {
    // Get the displayed results based on the current page and resultsPerPage
  };

  return (
    <div className="search-filters">
      {/* Filter checkboxes */}
      {/* Search results */}
      <ul>
        {getDisplayedResults().map((voiture) => (
          <li key={voiture.id}>{voiture.nom} - {voiture.prix} €</li>
        ))}
      </ul>
      <div className="pagination">
        <button
          onClick={() => setCurrentPage(currentPage - 1)}
          disabled={currentPage === 1}
        >
          Précédent
        </button>
        <span>{currentPage}</span>
        <button
          onClick={() => setCurrentPage(currentPage + 1)}
          disabled={currentPage === Math.ceil(searchResults.length / resultsPerPage)}
        >
          Suivant
        </button>
      </div>
      {/* Price filter */}
      {/* Year filter */}
      {/* Mileage filter */}
      <button onClick={handleSearch}>Rechercher</button>
    </div>
  );
};

export default SearchFilters;
