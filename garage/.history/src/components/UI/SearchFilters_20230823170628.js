import React, { useState } from "react";
import axios from "axios";
import "../../App.css";












const SearchFilters = ({ onSearch }) => {
  const [filtres, setFiltres] = useState({
    famille: [],
    marque: "",
    anneeMin: 2000,
    anneeMax: 2023,
    prixMax: 5000,
    kilometrageMax: 0,
  });

  const [marques, setMarques] = useState([]);
  const [results, setResults] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 20;

  useEffect(() => {
    fetchMarques();
  }, []);

  const fetchMarques = async () => {
    try {
      const response = await axios.get("/path-to-your-api/get-marques.php");
      setMarques(response.data);
    } catch (error) {
      console.error("Erreur lors de la récupération des marques :", error);
    }
  };

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFiltres({
      ...filtres,
      [name]: value,
    });
  };

  const handleFamilleChange = (event) => {
    // ... (votre implémentation actuelle)
  };

  const handleSearch = async () => {
    try {
      const response = await axios.post("/path-to-your-api/search-vehicules.php", filtres);
      setResults(response.data);
      setCurrentPage(1);
    } catch (error) {
      console.error("Erreur lors de la recherche :", error);
    }
  };

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = results.slice(indexOfFirstItem, indexOfLastItem);

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  return (
    <div className="search-filters">
      <div className="filter-row">
        <label>Marque :</label>
        <select
          name="marque"
          value={filtres.marque}
          onChange={handleInputChange}
        >
          <option value="">Sélectionner une marque</option>
          {marques.map((marque) => (
            <option key={marque.id} value={marque.nom}>
              {marque.nom}
            </option>
          ))}
        </select>
      </div>
      {/* ... (autres filtres) */}
      <button onClick={handleSearch}>Rechercher</button>
      <div className="results">
        {currentItems.map((item, index) => (
          <div key={index} className="result-item">
            {/* Afficher les détails de l'élément */}
            <p>{item.nom}</p>
            <p>{item.marque}</p>
            {/* Autres détails à afficher */}
          </div>
        ))}
      </div>
      <div className="pagination">
        {Array.from({ length: Math.ceil(results.length / itemsPerPage) }).map((_, index) => (
          <button key={index} onClick={() => handlePageChange(index + 1)}>
            {index + 1}
          </button>
        ))}
      </div>
    </div>
  );
};

export default SearchFilters;
