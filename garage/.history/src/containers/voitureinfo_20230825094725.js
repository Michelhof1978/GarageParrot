import React from 'react';
import CarDetails from '../components/Vehicules/cardetails';

const App = () => {
  const cars = [/* tableau de voitures */]; // Assurez-vous d'avoir un tableau de voitures ici

  return (
    <div className="app">
      <h1>Car List</h1>
      <CarDetailscars={cars} />
    </div>
  );
};

export default App;

