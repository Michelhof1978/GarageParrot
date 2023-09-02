import React, { useState } from "react";
import axios from "axios";
import "../../App.css";














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
    marque: ""
  });

  const [currentMousePosition, setCurrentMousePosition] = useState({
    prix: 5000,
    annee: 2000,
    kilometrage: 0
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFiltres({
      ...filtres,
      [name]: value
    });
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
      <h2>Recherche par filtres</h2>
      
      {/* Filtre par famille */}
      <div className="filter-row">
        <label>Famille :</label>
        <div className="checkbox-filter">
          <label>
            <input
              type="checkbox"
              name="famille"
              value="utilitaire"
              checked={filtres.famille.includes("utilitaire")}
              onChange={handleFamilleChange}
            />
            Utilitaire
          </label>
          <label>
            <input
              type="checkbox"
              name="famille"
              value="berline"
              checked={filtres.famille.includes("berline")}
              onChange={handleFamilleChange}
            />
            Berline
          </label>
          <label>
            <input
              type="checkbox"
              name="famille"
              value="familiale"
              checked={filtres.famille.includes("familiale")}
              onChange={handleFamilleChange}
            />
            Familiale
          </label>
          <label>
            <input
              type="checkbox"
              name="famille"
              value="citadine"
              checked={filtres.famille.includes("citadine")}
              onChange={handleFamilleChange}
            />
            Citadine
          </label>
          <label>
            <input
              type="checkbox"
              name="famille"
              value="suv"
              checked={filtres.famille.includes("suv")}
              onChange={handleFamilleChange}
            />
            SUV
          </label>
        </div>
      </div>
      
      {/* Filtre par marque */}
      <div className="filter-row">
        <label>Marque :</label>
        <select name="marque" value={filtres.marque} onChange={handleInputChange}>
          <option value="">Toutes les marques</option>
          <option value="Citroen">Citroën</option>
          <option value="Peugeot">Peugeot</option>
          <option value="Renault">Renault</option>
          <option value="Volkswagen">Volkswagen</option>
          <option value="Kia">Kia</option>
        </select>
      </div>

      {/* Filtre de prix */}
      <div className="filter-row">
        <label>Prix :</label>
        <div className="price-filter">
          <span>{filtres.prixMin} €</span>
          <input
            type="range"
            name="prixMin"
            min="5000"
            max="50000"
            step="100"
            value={filtres.prixMin}
            onChange={handleInputChange}
          />
          <span>{filtres.prixMax} €</span>
          <input
            type="range"
            name="prixMax"
            min="5000"
            max="50000"
            step="100"
            value={filtres.prixMax}
            onChange={handleInputChange}
          />
        </div>
      </div>

      {/* Filtre d'année */}
      <div className="filter-row">
        <label>Année :</label>
        <div className="year-filter">
          <span>{filtres.anneeMin}</span>
          <input
            type="range"
            name="anneeMin"
            min="2000"
            max="2023"
            step="1"
            value={filtres.anneeMin}
            onChange={handleInputChange}
          />
          <span>{filtres.anneeMax}</span>
          <input
            type="range"
            name="anneeMax"
            min="2000"
            max="2023"
            step="1"
            value={filtres.anneeMax}
            onChange={handleInputChange}
          />
        </div>
      </div>

      {/* Filtre de kilométrage */}
      <div className="filter-row">
        <label>Kilométrage :</label>
        <div className="mileage-filter">
          <span>{filtres.kilometrageMin} km</span>
          <input
            type="range"
            name="kilometrageMin"
            min="0"
            max="200000"
            step="1000"
            value={filtres.kilometrageMin}
            onChange={handleInputChange}
          />
          <span>{filtres.kilometrageMax} km</span>
          <input
            type="range"
            name="kilometrageMax"
            min="0"
            max="200000"
            step="1000"
            value={filtres.kilometrageMax}
            onChange={handleInputChange}
          />
        </div>
      </div>

      <button onClick={handleSearch}>Rechercher</button>
    </div>
  );
};

export default SearchFilters;

