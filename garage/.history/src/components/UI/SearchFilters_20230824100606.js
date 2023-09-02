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
    prixMax: 5000,
    kilometrageMax: 0,
  });

  const [searchResults, setSearchResults] = useState([]);
  const [currentMousePosition, setCurrentMousePosition] = useState({
    prix: 5000,
    annee: 2000,
    kilometrage: 0,
  });

  const handleSearch = async () => {
    try {
      const response = await axios.get(
        `http://localhost/garageback/front/voiturefiche/all/?marque=${filtres.marque}&anneeMin=${filtres.anneeMin}&anneeMax=${filtres.anneeMax}`
      );
      setSearchResults(response.data);
    } catch (error) {
      console.error("Erreur lors de la recherche :", error);
    }
  };

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    let newValue = Number(value);

    // Gestion des bornes des filtres
    if (name === "prixMin") {
      newValue = Math.min(Math.max(newValue, 5000), filtres.prixMax);
    } else if (name === "prixMax") {
      newValue = Math.min(Math.max(newValue, filtres.prixMin), 50000);
    } else if (name === "anneeMin") {
      newValue = Math.min(Math.max(newValue, 2000), filtres.anneeMax);
    } else if (name === "anneeMax") {
      newValue = Math.min(Math.max(newValue, filtres.anneeMin), 2023);
    } else if (name === "kilometrageMin") {
      newValue = Math.min(Math.max(newValue, 0), filtres.kilometrageMax);
    } else if (name === "kilometrageMax") {
      newValue = Math.min(Math.max(newValue, filtres.kilometrageMin), 200000);
    }

    setFiltres({
      ...filtres,
      [name]: newValue,
    });
  };

  const handleMouseMove = (event, filterName) => {
    const { clientX } = event;
    const range = event.target.getBoundingClientRect();
    const position = (clientX - range.left) / range.width;
    const min = filterName === "prix" ? 5000 : filterName === "annee" ? 2000 : 0;
    const max = filterName === "prix" ? 50000 : filterName === "annee" ? 2023 : 200000;
    let newValue = min + position * (max - min);

    // Limite inférieure pour le filtre de prix
    if (filterName === "prix" && newValue < 5000) {
      newValue = 5000;
    }

    // Limite supérieure pour tous les filtres
    newValue = Math.min(max, Math.max(min, newValue));

    setCurrentMousePosition({
      ...currentMousePosition,
      [filterName]: newValue,
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

  const getDisplayedResults = () => {
    const startIndex = (currentPage - 1) * resultsPerPage;
    const endIndex = startIndex + resultsPerPage;
    return searchResults.slice(startIndex, endIndex);
  };

  const [currentPage, setCurrentPage] = useState(1);
  const resultsPerPage = 20;

  return (
    <div className="search-filters">
      <h2>Recherche par filtres</h2>
      <div className="checkbox-filter">
        {/* ... Options de famille ... */}
      </div>
      <div className="search-results">
        <h3>Résultats de la recherche :</h3>
        <VehiculeCard vehicules={searchResults} />
        <ul>
          {getDisplayedResults().map((voiture) => (
            <li key={voiture.id}>
              {voiture.nom} - {voiture.prix} €
            </li>
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
                currentPage + 1
              )
            }
            disabled={currentPage === Math.ceil(searchResults.length / resultsPerPage)}
          >
            Suivant
          </button>
        </div>
      </div>
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
          {/* ... Input pour l'année ... */}
        </div>
      </div>
      <div className="filter-row">
        <label>Kilométrage :</label>
        <div className="range-filter">
          {/* ... Input pour le kilométrage ... */}
        </div>
      </div>
      <button onClick={handleSearch}>Rechercher</button>
    </div>
  );
};

export default SearchFilters;
