import React, { useState } from "react";
import axios from "axios";
import "../../App.css";










import React, { useState, useEffect } from "react";
import axios from "axios";
import "../../App.css";

const SearchFilters = ({ onSearch }) => {
  const [filtres, setFiltres] = useState({
    famille: [],
    marque: "",
    anneeMin: 2000,
    anneeMax: 2023,
    prixMax: 5000,
    kilometrageMax: 0,
  });

  const [results, setResults] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 20;

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
      const response = await axios.post("/path-to-your-api/search-vehicules.php", filtres);
      setResults(response.data);
      setCurrentPage(1);
    } catch (error) {
      console.error("Erreur lors de la recherche :", error);
    }
  };

  // Reste du code inchangé

  return (
    <div className="search-filters">
      {/* ... */}
    </div>
  );
};

export default SearchFilters;
