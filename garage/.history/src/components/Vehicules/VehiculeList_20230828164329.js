import React, { useState, useEffect } from "react";
import axios from "axios";
import VehiculeCard from "./VehiculeCard";
import { generateURL } from './apiUtils';

import React, { useState, useEffect } from "react";
import axios from "axios";
import Pagination from "./Pagination";
import { generateURL } from './apiUtils';

const VehiculeList = ({ filtres }) => {
  const [vehicules, setVehicules] = useState([]);
  const vehiculesPerPage = 20; // Nombre de véhicules à afficher par page
  const [currentPage, setCurrentPage] = useState(1); // Pour gérer la pagination
  const [totalPages, setTotalPages] = useState(0);

  useEffect(() => {
    const url = generateURL(filtres);
    axios.get(url)
      .then(response => {
        setVehicules(response.data);
        setTotalPages(Math.ceil(response.data.length / vehiculesPerPage));
      })
      .catch(error => console.error("Erreur de récupération:", error));
  }, [filtres]);

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const indexLastVehicule = currentPage * vehiculesPerPage;
  const indexFirstVehicule = indexLastVehicule - vehiculesPerPage;
  const displayedVehicules = vehicules.slice(indexFirstVehicule, indexLastVehicule);

  return (
    <div className="container">
      <div className="row">
        {displayedVehicules.map(vehicule => (
          // Afficher chaque véhicule ici
        ))}
      </div>
      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={handlePageChange}
      />
    </div>
  );
};

export default VehiculeList;