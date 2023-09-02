import React, { useState } from "react";
import axios from "axios";
import "../../App.css";














import React, { useState } from "react";
import axios from "axios";
import "./SearchFilters.css";

const SearchFilters = ({ onSearch }) => {
  const [filtres, setFiltres] = useState({
    prix: [5000, 50000],
    annee: [2000, 2023],
    kilometrage: [0, 200000],
    famille: [],
    marque: ""
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFiltres({
      ...filtres,
      [name]: value
    });
  };

  const handleFamilleChange = (event) => {
    const { value } = event.target;
    if (filtres.famille.includes(value)) {
      setFiltres({
        ...filtres,
        famille: filtres.famille.filter((f) => f !== value)
      });
    } else {
      setFiltres({
        ...filtres,
        famille: [...filtres.famille, value]
      });
    }
  };

  const handleSearch = async () => {
    try {
      const response = await axios.post("http://localhost/search.php", filtres);
      onSearch(response.data);
    } catch (error) {
      console.error("Erreur lors de la recherche :", error);
    }
  };

  return (
    <div className="search-filters">
      <h2>Recherche par filtres</h2>

      <div className="filter-row">
        <label>Famille :</label>
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
          {/* ... (other checkboxes) */}
        </div>
      </div>

      <div className="filter-row">
        <label>Marque :</label>
        <select name="marque" value={filtres.marque} onChange={handleInputChange}>
          <option value="">Toutes</option>
          <option value="citroen">Citroën</option>
          <option value="peugeot">Peugeot</option>
          <option value="renault">Renault</option>
          <option value="volkswagen">Volkswagen</option>
          <option value="kia">Kia</option>
        </select>
      </div>

      <div className="filter-row">
        <label>Prix :</label>
        <div className="price-filter">
          <span>{filtres.prix[0]} €</span>
          <input
            type="range"
            name="prix"
            min="5000"
            max="50000"
            step="100"
            value={filtres.prix[0]}
            onChange={handleInputChange}
          />
          <span>{filtres.prix[1]} €</span>
        </div>
      </div>

      <div className="filter-row">
        <label>Année :</label>
        <div className="single-range-filter">
          {/* ... (single range input for année) */}
        </div>
      </div>

      <div className="filter-row">
        <label>Kilométrage :</label>
        <div className="single-range-filter">
          {/* ... (single range input for kilométrage) */}
        </div>
      </div>

      <button onClick={handleSearch}>Rechercher</button>
    </div>
  );
};

export default SearchFilters;