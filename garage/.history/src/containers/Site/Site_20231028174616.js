import React, { Component } from 'react';
import Navbar from '../../components/UI/Navbar/Navbar';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Link } from 'react-router-dom';
import Footer from '../../components/Footer/Footer';
import VehiculeFiche from './Vehiculefiche';
import VehiculesFilters from '../../containers/Site/VehiculesFilters';
import Contact from '../../containers/Site/Contact';
import Reparation from '../../containers/Site/Reparation';
import AvisClients from '../../containers/Site/AvisClients';
import Accueil from '../../containers/Site/Accueil'




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
            <Route path="/voitureoccasion" element={<VehiculesFilters />} />
            <Route path="/vehiculefiche/:id" element={<VehiculeFiche />} />
            <Route path="/contact" element={<Contact/>} />
            <Route path="/reparation" element={<Reparation/>} />
            <Route path="/avisclients/" element={<AvisClients/>} />

        </Routes>
        </div>
       

        <Footer />
        </>
    );
  }
}

export default Site;






  