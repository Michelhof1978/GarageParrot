import React, { useState, useEffect } from "react";
import axios from "axios";
import "../../App.css";
import VehiculeCard from ".z./../Vehicules/VehiculeCard";

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
    // Fetch data based on filters and pagination
    // You might want to add a condition to prevent unnecessary fetch on initial render
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `http://localhost/garageback/front/voiturefiche/all/?marque=${filtres.marque}&anneeMin=${filtres.anneeMin}&anneeMax=${filtres.anneeMax}`
        );
        setSearchResults(response.data);
      } catch (error) {
        console.error("Erreur lors de la recherche :", error);
      }
    };

    fetchData();
  }, [filtres]);

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

  const getDisplayedResults = () => {
    const startIndex = (currentPage - 1) * resultsPerPage;
    const endIndex = startIndex + resultsPerPage;
    return searchResults.slice(startIndex, endIndex);
  };

  // Reste du code pour handleMouseMove, handleInputChange et les filtres visuels...

  return (
    <div className="search-filters">
      <h2>Recherche par filtres</h2>
      <div className="checkbox-filter">
        {/* ... Checkboxes pour les familles de voitures ... */}
      </div>

      <div className="search-results">
        <h3>Résultats de la recherche :</h3>
        <VehiculeCard vehicules={searchResults} />
      </div>

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
          onClick={() =>
            setCurrentPage(
              currentPage + 1 > Math.ceil(searchResults.length / resultsPerPage)
                ? currentPage
                : currentPage + 1
            )
          }
          disabled={currentPage === Math.ceil(searchResults.length / resultsPerPage)}
        >
          Suivant
        </button>
      </div>

      {/* ... Filtres de prix, année et kilométrage ... */}

      <button onClick={handleSearch}>Rechercher</button>
    </div>
  );
};

export default SearchFilters;
