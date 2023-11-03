import React, { Component } from 'react';
import Navbar from '../../components/UI/Navbar/navbar';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Accueil from '../Site/accueil';
import { Link } from 'react-router-dom';
import Footer from '../../components/Footer/footer';
import Carsearch from '../Site/voitureoccasion';
import VehiculeDetails from '../../components/Vehicules/VehiculeDetails';
import VehiculeFilters from '../../components/Vehicules/VehiculeFilters';
import Contact from '../../containers/Site/contact';




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
            <Route path="/voitureoccasion" element={<VehiculeFilters />} />
            <Route path="/vehiculedetails/:id" element={<VehiculeDetails />} />
            <Route path="/contact" element={<Contact/>} />
            <Route path="/contact" element={<Contact/>} />
        </Routes>
        </div>
        <div className='minsite'></div> {/*  //pour le footer */}

        <Footer />
        </>
    );
  }
}

export default Site;






  