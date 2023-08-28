import React, { useState } from "react";
import axios from "axios";
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
    } else if (name === "anneeMin" || name === "anneeMax") {
      newValue = Math.min(Math.max(newValue, 2000), 2023);
    } else if (name === "kilometrageMin" || name === "kilometrageMax") {
      newValue = Math.min(Math.max(newValue, 0), 200000);
    }

    setFiltres({
      ...filtres,
      [name]: newValue,
    });
  };

  const handleMouseMove = (event, filterName) => {
    // La logique pour la manipulation des curseurs de plage
  };

  const handleFamilleChange = (event) => {
    // La logique pour la gestion des familles de voitures
  };

  const getDisplayedResults = () => {
    // La logique pour récupérer les résultats affichés en fonction de la pagination
  };

  const [currentPage, setCurrentPage] = useState(1);
  const resultsPerPage = 20;

  return (
    <div className="search-filters">
      {/* Contenu du composant JSX */}
    </div>
  );
};

export default SearchFilters;
