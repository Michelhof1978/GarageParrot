import React, { useState, useEffect } from 'react';
import TitreH1 from "../../components/UI/TitreH1/TitreH1";
import logoVoiture from "../../assets/images/logoVoiture.webp";
import bannierevente from "../../assets/images/bannierevente.webp";




function Voitureinfo() {
  const [cars, setCars] = useState([]);

  useEffect(() => {
    // Fetch car data from the backend
    fetch('/api/getCars')
      .then(response => response.json())
      .then(data => setCars(data));
  }, []);

  const handleUpdateCar = (carId, newData) => {
    // Send updated car data to the backend
    fetch(`/api/updateCar/${carId}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(newData),
    })
      .then(response => response.json())
      .then(updatedCar => {
        const updatedCars = cars.map(car => (car.id === updatedCar.id ? updatedCar : car));
        setCars(updatedCars);
      });
  };

  const handleDeleteCar = carId => {
    // Send delete request to the backend
    fetch(`/api/deleteCar/${carId}`, {
      method: 'DELETE',
    })
      .then(response => response.json())
      .then(deletedCar => {
        const filteredCars = cars.filter(car => car.id !== deletedCar.id);
        setCars(filteredCars);
      });
  };

  return (
    <div>
      {cars.map(car => (
        <div key={car.id}>
          <img src={car.image_url} alt={car.make} />
          <p>Make: {car.make}</p>
          <p>Model: {car.model}</p>
          <p>Year: {car.year}</p>
          <p>Price: {car.price}</p>
          <button onClick={() => handleUpdateCar(car.id, { price: car.price - 1000 })}>Reduce Price</button>
          <button onClick={() => handleDeleteCar(car.id)}>Delete Car</button>
          <hr />
        </div>
      ))}
    </div>
  );
}

export default Voitureinfo;
