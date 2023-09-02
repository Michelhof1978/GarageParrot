import React, { useState, useEffect } from 'react';

const CarPage = ({ car }) => {
  return (
    <div className="car-page">
      <img src={car.image} alt={car.model} />
      <h1>{car.model}</h1>
      <p>{car.make}</p>
      <p>Year: {car.year}</p>
      <p>Price: ${car.price}</p>
      <p>Mileage: {car.mileage} miles</p>
      <p>Color: {car.color}</p>
      <p>Transmission: {car.transmission}</p>
    </div>
  );
};

export default CarPage;
