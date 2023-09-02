import React, { useState } from "react";
import axios from "axios";
import "../../App.css";






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

    // Vérifier les limites maximales
    if (name === "prixMin" || name === "prixMax") {
      newValue = Math.min(Math.max(newValue, 5000), 50000);
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

  const handleMouseMove = (event, filterName) => {
    const { clientX } = event;
    const range = event.target.getBoundingClientRect();
    const position = (clientX - range.left) / range.width;
    const min = filterName === "prix" ? 5000 : filterName === "annee" ? 2000 : 0;
    const max = filterName === "prix" ? 50000 : filterName === "annee" ? 2023 : 200000;
    const newValue = min + position * (max - min);

    setCurrentMousePosition({
      ...currentMousePosition,
      [filterName]: newValue
    });
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
      {/* Filtre de prix */}
      <div className="filter-row">
        <label>Prix :</label>
        <div className="range-filter">
          <span>5000 €</span>
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
          <span>{currentMousePosition.prix.toFixed(0)} €</span>
          <span>{currentMousePosition.prix === 50000 ? "50000 €" : ""}</span>
        </div>
      </div>

      {/* Filtre d'année */}
      <div className="filter-row">
        <label>Année :</label>
        <div className="range-filter">
          <span>2000</span>
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
          <span>{currentMousePosition.annee.toFixed(0)}</span>
          <span>{currentMousePosition.annee === 2023 ? "2023" : ""}</span>
        </div>
      </div>

      {/* Filtre de kilométrage */}
      <div className="filter-row">
        <label>Kilométrage :</label>
        <div className="range-filter">
          <span>0 km</span>
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
          <span>{currentMousePosition.kilometrage.toFixed(0)} km</span>
          <span>{currentMousePosition.kilometrage === 200000 ? "200000 km" : ""}</span>
        </div>
      </div>

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

      <button onClick={handleSearch}>Rechercher</button>
    </div>
  );
};

export default SearchFilters;
