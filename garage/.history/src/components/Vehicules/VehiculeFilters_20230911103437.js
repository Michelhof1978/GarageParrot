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
      <BasicRange 
      label = "prix :"
      name = "prix"
      marks = {[{value:5000, label:"5 000 €"}, {value:50000, label:"50 000 €" }]} //En variable pour les props, mettre une accolable
      range = {[5000,50000]}
      /> 
        <BasicRange 
      label = "prix :"
      name = "prix"
      marks = {[{value:5000, label:"5 000 €"}, {value:50000, label:"50 000 €" }]} //En variable pour les props, mettre une accolable
      range = {[5000,50000]}
      /> 
      </div>


      <div className="filter-row">
      <BasicRange 
      label = "Année :"
      name = "prix"
      marks = {[{value:5000, label:"5 000 €"}, {value:50000, label:"50 000 €" }]} //En variable pour les props, mettre une accolable
      range = {[5000,50000]}
      /> 
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