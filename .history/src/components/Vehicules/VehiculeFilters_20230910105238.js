import React, { useState, useEffect } from "react";
import axios from "axios";
import "../../App.css";
import VehiculeCard from "./VehiculeCard";
import TitreH1 from "../UI/TitreH1/TitreH1";
import BasicCheckbox from "../Filters/BasicCheckbox";
import BasicSelect from "../Filters/BasicSelect";
import BasicRange from "../Filters/BasicRange";

//La fonction SearchFilters prend en paramètre une fonction onSearch qui sera appelée lorsque l'utilisateur clique sur le bouton "Rechercher".
const VehiculeFilters = ({ onSearch }) => {
  const [filtres, setFiltres] = useState({
    famille: [],
    marque: "",
    anneeMin: 2000,
    anneeMax: 2023,
    prixMax: 5000,
    kilometrageMax: 0,
  });
  const handleMarqueChange = (event) => {
    const { value } = event.target;
    setFiltres({
      ...filtres,
      marque: value,
    });
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

    // Si le nouveau prix est inférieur à 5000, on le limite à 5000

    // Limiter la valeur minimale si nécessaire
    if (filterName === "prix" && newValue < 5000) {
      newValue = 5000;
    } else if (filterName === "annee" && newValue < 2000) {
      newValue = 2000;
    } else if (filterName === "kilometrage" && newValue < 0) {
      newValue = 0;
    }

    // Limiter la valeur maximale si nécessaire
    if (newValue > max) {
      newValue = max;
    }

    setCurrentMousePosition({
      ...currentMousePosition,
      [filterName]: newValue,
    });
  };

  const getDisplayedResults = () => {
    const startIndex = (currentPage - 1) * resultsPerPage;
    const endIndex = startIndex + resultsPerPage;
    return searchResults.slice(startIndex, endIndex);
  };

  const [currentPage, setCurrentPage] = useState(1);
  const resultsPerPage = 20; // Nombre de résultats par page

  return (
    <div className="search-filters">
      <h2>Recherche par filtres</h2>
      <div className="checkbox-filter">
        <BasicCheckbox label="Utilitaire" name="famille" value="utilitaire" />
        <BasicCheckbox label="berline" name="famille" value="berline" />
        <BasicCheckbox label="familiale" name="famille" value="familiale" />
        <BasicCheckbox label="citadine" name="famille" value="citadine" />
        <BasicCheckbox label="SUV" name="famille" value="SUV" />
      </div>

      <div className="filter-row">
        <BasicSelect
          label="Marque:"
          name="marque"
          options={[
            { value: "", text: "toutes" },
            { value: "citroen", text: "citroen" },
            { value: "peugeot", text: "peugeot" },
            { value: "kia", text: "kia" },
            { value: "BMW", text: "BMW" },
          ]}
        />
      </div>

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
          {currentMousePosition.prix === 50000 && <span>50000 €</span>}
        </div>
      </div>

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
          {currentMousePosition.annee === 2023 && <span>2023</span>}
        </div>
      </div>

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
          {currentMousePosition.kilometrage === 200000 && (
            <span>200000 km</span>
          )}
        </div>
      </div>

      <button onClick={handleSearch}>Rechercher</button>
    </div>
  );
};

export default VehiculeFilters;