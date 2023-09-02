import React from "react";
import ReactDOM from "react-dom";
import { Car } from "./car";

const Voitureinfo = {
    name: "Renault Clio",
    model: "2023",
    year: 2023,
    price: 20000,
    photos: ["https://upload.wikimedia.org/wikipedia/commons/thumb/e/e1/Renault_Clio_IV_2019_front.jpg/1200px-Renault_Clio_IV_2019_front.jpg"],
  };
  
  export default Voitureinfo;
  
//   const Contact = () => {
//     return (
//       <div>
//         <h3>Contact</h3>
//         <form action="#">
//           <input type="email" placeholder="Votre adresse e-mail">
//           <input type="submit" value="Envoyer">
//         </form>
//       </div>
//     );
//   };
  
//   export { Contact };
  
  const App = () => {
    const cars = [
      {
        name: "Renault Clio",
        model: "2023",
        year: 2023,
        price: 20000,
        photos: ["https://upload.wikimedia.org/wikipedia/commons/thumb/e/e1/Renault_Clio_IV_2019_front.jpg/1200px-Renault_Clio_IV_2019_front.jpg"],
      },
      {
        name: "Peugeot 208",
        model: "2023",
        year: 2023,
        price: 22000,
        photos: ["https://upload.wikimedia.org/wikipedia/commons/thumb/a/a6/Peugeot_208_II_2019_rear.jpg/1200px-Peugeot_208_II_2019_rear.jpg"],
      },
    ];
  
    return (
      <div>
        {cars.map((car) => (
          <Car key={car.name} {...car} />
        ))}
        {/* <Contact /> */}
      </div>
    );
  };
  
  ReactDOM.render(<App />, document.getElementById("root"));
  