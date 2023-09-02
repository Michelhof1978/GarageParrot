import React, { Component } from 'react';
import Navbar from '../../components/UI/Navbar/navbar';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Accueil from '../Site/accueil';
import { Link } from 'react-router-dom';
import Footer from '../../components/Footer/footer';
<<<<<<< HEAD
<<<<<<< HEAD
=======
=======
>>>>>>> 894c2f3ba7690162432f51bc753ab052c49d913f
import Carsearch from '../Site/voitureoccasion';
import VehiculeDetails from '../../components/Vehicules/VehiculeDetails';


<<<<<<< HEAD
>>>>>>> 687ae51 (mise en place fiche voiture individuelle lors du clic bouton sur carte)
=======
>>>>>>> 894c2f3ba7690162432f51bc753ab052c49d913f

class Site extends Component {
  render() {
    return (
          <>
            <div className='site'>
        <Navbar />
      
        <Routes>
          <Route path="/" element={<Accueil />} />
         
          <Route path="/pneumatique" element={<h1>Pneumatique</h1>} />
          <Route path="/freinage" element={<h1>Freinage</h1>} />
          <Route path="/mecanique" element={<h1>Mecanique </h1>} />
          <Route path="/entretien" element={<h1>Entretien </h1>} />
          <Route path="/parebrise" element={<h1>PareBrise</h1>} />
          <Route path="/vidange" element={<h1>Vidange</h1>} />
<<<<<<< HEAD
<<<<<<< HEAD
          <Route path="/voitureoccasion" element={<h1>voiture d'occasion</h1>} />
=======
          <Route path="/voitureoccasion" element={<Carsearch />} />
          <Route path="/voituredetails/:id" element={<VehiculeDetails/>} />
>>>>>>> 687ae51 (mise en place fiche voiture individuelle lors du clic bouton sur carte)
=======
          <Route path="/voitureoccasion" element={<Carsearch />} />
          <Route path="/voituredetails/:id" element={<VehiculeDetails/>} />
>>>>>>> 894c2f3ba7690162432f51bc753ab052c49d913f
          <Route path="/contact" element={<h1>Page de Contact</h1>} />
        </Routes>
        </div>
        <div className='minsite'></div> {/*  //pour le footer */}

        <Footer />
        </>
    );
  }
}

export default Site;






  