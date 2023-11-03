import React, { Component } from 'react';
import Navbar from '../../components/UI/Navbar/Navbar';
import { Warning: Invalid DOM property `class`. Did you mean `className`?
at div
at div
at div
at div
at Navbar
at div
at Site (http://localhost:3000/static/js/bundle.js:3335:1)
at Router (http://localhost:3000/static/js/bundle.js:57143:15)
at BrowserRouter (http://localhost:3000/static/js/bundle.js:55258:5)
at div
at App
history.ts:501 No routes matched location "/" 
history.ts:501 No routes matched location "/" 
localhost/:1 Error while trying to use the following icon from the Manifest: http://localhost:3000/logo192.png (Download error or resource isn't a valid image)
﻿

, Routes, Route } from 'react-router-dom';
import { Link } from 'react-router-dom';
import Footer from '../../components/Footer/Footer';
import VehiculesDetails from '../../components/Vehicules/VehiculesDetails';
import VehiculesFilters from '../../components/Vehicules/VehiculesFilters';
import Contact from '../../containers/Site/Contact';
import Reparation from '../../containers/Site/Reparation';
import AvisClients from '../../components/Avis/AvisClients';
import Accueil from '../../containers/Site/Accueil'






class Site extends Component {
  render() {
    return (
          <>
            <div className='site'>
        <Navbar />
      
        <Routes>
        <Route path="/accueil" element={<Accueil />} />
            <Route path="/pneumatique" element={<h1>Pneumatique</h1>} />
            <Route path="/freinage" element={<h1>Freinage</h1>} />
            <Route path="/mecanique" element={<h1>Mecanique </h1>} />
            <Route path="/entretien" element={<h1>Entretien </h1>} />
            <Route path="/parebrise" element={<h1>PareBrise</h1>} />
            <Route path="/vidange" element={<h1>Vidange</h1>} />
            <Route path="/voitureoccasion" element={<VehiculesFilters />} />
            <Route path="/vehiculedetails/:id" element={<VehiculesDetails />} />
            <Route path="/contact" element={<Contact/>} />
            <Route path="/reparation" element={<Reparation/>} />
            <Route path="/avisclients" element={<AvisClients/>} />

        </Routes>
        </div>
        <div className='minsite'></div> {/*  //pour le footer */}

        <Footer />
        </>
    );
  }
}

export default Site;






  