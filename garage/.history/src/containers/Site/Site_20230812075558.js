import React, { Component } from 'react';
import Navbar from '../../components/UI/Navbar/navbar';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Accueil from '../Site/accueil';
import { Link } from 'react-router-dom';

class Site extends Component {
  render() {
    return (
    
        <Navbar />

        <Routes>
          <Route path="/" element={<Accueil />} />
         
          <Route path="/pneumatique" element={<h1>Pneumatique</h1> />} />
          <Route path="/freinage" element={<<h1>Freinage</h1> />} />
          <Route path="/mecanique" element={<<h1></h1>Mecanique />} />
          <Route path="/entretien" element={<<h1></h1>Entretien />} />
          <Route path="/parebrise" element={<<h1></h1>PareBrise />} />
          <Route path="/vidange" element={<<h1></h1>Vidange />} />
          <Route path="/voitureoccasion" element={<h1>voiture d'occasion</h1>} />
          <Route path="/contact" element={<h1>Page de Contact</h1>} />
        </Routes>
      
    );
  }
}

export default Site;






  