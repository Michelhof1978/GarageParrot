import React, { useState, useEffect } from "react";
import axios from "axios";
import "../../App.css";
import VehiculeCard from "../Vehicules/vehiculeCard";





import React, { useState, useRef } from "react";
import VehiculeCard from "./VehiculeCard";

const SearchFilters = ({ onSearch }) => {
  const [filtres, setFiltres] = useState({
    famille: [],
    marque: "",
    anneeMin: 2000,
    anneeMax: 2023,
    prixMax: 5000,
    kilometrageMax: 0,
  });

  const [searchResults, setSearchResults] = useState([]);

  const handleSearch = async () => {
    try {
      const response = await axios.get(
        `http://localhost/garageback/front/voiturefiche/all/?marque=<span class="math-inline">\{filtres\.marque\}&anneeMin\=</span>{filtres.anneeMin}&anneeMax=${filtres.anneeMax}`
      );
      setSearchResults(response.data); // Mettre à jour les résultats de la recherche
    } catch (error) {
      console.error("Erreur lors de la recherche :", error);
    }
  };

  const currentMousePositionRef = useRef(null);

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

    currentMousePositionRef.current = {
      ...currentMousePositionRef.current,
      [name]: newValue
    };
  };

  const handleMouseMove = (event) => {
    const { clientX } = event;
    const range = event.target.getBoundingClientRect();
    const position = (clientX - range.left) / range.width;
    const min = event.target.name === "prix" ? 5000 : event.target.name === "annee" ? 2000 : 0;
    const max = event.target.name === "prix" ? 50000 : event.target.name === "annee" ? 2023 : 200000;
    const newValue = min + position * (max - min);

    const newValueLimited = Math.min(newValue, max);
    setFiltres({
      ...filtres,
      [event.target.name]: newValueLimited
    });

    currentMousePositionRef.current = {
      ...currentMousePositionRef.current,
      [event.target.name]: newValueLimited
    };
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

  const getDisplayedResults = () => {
    const startIndex = (currentPage - 1) * resultsPerPage;
    const endIndex = startIndex + resultsPerPage;
    return searchResults.slice(startIndex, endIndex);
  };

  return (
    <div className="search-filters">
      <h2>Recherche par filtres</h2>
      <
