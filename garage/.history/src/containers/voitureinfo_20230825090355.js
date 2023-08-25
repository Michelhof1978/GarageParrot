// src/App.js
import React, { useState } from 'react';

function VehicleListing() {
  const [vehicle, setVehicle] = useState({
    make: '',
    model: '',
    year: '',
    price: '',
    description: ''
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setVehicle((prevVehicle) => ({
      ...prevVehicle,
      [name]: value
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log('Submitted Vehicle:', vehicle);
    // Ici, vous pouvez ajouter du code pour envoyer les données au backend ou effectuer d'autres actions.
  };

  return (
    <div>
      <h2>Créer une fiche descriptive de véhicule</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Marque:</label>
          <input
            type="text"
            name="make"
            value={vehicle.make}
            onChange={handleChange}
          />
        </div>
        <div>
          <label>Modèle:</label>
          <input
            type="text"
            name="model"
            value={vehicle.model}
            onChange={handleChange}
          />
        </div>
        <div>
          <label>Année:</label>
          <input
            type="text"
            name="year"
            value={vehicle.year}
            onChange={handleChange}
          />
        </div>
        <div>
          <label>Prix:</label>
          <input
            type="text"
            name="price"
            value={vehicle.price}
            onChange={handleChange}
          />
        </div>
        <div>
          <label>Description:</label>
          <textarea
            name="description"
            value={vehicle.description}
            onChange={handleChange}
          />
        </div>
        <button type="submit">Créer la fiche</button>
      </form>
    </div>
  );
}

export default VehicleListing;
