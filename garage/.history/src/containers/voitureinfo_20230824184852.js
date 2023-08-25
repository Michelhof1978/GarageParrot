
import React, { useState, useEffect } from 'react';
import ca

const App = () => {
  const [carDetails, setCarDetails] = useState(null);

  useEffect(() => {
    // Remplacez cette URL par l'URL de votre API pour récupérer les données du véhicule
    fetch('http://localhost/garageback/front/voiturefiche/all')
      .then(response => response.json())
      .then(data => setCarDetails(data))
      .catch(error => console.error('Error fetching car details', error));
  }, []);

  return (
    <div className="app">
      <h1>Car Listing</h1>
      {carDetails ? <CarPage car={carDetails} /> : <p>Loading...</p>}
    </div>
  );
};

export default App;
