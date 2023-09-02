import React from 'react';
import CarList from './CarList'; // Assurez-vous que le chemin est correct

const App = () => {
  const cars = [/* tableau de voitures */]; // Assurez-vous d'avoir un tableau de voitures ici

  return (
    <div className="app">
      <h1>Car List</h1>
      <CarList cars={cars} />
    </div>
  );
};

export default App;

