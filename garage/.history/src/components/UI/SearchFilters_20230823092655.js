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
    marque: "",
    modele: ""
  });

  // Gestionnaire pour la soumission du formulaire
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
    <div>
      <h2>Recherche par filtres</h2>
      {/* Ajoutez ici les éléments d'interface utilisateur pour les filtres */}
      <button onClick={handleSearch}>Rechercher</button>
    </div>
  );
};

export default SearchFilters;
