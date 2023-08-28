import React, { useState, useEffect } from "react";
import axios from "axios";
import "../../App.css";
import VehiculeCard from "./vehiculeCard";

const SearchFilters = ({ onSearch }) => {
  const [filtres, setFiltres] = useState({
    famille: [],
    marque: "Toutes",
    anneeMin: 2000,
    anneeMax: 2023,
    prixMin: 0,
    prixMax: 5000,
    kilometrageMin: 0,
    kilometrageMax: 200000,
  });

  const [searchResults, setSearchResults] = useState([]);

  const handleSearch = async () => {
    try {
      const response = await axios.get(
        `http://localhost/garageback/front/voiturefiche/all/?marque=${filtres.marque}&anneeMin=${filtres.anneeMin}&anneeMax=${filtres.anneeMax}`
      );
      setSearchResults(response.data);
      if (onSearch) onSearch(response.data);
    } catch (error) {
      console.error("Erreur lors de la recherche :", error);
    }
  };

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    let newValue = Number(value);

    // Ici vous pouvez ajouter d'autres logiques pour des limites spécifiques, si nécessaire
    setFiltres({
      ...filtres,
      [name]: newValue,
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

  const [currentPage, setCurrentPage] = useState(1);
  const resultsPerPage = 20;

  const getDisplayedResults = () => {
    const startIndex = (currentPage - 1) * resultsPerPage;
    const endIndex = startIndex + resultsPerPage;
    return searchResults.slice(startIndex, endIndex);
  };

  return (
    <div className="search-filters">
      <div className="filter-row">
    <label>Marque :</label>
    <select
        name="marque"
        value={filtres.marque}
        onChange={handleInputChange}
    >
        <option value="Toutes">Toutes</option>
        <option value="Citroen">Citroen</option>
        <option value="Peugeot">Peugeot</option>
        <option value="BMW">BMW</option>
        <option value="Renault">Renault</option>
        <option value="Dacia">Dacia</option>
    </select>
</div>

      <button onClick={handleSearch}>Rechercher</button>
      <div className="search-results">
        <h3>Résultats de la recherche :</h3>
        {getDisplayedResults().map((voiture) => (
          <VehiculeCard key={voiture.id} vehicule={voiture} />
        ))}
      </div>
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
          disabled={
            currentPage === Math.ceil(searchResults.length / resultsPerPage)
          }
        >
          Suivant
        </button>
      </div>
    </div>
  );
};

export default SearchFilters;
