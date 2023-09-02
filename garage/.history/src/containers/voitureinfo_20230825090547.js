import React, { useState, useEffect } from 'react';
import axios from 'axios';

function VehicleListing() {
  const [vehicles, setVehicles] = useState([]);
  const [formData, setFormData] = useState({
    famille: '',
    marque: '',
    modele: '',
    annee: '',
    // ... autres champs
  });

  useEffect(() => {
    fetchVehicles();
  }, []);

  const fetchVehicles = async () => {
    try {
      const response = await axios.get('/api/vehicles'); // Remplacez par l'URL de votre API
      setVehicles(response.data);
    } catch (error) {
      console.error('Error fetching vehicles:', error);
    }
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value
    }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      await axios.post('/api/vehicles', formData); // Remplacez par l'URL de votre API
      fetchVehicles();
      setFormData({
        famille: '',
        marque: '',
        modele: '',
        annee: '',
        // ... autres champs
      });
    } catch (error) {
      console.error('Error submitting vehicle:', error);
    }
  };

  return (
    <div>
      <h2>Ajouter un véhicule à vendre</h2>
      <form onSubmit={handleSubmit}>
        {/* Ajoutez ici des champs pour chaque attribut de votre table */}
        <button type="submit">Ajouter</button>
      </form>

      <h2>Liste des véhicules</h2>
      <ul>
        {vehicles.map((vehicle) => (
          <li key={vehicle.idVehicule}>{vehicle.marque} {vehicle.modele} - {vehicle.prix} €</li>
        ))}
      </ul>
    </div>
  );
}

export default VehicleListing;
