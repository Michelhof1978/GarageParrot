import React from 'react';
import CarDetails from './CarDetails'; // Assurez-vous de mettre le bone composante

const CarList = ({ cars }) => {
  return ( chemin vers votr
    <div className="car-list">
      {cars.map((car, index) => (
        <CarDetails key={index} car={car} />
      ))}
    </div>
  );
};

export default CarList;
