import React, { useState, useEffect } from "react";
import axios from "axios";

const SearchFilters = ({ onFiltersChange }) => {
  const [vehiculeOptions, setVehiculeOptions] = useState([]);
  const [selectedKilometrage, setSelectedKilometrage] = useState("");
  const [selectedAnnee, setSelectedAnnee] = useState("");
  const [selectedEnergie, setSelectedEnergie] = useState("");
  const [selectedFamille, setSelectedFamille] = useState("");
  const [selectedMarque, setSelectedMarque] = useState("");

  useEffect(() => {
    axios.get("http://localhost/garageback/front/voiturefiche/all")
      .then((response) => {
        setVehiculeOptions(response.data);
      })
      .catch((error) => {
        console.error("Erreur lors de la récupération des véhicules :", error);
      });
  }, []);

  useEffect(() => {
    // Call the parent component's function to pass the selected filters
    onFiltersChange({
      kilometrage: selectedKilometrage,
      annee: selectedAnnee,
      energie: selectedEnergie,
      famille: selectedFamille,
      marque: selectedMarque,
    });
  }, [selectedKilometrage, selectedAnnee, selectedEnergie, selectedFamille, selectedMarque, onFiltersChange]);

  // Rest of the component code...

  return (
    <div className="search-filters">
      {/* ... */}
      <div className="filter-group">
        <label htmlFor="kilometrage">Kilométrage :</label>
        <input type="text" id="kilometrage" value={selectedKilometrage} onChange={handleKilometrageChange} />
      </div>
      <div className="filter-group">
        <label htmlFor="annee">Année :</label>
        <input type="text" id="annee" value={selectedAnnee} onChange={handleAnneeChange} />
      </div>
      <div className="filter-group">
        <label htmlFor="energie">Énergie :</label>
        <input type="text" id="energie" value={selectedEnergie} onChange={handleEnergieChange} />
      </div>
      <div className="filter-group">
        <label htmlFor="famille">Famille :</label>
        <input type="text" id="famille" value={selectedFamille} onChange={handleFamilleChange} />
      </div>
      <div className="filter-group">
        <label htmlFor="marque">Marque :</label>
        <input type="text" id="marque" value={selectedMarque} onChange={handleMarqueChange} />
      </div>
      {/* ... */}
    </div>
  );
};

export default SearchFilters;
