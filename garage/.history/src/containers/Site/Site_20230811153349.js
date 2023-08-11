import React, { Component } from 'react';
import Navbar from '../../components/UI/Navbar/navbar';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Accueil from '../Site/accueil';
import DropdownMenu from './DropdownMenu'; // Composant du menu déroulant

class Site extends Component {
    render() {
      return (
        <>
          <Navbar />

          <Routes>
              <Route path="/" element={<Accueil/>}  />            

{/* Route pour le menu déroulant Réparation véhicules */}
<Route path="/reparation" element={<DropdownMenu menuName="Réparation véhicules" />} />
        <Route path="/pneumatique" element={<h1>Pneumatique</h1>} />
        <Route path="/freinage" element={<h1>Freinage</h1>} />
        <Route path="/mecanique" element={<h1>Mécanique</h1>} />
        <Route path="/entretien" element={<h1>Entretien</h1>} />
        <Route path="/parbrise" element={<h1>Par-Brise</h1>} />
        <Route path="/vidange" element={<h1></h1>} />

             <Route path="/contact" element={<h1>Page de Contact</h1>}  />
             
          </Routes>
        </>
      );
    }
  }
  
  export default Site;
  // render()  {
  //   return (
  //     <>
  //       <NavBar />
  //       <Routes>
  //         <Route path="/" element={<Accueil />}  />
  //         <Route path="/contact" element={<h1>Page de Contact</h1>}  />
  //         <Route path="*" element={<h1>erreur 404</h1>} />
  //       </Routes>
  //     </>    
  //   );
  // }