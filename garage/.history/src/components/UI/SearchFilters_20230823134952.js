import React, { useState } from "react";
import axios from "axios";
import "../../App.css";














        import React, { useState } from "react";
import axios from "axios";

const SearchFilters = ({ onSearch }) => {
  const [filtres, setFiltres] = useState({
    prixMin: 5000,
    prixMax: 50000,
    anneeMin: 2000,
    anneeMax: 2023,
    kilometrageMin: 0,
    kilometrageMax: 200000,
    famille: []
  });

  const [currentMousePosition, setCurrentMousePosition] = useState({
    prix: 5000,
    annee: 2000,
    kilometrage: 0
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    // Assurez-vous que les valeurs ne dépassent pas les maximums
    const newValue = Math.min(Math.max(Number(value), 0), filtres[name.replace("Min", "Max")]);
    setFiltres({
      ...filtres,
      [name]: newValue
    });
  };

  // Le reste du code reste inchangé

  return (
    <div className="search-filters">
      {/* Le reste du code reste inchangé */}
    </div>
  );
};

export default SearchFilters;
