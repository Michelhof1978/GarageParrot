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
          {/* Ajoutez ici d'autres cases à cocher pour les familles */}
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
        {/* Ajoutez le curseur de prix ici */}
      </div>

      <div className="filter-row">
        <label>Année :</label>
        {/* Ajoutez le curseur d'année ici */}
      </div>

      <div className="filter-row">
        <label>Kilométrage :</label>
        {/* Ajoutez le curseur de kilométrage ici */}
      </div>

      <button onClick={handleSearch}>Rechercher</button>
    </div>
  );
};

export default SearchFilters;
