import React, { useState, useEffect } from "react";
import axios from "axios";
import "../../App.css";
import VehiculeCard from "./VehiculeCard";
import TitreH1 from "../UI/TitreH1/TitreH1";
import BasicCheckbox from "../Filters/BasicCheckbox";
import BasicSelect from "../Filters/BasicSelect";
import BasicRange from "../Filters/BasicRange";

const getCurrentYear = () =>  {
const dateActuelle = new Date();
const anneeActuelle = dateActuelle.getFullYear();
return anneeActuelle
}

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

  const getCurrentYear = () =>  {
    const dateActuelle = new Date();
    const anneeActuelle = dateActuelle.getFullYear();
    return anneeActuelle
    }
  
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
      
      </div>


      <div className="filter-row">

      <BasicRange 
      label = "Année :"
      name = "annee"
      marks = {[{value:2000, label:"2000 "}, {value:getCurrentYear(), label: `${}`]} //En variable pour les props, mettre une accolable
      range = {[2000,2023]}
      /> 
        
      </div>

      <div className="filter-row">

      <BasicRange 
      label = "Kilométrage :"
      name = "kiolmetrage"
      marks = {[{value:0, label:"0 km"}, {value:200000, label:"200 000 km" }]} //En variable pour les props, mettre une accolable
      range = {[0,200000]}
      /> 
        
      <button onClick={handleSearch}>Rechercher</button>
    </div>
  );
;

export default VehiculeFilters;