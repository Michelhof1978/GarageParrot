import React, { useState, useEffect } from "react";
import axios from "axios";
import "../../App.css";
import VehiculeCard from "../../Vehicules/vehiculeCard";

const SearchFilters = ({ onSearch }) => {
  const [filtres, setFiltres] = useState({
    famille: [],
    marque: "",
    anneeMin: 2000,
    anneeMax: 2023,
    prixMin: 5000,
    prixMax: 50000,
    kilometrageMin: 0,
    kilometrageMax: 200000,
  });

  const [searchResults, setSearchResults] = useState([]);

  const handleSearch = async () => {
    try {
      const response = await axios.get(
        `http://localhost/garageback/front/voiturefiche/all/?marque=${filtres.marque}&anneeMin=${filtres.anneeMin}&anneeMax=${filtres.anneeMax}`
      );
      setSearchResults(response.data);
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


  <div className="search-results">
  <h3>Résultats de la recherche :</h3>
  <VehiculeCard vehicules={searchResults} />

</div>

  <ul>
    {getDisplayedResults().map((voiture) => (
      <li key={voiture.id}>{voiture.nom} - {voiture.prix} €</li>
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
      disabled={currentPage === Math.ceil(searchResults.length / resultsPerPage)}
    >
      Suivant
    </button>
  </div>
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
          {currentMousePosition.kilometrage === 200000 && <span>200000 km</span>}
        </div>
      </div>

      <button onClick={handleSearch}>Rechercher</button>
    </div>
  );
};

  return (
    <div className="search-filters">
      {/* Composants de filtres et résultats */}
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