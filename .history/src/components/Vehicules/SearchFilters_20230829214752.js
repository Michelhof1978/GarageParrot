import React, { useState, useEffect } from "react";

const SearchFilters = ({ onApplyFilters }) => {
  const [selectedKilometrage, setSelectedKilometrage] = useState("");
  const [selectedAnnee, setSelectedAnnee] = useState("");
  const [selectedEnergie, setSelectedEnergie] = useState("");
  const [selectedFamille, setSelectedFamille] = useState("");
  const [selectedMarque, setSelectedMarque] = useState("");

  const handleApplyFilters = () => {
    const filters = {
      kilometrage: selectedKilometrage,
      annee: selectedAnnee,
      energie: selectedEnergie,
      famille: selectedFamille,
      marque: selectedMarque,
    };
    onApplyFilters(filters);
  };

  return (
    <div className="search-filters">
      <div className="filter-group">
        <label htmlFor="kilometrage">Kilométrage :</label>
        <input
          type="text"
          id="kilometrage"
          value={selectedKilometrage}
          onChange={(e) => setSelectedKilometrage(e.target.value)}
        />
      </div>
      <div className="filter-group">
        <label htmlFor="annee">Année :</label>
        <input
          type="text"
          id="annee"
          value={selectedAnnee}
          onChange={(e) => setSelectedAnnee(e.target.value)}
        />
      </div>
      <div className="filter-group">
        <label htmlFor="energie">Énergie :</label>
        <input
          type="text"
          id="energie"
          value={selectedEnergie}
          onChange={(e) => setSelectedEnergie(e.target.value)}
        />
      </div>
      <div className="filter-group">
        <label htmlFor="famille">Famille :</label>
        <input
          type="text"
          id="famille"
          value={selectedFamille}
          onChange={(e) => setSelectedFamille(e.target.value)}
        />
      </div>
      <div className="filter-group">
        <label htmlFor="marque">Marque :</label>
        <input
          type="text"
          id="marque"
          value={selectedMarque}
          onChange={(e) => setSelectedMarque(e.target.value)}
        />
      </div>
      <button onClick={handleApplyFilters}>Appliquer les filtres</button>
    </div>
  );
};

export default SearchFilters;
