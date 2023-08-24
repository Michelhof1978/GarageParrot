import React, { useState, useEffect } from "react";
import axios from "axios";
import "../../App.css";
import VehiculeCard from "../Vehicules/vehiculeCard";





import React, { useState } from "react";
import axios from "axios";
import VehiculeCard from "../Vehicules/vehiculeCard";
import "../../App.css";

const SearchFilters = ({ onSearch }) => {
  const [filtres, setFiltres] = useState({
    famille: [],
    marque: "",
    anneeMin: 2000,
    anneeMax: 2023,
    prixMax: 50000, // Correction ici
    kilometrageMax: 200000, // Correction ici
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
    const newValue = min + position * (max - min);

    const newValueLimited = Math.min(max, Math.max(min, newValue));
    setCurrentMousePosition({
      ...currentMousePosition,
      [filterName]: newValueLimited,
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
      {/* ... Autres éléments ... */}
    </div>
  );
};

export default SearchFilters;
