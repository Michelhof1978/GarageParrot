import React, { useState, useEffect } from "react";
import axios from "axios";
import "../../App.css";
import VehiculeCard from "./ehiculeCard";

//La fonction SearchFilters prend en paramètre une fonction onSearch qui sera appelée lorsque l'utilisateur clique sur le bouton "Rechercher".
const SearchFilters = ({ onSearch }) => {
  const [filtres, setFiltres] = useState({
    famille: [],
    marque: "",
    anneeMin: 2000,
    anneeMax: 2023,
    prixMax: 5000,
    kilometrageMax: 0,
  });

  //La fonction useState est utilisée pour stocker les filtres de l'utilisateur
  const [searchResults, setSearchResults] = useState([]);

  const handleSearch = async () => {
    try {
      const response = await axios.get(
        `http://localhost/garageback/front/voiturefiche/all/?marque=${filtres.marque}&anneeMin=${filtres.anneeMin}&anneeMax=${filtres.anneeMax}`
      );
      setSearchResults(response.data); // Mettre à jour les résultats de la recherche
    } catch (error) {
      console.error("Erreur lors de la recherche :", error);
    }
  };

  const [currentMousePosition, setCurrentMousePosition] = useState({
    prix: 5000,
    annee: 2000,
    kilometrage: 0,
  });

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

  const handleFamilleChange = (event) => {
    const { value } = event.target;
    if (filtres.famille.includes(value)) {
      setFiltres({
        ...filtres,
        famille: filtres.famille.filter((f) => f !== value),
      });
    } else {
      setFiltres({
        ...filtres,
        famille: [...filtres.famille, value],
      });
    }
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

      <div className="search-results">
        <h3>Résultats de la recherche :</h3>
        <VehiculeCard vehicules={searchResults} />
      </div>

      <ul>
        {getDisplayedResults().map((voiture) => (
          <li key={voiture.id}>
            {voiture.nom} - {voiture.prix} €
          </li>
        ))}
      </ul>

      {/* <Pagination /> */}
    </div>
  );
};

export default SearchFilters;

// //La fonction SearchFilters prend en paramètre une fonction onSearch qui sera appelée lorsque l'utilisateur clique sur le bouton "Rechercher".
// La fonction useState est utilisée pour stocker les filtres de l'utilisateur. Les filtres sont les suivants :
// famille : une liste des familles de voitures que l'utilisateur souhaite inclure dans la recherche.
// marque : la marque de la voiture que l'utilisateur souhaite rechercher.
// anneeMin : l'année de construction minimale de la voiture que l'utilisateur souhaite rechercher.
// anneeMax : l'année de construction maximale de la voiture que l'utilisateur souhaite rechercher.
// prixMin : le prix minimum de la voiture que l'utilisateur souhaite rechercher.
// prixMax : le prix maximum de la voiture que l'utilisateur souhaite rechercher.
// kilometrageMin : le kilométrage minimum de la voiture que l'utilisateur souhaite rechercher.
// kilometrageMax : le kilométrage maximum de la voiture que l'utilisateur souhaite rechercher.
// La fonction handleInputChange est appelée lorsque l'utilisateur modifie un filtre. Elle met à jour le filtre correspondant dans l'état.
// La fonction handleMouseMove est appelée lorsque l'utilisateur passe sa souris sur un curseur de plage. Elle calcule la nouvelle valeur du filtre correspondant et met à jour l'état.
// La fonction handleFamilleChange est appelée lorsque l'utilisateur coche ou décoche une case à cocher dans la section "Famille". Elle met à jour la liste des familles de voitures incluses dans la recherche.
// La fonction getDisplayedResults renvoie les résultats de la recherche, en tenant compte des filtres de l'utilisateur.
// La fonction renderSearchResults affiche les résultats de la recherche.