import React, { useState, useEffect } from "react";
import axios from "axios";
import "../../App.css";

import React, { useState } from "react";
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
      const response = await axios.post("http://localhost/search.php", filtres); // Modifier l'URL en fonction de votre API
      onSearch(response.data);
    } catch (error) {
      console.error("Erreur lors de la recherche :", error);
    }
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
        <label>
          {/* Autres cases à cocher pour la famille */}
        </label>
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
        <label>Kilométrage :</label>
        <div className="range-filter">
          <input
            type="number"
            name="kilometrageMin"
            min="0"
            max="200000"
            value={filtres.kilometrageMin}
            onChange={handleInputChange}
          />
          <input
            type="number"
            name="kilometrageMax"
            min="0"
            max="200000"
            value={filtres.kilometrageMax}
            onChange={handleInputChange}
          />
        </div>
      </div>

      <button onClick={handleSearch}>Rechercher</button>
    </div>
  );
};

export default SearchFilters;
