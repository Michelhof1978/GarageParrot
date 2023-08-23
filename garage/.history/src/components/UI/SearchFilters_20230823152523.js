
import React, { useState, useEffect } from "react"; 
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
      {/* ... */}
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
      {/* ... */}
    </div>
  );
};

export default SearchFilters;
