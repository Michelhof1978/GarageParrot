import React, { Component } from 'react';
import Navbar from '../../components/UI/Navbar/navbar';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Accueil from '../Site/accueil';
import { Link } from 'react-router-dom';

class Site extends Component {
  render() {
    return (
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Accueil />} />
          <Route path="/reparation" element={<Accueil />} />
          <Route path="/pneumatique" element={<Pneumatique />} />
          <Route path="/freinage" element={<Freinage />} />
          <Route path="/mecanique" element={<Mecanique />} />
          <Route path="/entretien" element={<Entretien />} />
          <Route path="/parebrise" element={<PareBrise />} />
          <Route path="/vidange" element={<Vidange />} />
          <Route path="/voitureoccasion" element={<h1>voiture d'occasion</h1>} />
          <Route path="/contact" element={<h1>Page de Contact</h1>} />
        </Routes>
      </Router>
    );
  }
}

export default Site;






  