import React, { Component } from 'react';
import Navbar from '../../components/UI/Navbar/navbar';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Accueil from '../Site/accueil';
import { Link } from 'react-router-dom';
import Error from '../../components/Error/Error';
import Footer from '../../components/Footer/Footer';

class Site extends Component {
  render() {
    return (
          <>
          <div></div>
        <Navbar />

        <Routes>
          <Route path="/" element={<Accueil />} />
         
          <Route path="/pneumatique" element={<h1>Pneumatique</h1>} />
          <Route path="/freinage" element={<h1>Freinage</h1>} />
          <Route path="/mecanique" element={<h1>Mecanique </h1>} />
          <Route path="/entretien" element={<h1>Entretien </h1>} />
          <Route path="/parebrise" element={<h1>PareBrise</h1>} />
          <Route path="/vidange" element={<h1>Vidange</h1>} />
          <Route path="/voitureoccasion" element={<h1>voiture d'occasion</h1>} />
          <Route path="/contact" element={<h1>Page de Contact</h1>} />
          <Route path="*" element= <Error type="404">La page n'existe pas</Error> />
        </Routes>

        <div className='minsite'></div>

        <Footer />
        </>
    );
  }
}

export default Site;






  