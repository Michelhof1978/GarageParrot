import React from 'react';
import './App.css';

const vehiclesData = [
  {
    id: 1,
    name: "Véhicule 1",
    year: "20XX",
    model: "Modèle du Véhicule",
    mileage: "XXXX km",
    price: "XXXX €",
    image: "vehicle1.jpg",
  },
  // Ajoutez d'autres véhicules ici
];

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Vente de Véhicule</h1>
      </header>
      <main className="App-main">
        <section className="vehicle-listing">
          {vehiclesData.map(vehicle => (
            <article className="vehicle" key={vehicle.id}>
              <img src={vehicle.image} alt={vehicle.name} />
              <h2>{vehicle.name}</h2>
              <ul>
                <li>Année : {vehicle.year}</li>
                <li>Modèle : {vehicle.model}</li>
                <li>Kilométrage : {vehicle.mileage}</li>
                <li>Prix : {vehicle.price}</li>
              </ul>
              <button className="contact-button">Contacter</button>
            </article>
          ))}
        </section>
      </main>
      <footer className="App-footer">
        <p>Contactez-nous au XXX-XXX-XXXX pour plus d'informations.</p>
      </footer>
    </div>
  );
}

export default App;
