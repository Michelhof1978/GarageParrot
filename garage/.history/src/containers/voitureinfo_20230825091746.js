import React from 'react';
import CarDetails from './CarDetails'; // Assurez-vous de mettre le bon chemin vers votre composante

const CarList = ({ cars }) => {
  return (
    <div className="car-list">
      {cars.map((car, index) => (
        <CarDetails key={index} car={car} />
      ))}
    </div>
  );
};

export default CarList;
