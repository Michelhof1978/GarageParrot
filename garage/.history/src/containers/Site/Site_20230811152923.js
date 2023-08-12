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

              {/* Route pour le menu déroulant Contact */}
          <Route path="/reparation" element={<DropdownMenu menuName="Réparation" />} />

{/* Route pour le menu déroulant Réparation véhicules */}
<Route path="/reparation" element={<DropdownMenu menuName="Réparation véhicules" />} />


<Route path="/pneumatique" element={<h1>Pneumatique</h1>} />
<Route path="/freinage" element={<h1>Freinage</h1>} />
<Route path="/mecanique" element={<h1>Mécanique</h1>} />
{/* Ajoutez d'autres routes pour les éléments du menu */}
</Routes>
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