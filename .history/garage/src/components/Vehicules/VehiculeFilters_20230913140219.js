import React, { useState, useEffect } from "react";
import axios from "axios";
import "../../App.css";
import VehiculeCard from "./VehiculeCard";
import TitreH1 from "../UI/TitreH1/TitreH1";
import BasicCheckbox from "../filters/BasicCheckbox";
import BasicSelect from "../filters/BasicSelect";
 import BasicRange from "../filters/BasicRange";
 


//La fonction SearchFilters prend en paramètre une fonction onSearch qui sera appelée lorsque l'utilisateur clique sur le bouton "Rechercher".
const VehiculeFilters = ({ onSearch }) => {

  //Fonction pour obtenir l'année actuelle en utilisant l'objet date.
const getCurrentYear = () =>  {
  const dateActuelle = new Date();
  const anneeActuelle = dateActuelle.getFullYear();
  return anneeActuelle
  }

  const [filtres, setFiltres] = useState( {// Le composant va suivre l'état local qui est filtres qui va suivre les valeurs séléctionnéées par l'utilisateur.

    famille: [],
    marque: "",
    prix : [5000, 50000],
    kilometrage: [0, 200000], 
    annee: [2000, getCurrentYear() ],// On appelle la fonction getCurrentYear() pour avoir l'année actuelle
  

  });

  const handleChange = (name,newValue) => {//Intermediaure entre parent et fils pour pouvoir modifier le state car entre fils et parent, c'est pas possible, il sera passer en props pour chaque composant fils
    
    setFiltres({ ...filtres, [name]: newValue });//prendra 2 paramètres name (le nom du filtre à mettre à jour et newValue, la nouvelle valeur du filtre.

    console.log(`filtres : `,filtres);
  }

  const handleCheckBoxChange = (e) => {
  console.log(e.target.)
  }

  const annee = getCurrentYear();

  return (

    <>

    <div className="search-filters">
      <h2>Recherche par filtres</h2>
      <div className="checkbox-filter">
        <BasicCheckbox handleCheckBoxChange={handleCheckBoxChange} label="Utilitaire" name="famille" value="utilitaire" />
        <BasicCheckbox handleCheckBoxChange={handleCheckBoxChange} label="berline" name="famille" value="berline" />
        <BasicCheckbox handleCheckBoxChange={handleCheckBoxChange} label="familiale" name="famille" value="familiale" />
        <BasicCheckbox handleCheckBoxChange={handleCheckBoxChange} label="citadine" name="famille" value="citadine" />
        <BasicCheckbox handleCheckBoxChange={handleCheckBoxChange} label="SUV" name="famille" value="SUV" />
      </div>

      <div className="filter-row">
        <BasicSelect
          label="Marque:"
          name="marque"
          handleChange={handleChange}
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
       handleChange={handleChange}
      label = "prix :"
      name = "prix"
      marks = {[{value:5000, label:"5 000 €"}, {value:50000, label:"50 000 €" }]} //En variable pour les props, mettre une accolable
      range = {[5000,50000]}
      />  
      
      </div>


      <div className="filter-row">

      <BasicRange 
       handleChange={handleChange}
      label = "Année :"
      name = "annee"
      marks = {[{value:2000, label:"2000 "}, {value:annee, label:`${annee}`}]} //En variable pour les props, mettre une accolable
      range = {[2000,annee]}
      /> 
        
      </div>

      <div className="filter-row">

      <BasicRange 
       handleChange={handleChange}
      label = "Kilométrage :"
      name = "kilometrage"
      marks = {[{value:0, label:"0 km"}, {value:200000, label:"200 000 km" }]} //En variable pour les props, mettre une accolable
      range = {[0,200000]}
      /> 
        </div>

      <button>Rechercher</button>
    </div>
    </>
  );
}

export default VehiculeFilters;