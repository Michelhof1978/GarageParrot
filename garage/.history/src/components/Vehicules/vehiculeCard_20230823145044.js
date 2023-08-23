import React, { useState, useEffect } from "react";
import axios from "axios";
import "../../App.css";


import React, { useState, useEffect } from "react";
import axios from "axios";
import "./SearchFilters.css"; // Assurez-vous d'avoir le fichier CSS correctement lié

const SearchFilters = ({ onSearch }) => {
  const [filtres, setFiltres] = useState({
    famille: [],
    marque: "",
    anneeMin: 2000,
    anneeMax: 2023,
    kilometrageMin: 0,
    kilometrageMax: 200000,
  });

  const [results, setResults] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 20;

  useEffect(() => {
    // Effectuer la requête pour obtenir les résultats filtrés en fonction des critères de recherche
    const fetchResults = async () => {
      try {
        const response = await axios.post("http://localhost/search.php", filtres); // Modifier l'URL en fonction de votre API
        setResults(response.data);
        setCurrentPage(1); // Réinitialiser la page actuelle à 1
      } catch (error) {
        console.error("Erreur lors de la recherche :", error);
      }
    };

    fetchResults();
  }, [filtres]);

  const handlePageChange = (newPage) => {
    setCurrentPage(newPage);
  };

  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const displayedResults = results.slice(startIndex, endIndex);

  return (
    <div className="search-filters">
      <h2>Recherche par filtres</h2>
      <div className="checkbox-filter">
        {/* Cases à cocher pour la famille (comme précédemment) */}
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

      {/* Autres filtres (comme précédemment) */}
      
      <button onClick={handleSearch}>Rechercher</button>

      <div className="results">
        {displayedResults.map((result) => (
          <div key={result.idVehicule} className="result-card">
            {/* Afficher les détails du véhicule ici */}
            <p>Marque: {result.marque}</p>
            <p>Modèle: {result.modele}</p>
            {/* ... Ajouter d'autres détails ... */}
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
