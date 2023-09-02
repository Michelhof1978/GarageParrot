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
    famille: [],
    marque: "",
    modele: ""
  });

  const [results, setResults] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [currentMousePosition, setCurrentMousePosition] = useState({
    prix: filtres.prixMin,
    annee: filtres.anneeMin,
    kilometrage: filtres.kilometrageMin
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
      setResults(response.data);
      setTotalPages(Math.ceil(response.data.length / itemsPerPage));
      setCurrentPage(1); // Reset to first page after new search
      onSearch(response.data);
    } catch (error) {
      console.error("Erreur lors de la recherche :", error);
    }
  };

  const handleMouseMove = (event, filterName) => {
    const filterRange = event.target;
    const max = parseFloat(filterRange.max);
    const min = parseFloat(filterRange.min);
    const rangeWidth = parseFloat(filterRange.offsetWidth);
    const mouseX = parseFloat(event.nativeEvent.offsetX);
    let filterValue = min + ((max - min) * (mouseX / rangeWidth));

    if (filterValue < min) {
      filterValue = min;
    } else if (filterValue > max) {
      filterValue = max;
    }

    setCurrentMousePosition({ ...currentMousePosition, [filterName]: filterValue });
  };

  const itemsPerPage = 12;
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = results.slice(indexOfFirstItem, indexOfLastItem);

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  return (
    <div className="search-filters">
      <h2>Recherche par filtres</h2>
      <form onSubmit={handleSearch}>
        {/* ... Autres filtres ... */}
        
        <div className="filter-row">
          <label>Prix :</label>
          <div className="range-filter">
            <span>{currentMousePosition.prix.toFixed(0)} €</span>
            <input
              type="range"
              name="prixMin"
              min="5000"
              max="50000"
              value={filtres.prixMin}
              onChange={handleInputChange}
              onMouseMove={(e) => handleMouseMove(e, "prix")}
              step="1000"
            />
            <span>{currentMousePosition.prix >= 50000 ? "50000" : ""}</span>
          </div>
        </div>

        {/* ... Autres filtres ... */}
        
        <div className="filter-row">
          <label>Année :</label>
          <div className="range-filter">
            <span>{currentMousePosition.annee.toFixed(0)}</span>
            <input
              type="range"
              name="anneeMin"
              min="2000"
              max="2023"
              value={filtres.anneeMin}
              onChange={handleInputChange}
              onMouseMove={(e) => handleMouseMove(e, "annee")}
              step="1"
            />
            <span>{currentMousePosition.annee >= 2023 ? "2023" : ""}</span>
          </div>
        </div>

        {/* ... Autres filtres ... */}
        
        <div className="filter-row">
          <label>Kilométrage :</label>
          <div className="range-filter">
            <span>{currentMousePosition.kilometrage.toFixed(0)}</span>
            <input
              type="range"
              name="kilometrageMin"
              min="0"
              max="200000"
              value={filtres.kilometrageMin}
              onChange={handleInputChange}
              onMouseMove={(e) => handleMouseMove(e, "kilometrage")}
              step="1000"
            />
            <span>{currentMousePosition.kilometrage >= 200000 ? "200000" : ""}</span>
          </div>
        </div>

        {/* ... Autres filtres ... */}
        
        <div className="filter-row">
          <button type="submit">Rechercher</button>
        </div>
      </form>

      {/* ... Résultats et pagination ... */}
    </div>
  );
};

export default SearchFilters;
