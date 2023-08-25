import React from 'react';
import CarDetails from '../components/Vehicules/cardetails';

const CarList = ({ cars }) => {
  return (
    <div className="car-list">
      {cars.map((car, index) => (
        <CarDetails key={index} vehiculeId={car.idVehicule} />
      ))}
    </div>
  );
};

export default CarList;

