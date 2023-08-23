import React, { useState } from "react";
import axios from "axios";
import "../../App.css";














import React, { useState } from "react";
import axios from "axios";

const SearchFilters = ({ onSearch }) => {
  const [filtres, setFiltres] = useState({
    // ... autres filtres ...
    famille: []
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
      {/* ... autres filtres ... */}
      
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
          <label>
            <input
              type="checkbox"
              name="famille"
              value="berline"
              checked={filtres.famille.includes("berline")}
              onChange={handleFamilleChange}
            />
            Berline
          </label>
          <label>
            <input
              type="checkbox"
              name="famille"
              value="familiale"
              checked={filtres.famille.includes("familiale")}
              onChange={handleFamilleChange}
            />
            Familiale
          </label>
          {/* Ajoutez d'autres familles ici */}
        </div>
      </div>
      
      <button onClick={handleSearch}>Rechercher</button>
    </div>
  );
};

export default SearchFilters;
