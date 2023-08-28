import React, { useState, useEffect } from "react";
import axios from "axios";
import "../../App.css";


const SearchFilters = () => {
  const [vosFiltres, setVosFiltres] = useState({
    marque: "",
    anneeMin: null,
    anneeMax: null,
    famille: [],
    prixMin: null,
    prixMax: null,
    kilometrageMin: null,
    kilometrageMax: null,
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
        `http://localhost/garageback/front/voiturefiche/all/?marque=${vosFiltres.marque}&...`
      );

      setSearchResults(response.data);
    } catch (error) {
      console.error("Erreur lors de la recherche :", error);
    }
  };

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setVosFiltres((prevFiltres) => ({
      ...prevFiltres,
      [name]: value,
    }));
  };

  const handleMouseMove = (event, filterName) => {
    const { clientX } = event;
    const range = event.target.getBoundingClientRect();
    const position = (clientX - range.left) / range.width;
    const min =
      filterName === "prix" ? 5000 : filterName === "annee" ? 2000 : 0;
    const max =
      filterName === "prix" ? 50000 : filterName === "annee" ? 2023 : 200000;
    let newValue = min + position * (max - min);

    if (filterName === "prix" && newValue < 5000) {
      newValue = 5000;
    } else if (filterName === "annee" && newValue < 2000) {
      newValue = 2000;
    } else if (filterName === "kilometrage" && newValue < 0) {
      newValue = 0;
    }

    if (newValue > max) {
      newValue = max;
    }

    setCurrentMousePosition({
      ...currentMousePosition,
      [filterName]: newValue,
    });
  };

  const handleFamilleChange = (event) => {
    const { value } = event.target;
    if (vosFiltres.famille.includes(value)) {
      setVosFiltres((prevFiltres) => ({
        ...prevFiltres,
        famille: prevFiltres.famille.filter((f) => f !== value),
      }));
    } else {
      setVosFiltres((prevFiltres) => ({
        ...prevFiltres,
        famille: [...prevFiltres.famille, value],
      }));
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
      {/* Le reste du contenu JSX */}
    </div>
  );
};

export default SearchFilters;
