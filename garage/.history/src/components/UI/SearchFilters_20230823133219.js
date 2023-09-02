import React, { useState } from "react";
import axios from "axios";
import "../../App.css";












import React, { useState } from "react";
import axios from "axios";

const SearchFilters = ({ onSearch }) => {
  const [filtres, setFiltres] = useState({
    prixMin: 5000,
    prixMax: 50000,
    anneeMin: 2000,
    anneeMax: 2023,
    kilometrageMin: 0,
    kilometrageMax: 200000,
    famille: [],
    marque: ""
  });

  const [currentMousePosition, setCurrentMousePosition] = useState({
    prix: 5000,
    annee: 2000,
    kilometrage: 0
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
      {/* Filtre de prix */}
      {/* ... (comme précédemment) ... */}

      {/* Filtre d'année */}
      {/* ... (comme précédemment) ... */}

      {/* Filtre de kilométrage */}
      {/* ... (comme précédemment) ... */}

      {/* Filtre par famille */}
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
          {/* ... Ajoutez les autres cases à cocher pour les familles ... */}
        </div>
      </div>

      {/* Filtre par marque */}
      <div className="filter-row">
        <label>Marque :</label>
        <select name="marque" value={filtres.marque} onChange={handleInputChange}>
          <option value="">Toutes les marques</option>
          <option value="Citroen">Citroën</option>
          <option value="Peugeot">Peugeot</option>
          <option value="Renault">Renault</option>
          <option value="Volkswagen">Volkswagen</option>
          <option value="Kia">Kia</option>
        </select>
      </div>

      <button onClick={handleSearch}>Rechercher</button>
    </div>
  );
};

export default SearchFilters;
