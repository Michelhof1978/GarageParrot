import React, { Component } from 'react';
import Navbar from '../../components/UI/Navbar/Navbar';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Link } from 'react-router-dom';
import Footer from '../../components/Footer/Footer';
import VehiculeFiche from './VehiculeFiche';
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
            <Route path="/voitureoccasion" element={<VehiculesFilters />} />
            <Route path="/vehiculefiche/:id" element={<VehiculeFiche />} />
            <Route path="/contact" element={<Contact/>} />
            <Route path="/prestation" element={<Prestation/>} />
            <Route path="/prestationfiche/:id" element={<VehiculeFiche />} />
            <Route path="/avisclients/" element={<AvisClients/>} />

        </Routes>
        </div>
       

        <Footer />
        </>
    );
  }
}

export default Site;






  