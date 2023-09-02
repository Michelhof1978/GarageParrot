import React, { useState } from "react";
import axios from "axios";
import "../../App.css";









const SearchFilters = ({ onSearch }) => {
  const [filtres, setFiltres] = useState({
    prixMin: 5000,
    prixMax: 50000,
    anneeMin: 2000,
    anneeMax: 2023,
    kilometrageMin: 0,
    kilometrageMax: 200000,
    famille: []
  });

  const [currentMousePosition, setCurrentMousePosition] = useState({
    prix: 5000,
    annee: 2000,
    kilometrage: 0
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    let newValue = Number(value);

    if (name === "prixMin") {
      newValue = Math.min(Math.max(newValue, 5000), filtres.prixMax);
    } else if (name === "prixMax") {
      newValue = Math.min(Math.max(newValue, filtres.prixMin), 50000);
    } else if (name === "anneeMin" || name === "anneeMax") {
      newValue = Math.min(Math.max(newValue, 2000), 2023);
    } else if (name === "kilometrageMin" || name === "kilometrageMax") {
      newValue = Math.min(Math.max(newValue, 0), 200000);
    }

    setFiltres({
      ...filtres,
      [name]: newValue
    });
  };

  const handleMouseMove = (event, filterName) => {
    const { clientX } = event;
    const range = event.target.getBoundingClientRect();
    const position = (clientX - range.left) / range.width;
    const min = filterName === "prix" ? 5000 : filterName === "annee" ? 2000 : 0;
    const max = filterName === "prix" ? 50000 : filterName === "annee" ? 2023 : 200000;
    const newValue = min + position * (max - min);

    const newValueLimited = Math.min(newValue, max);
    if (newValueLimited !== max) {
      setCurrentMousePosition({
        ...currentMousePosition,
        [filterName]: newValueLimited
      });
    }
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
      {/* ... (le reste du code reste inchangé) */}
    </div>
  );
};

export default SearchFilters;
