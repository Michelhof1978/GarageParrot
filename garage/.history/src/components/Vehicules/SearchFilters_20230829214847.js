import React, { useState, useEffect } from "react";
import axios from "axios";

const SearchFilters = () => {
  const [vehiculeOptions, setVehiculeOptions] = useState([]);
  const [selectedFamille, setSelectedFamille] = useState("");
  const [selectedMarque, setSelectedMarque] = useState("");
  const [selectedModele, setSelectedModele] = useState("");
  const [selectedEnergie, setSelectedEnergie] = useState("");

  useEffect(() => {
    // Récupérer toutes les données de chaque véhicule depuis l'API
    axios.get("http://localhost/garageback/front/voiturefiche/all")
      .then((response) => {
        setVehiculeOptions(response.data);
      })
      .catch((error) => {
        console.error("Erreur lors de la récupération des véhicules :", error);
      });
  }, []);

  // Reste du code...

  return (
    <div className="search-filters">
      <h2>Filtres de recherche</h2>
      <div className="filter-group">
        <label htmlFor="famille">Famille :</label>
        <select
          id="famille"
          name="famille"
          value={selectedFamille}
          onChange={handleFamilleChange}
        >
          <option value="">Toutes les familles</option>
          {vehiculeOptions.map((vehicule) => (
            <option key={vehicule.idVehicule} value={vehicule.famille}>
              {vehicule.famille}
            </option>
          ))}
        </select>
      </div>
      {/* Ajoutez des filtres pour les autres attributs (marque, modèle, énergie) de la même manière */}
    </div>
  );
};

export default SearchFilters;
