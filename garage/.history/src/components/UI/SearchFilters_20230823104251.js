import React, { useState } from "react";
import axios from "axios";
import "./SearchFilters.css"; // Assurez-vous d'avoir ce fichier CSS

const SearchFilters = ({ onSearch }) => {
  const [filtres, setFiltres] = useState({
    prixMin: 5000,
    prixMax: 50000,
    anneeMin: 2000,
    anneeMax: 2023,
    kilometrageMin: 0,
    kilometrageMax: 200000,
    famille: [],
    marque: "",
    modele: ""
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFiltres({
      ...filtres,
      [name]: value
    });
  };

  const handleCheckboxChange = (event) => {
    const { name, value } = event.target;
    const updatedFamille = filtres.famille.includes(value)
      ? filtres.famille.filter(item => item !== value)
      : [...filtres.famille, value];

    setFiltres({
      ...filtres,
      famille: updatedFamille
    });
  };

  const handleSearch = async (event) => {
    event.preventDefault();
    
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
      <form onSubmit={handleSearch}>
        <div className="filter-row">
          <label>Prix Min :</label>
          <input type="number" name="prixMin" value={filtres.prixMin} onChange={handleInputChange} />
        </div>
        <div className="filter-row">
          <label>Prix Max :</label>
          <input type="number" name="prixMax" value={filtres.prixMax} onChange={handleInputChange} />
        </div>
        {/* Ajoutez ici d'autres champs pour les filtres (année, kilométrage, famille, marque, modèle) */}
        <div className="filter-row">
          <button type="submit">Rechercher</button>
        </div>
      </form>
    </div>
  );
};

export default SearchFilters;
