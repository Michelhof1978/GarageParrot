import React, { useState, useEffect } from "react";
import axios from "axios";
import VehiculeCard from "./VehiculeCard";

const VehiculeFilter = () => {
  const [marque, setMarque] = useState("");
  const [prixMin, setPrixMin] = useState(5000);
  const [prixMax, setPrixMax] = useState(50000);
  const [anneeMin, setAnneeMin] = useState(2000);
  const [anneeMax, setAnneeMax] = useState(2023);
  const [kilometrageMin, setKilometrageMin] = useState(0);
  const [kilometrageMax, setKilometrageMax] = useState(200000);
  const [searchResults, setSearchResults] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `http://localhost/garageback/front/voiturefiche/all/?marque=${marque}&prixMin=${prixMin}&prixMax=${prixMax}&anneeMin=${anneeMin}&anneeMax=${anneeMax}&kilometrageMin=${kilometrageMin}&kilometrageMax=${kilometrageMax}`
        );
        setSearchResults(response.data);
      } catch (error) {
        console.error("Erreur lors de la recherche :", error);
      }
    };

    fetchData();
  }, [marque, prixMin, prixMax, anneeMin, anneeMax, kilometrageMin, kilometrageMax]);

  return (
    <div className="vehicule-filter">
      <h2>Filtrer les véhicules</h2>

      <div className="filter-row">
        <label>Marque :</label>
        <input
          type="text"
          value={marque}
          onChange={(e) => setMarque(e.target.value)}
        />
      </div>

      <div className="filter-row">
        <label>Prix :</label>
        <input
          type="range"
          min="5000"
          max="50000"
          value={prixMin}
          onChange={(e) => setPrixMin(e.target.value)}
        />
        <span>{prixMin} €</span>
        <input
          type="range"
          min="5000"
          max="50000"
          value={prixMax}
          onChange={(e) => setPrixMax(e.target.value)}
        />
        <span>{prixMax} €</span>
      </div>

      <div className="filter-row">
        <label>Année :</label>
        <input
          type="range"
          min="2000"
          max="2023"
          value={anneeMin}
          onChange={(e) => setAnneeMin(e.target.value)}
        />
        <span>{anneeMin}</span>
        <input
          type="range"
          min="2000"
          max="2023"
          value={anneeMax}
          onChange={(e) => setAnneeMax(e.target.value)}
        />
        <span>{anneeMax}</span>
      </div>

      <div className="filter-row">
        <label>Kilométrage :</label>
        <input
          type="range"
          min="0"
          max="200000"
          value={kilometrageMin}
          onChange={(e) => setKilometrageMin(e.target.value)}
        />
        <span>{kilometrageMin} km</span>
        <input
          type="range"
          min="0"
          max="200000"
          value={kilometrageMax}
          onChange={(e) => setKilometrageMax(e.target.value)}
        />
        <span>{kilometrageMax} km</span>
      </div>

      <div className="results">
        {searchResults.map((vehicule) => (
          <VehiculeCard key={vehicule.idVehicule} vehicule={vehicule} />
        ))}
      </div>
    </div>
  );
};

export default VehiculeFilter;
