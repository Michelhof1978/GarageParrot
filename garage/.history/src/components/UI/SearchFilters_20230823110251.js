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

  const [results, setResults] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);

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
        <div className="filter-row">
          <label>Prix :</label>
          <div className="slider-container">
            <input
              type="range"
              name="prixMin"
              min="5000"
              max="50000"
              value={filtres.prixMin}
              onChange={handleInputChange}
              step="1000"
            />
            <span>{filtres.prixMin} €</span>
          </div>
          <div className="slider-container">
            <input
              type="range"
              name="prixMax"
              min="5000"
              max="50000"
              value={filtres.prixMax}
              onChange={handleInputChange}
              step="1000"
            />
            <span>{filtres.prixMax} €</span>
          </div>
        </div>
        
        <div className="filter-row">
          <label>Année :</label>
          <input
            type="number"
            name="anneeMin"
            value={filtres.anneeMin}
            onChange={handleInputChange}
          />
          <input
            type="number"
            name="anneeMax"
            value={filtres.anneeMax}
            onChange={handleInputChange}
          />
        </div>
        
        <div className="filter-row">
          <label>Kilométrage :</label>
          <input
            type="number"
            name="kilometrageMin"
            value={filtres.kilometrageMin}
            onChange={handleInputChange}
          />
          <input
            type="number"
            name="kilometrageMax"
            value={filtres.kilometrageMax}
            onChange={handleInputChange}
          />
        </div>
        
        <div className="filter-row">
          <label>Famille :</label>
          <div>
            <label>
              <input
                type="checkbox"
                name="famille"
                value="utilitaire"
                onChange={handleCheckboxChange}
              />
              Utilitaire
            </label>
            <label>
              <input
                type="checkbox"
                name="famille"
                value="berline"
                onChange={handleCheckboxChange}
              />
              Berline
            </label>
            <label>
              <input
                type="checkbox"
                name="famille"
                value="familiale"
                onChange={handleCheckboxChange}
              />
              Familiale
            </label>
            <label>
              <input
                type="checkbox"
                name="famille"
                value="citadine"
                onChange={handleCheckboxChange}
              />
              Citadine
            </label>
            <label>
              <input
                type="checkbox"
                name="famille"
                value="suv"
                onChange={handleCheckboxChange}
              />
              SUV
            </label>
          </div>
        </div>
        
        <div className="filter-row">
          <label>Marque :</label>
          <select
            name="marque"
            value={filtres.marque}
            onChange={handleInputChange}
          >
            <option value="">Toutes les marques</option>
            <option value="peugeot">Peugeot</option>
            <option value="renault">Renault</option>
            <option value="citroen">Citroen</option>
            {/* ... autres options de marque ... */}
          </select>
        </div>
        
        <div className="filter-row">
          <label>Modèle :</label>
          <input
            type="text"
            name="modele"
            value={filtres.modele}
            onChange={handleInputChange}
          />
        </div>
        
        <div className="filter-row">
          <button type="submit">Rechercher</button>
        </div>
      </form>
      
      <div className="results">
        {currentItems.map((item, index) => (
          <div key={index} className="result-item">
            {/* Afficher les détails de l'item */}
          </div>
        ))}
      </div>
      
      <div className="pagination">
        {Array.from({ length: totalPages }, (_, index) => index + 1).map(pageNumber => (
          <span
            key={pageNumber}
            className={`page-number ${currentPage === pageNumber ? "active" : ""}`}
            onClick={() => handlePageChange(pageNumber)}
          >
            {pageNumber}
          </span>
        ))}
      </div>
    </div>
  );
};

export default SearchFilters;
