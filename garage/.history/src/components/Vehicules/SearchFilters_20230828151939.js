import React, { useState, useEffect } from "react";
import axios from "axios";
import "../../App.css";
import VehiculeCard from "../../components/Vehicules/vehiculeCard";

//La fonction SearchFilters prend en paramètre une fonction onSearch qui sera appelée lorsque l'utilisateur clique sur le bouton "Rechercher".
const SearchFilters = ({ onSearch }) => {
  const [filtres, setFiltres] = useState({
    famille: [],
    marque: "Toutes",
    anneeMin: 2000,
    anneeMax: 2023,
    prixMin: 5000,
    prixMax: 50000,
    kilometrageMin: 0,
    kilometrageMax: 200000,
  });

  //La fonction useState est utilisée pour stocker les filtres de l'utilisateur
  const [searchResults, setSearchResults] = useState([]);

  const handleSearch = async () => {
    try {
      const response = await axios.get(
        `http://localhost/garageback/front/voiturefiche/all/?marque=${filtres.marque}&anneeMin=${filtres.anneeMin}&anneeMax=${filtres.anneeMax}&famille=${filtres.famille.join(",")}&prixMin=${filtres.prixMin}&prixMax=${filtres.prixMax}&kilometrageMin=${filtres.kilometrageMin}&kilometrageMax=${filtres.kilometrageMax}`
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

    if (name === "marque") {
      setFiltres({
        ...filtres,
        [name]: value
      });
    } else {
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
  }};

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
    <label>Marque :</label>
    <select
        name="marque"
        value={filtres.marque}
        onChange={handleInputChange}
    >
        <option value="Toutes">Toutes</option>
        <option value="Citroen">Citroen</option>
        <option value="Peugeot">Peugeot</option>
        <option value="BMW">BMW</option>
        <option value="Renault">Renault</option>
        <option value="Dacia">Dacia</option>
    </select>
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
        <VehiculeList filtres={vosFiltres} />
      </div>

      <ul>
        {getDisplayedResults().map((voiture) => (
          <li key={voiture.id}>
            {voiture.nom} - {voiture.prix} €
          </li>
        ))}
      </ul>

      <div className="pagination">
        <button
          onClick={() => setCurrentPage(currentPage - 1)}
          disabled={currentPage === 1}
        >
          Précédent
        </button>
        <span>{currentPage}</span>
        <button
          onClick={() => setCurrentPage(currentPage + 1)}
          disabled={
            currentPage === Math.ceil(searchResults.length / resultsPerPage)
          }
        >
          Suivant
        </button>
      </div>
    </div>
  );
};

export default SearchFilters;
