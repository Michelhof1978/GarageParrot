import React, { Component } from 'react';
import Navbar from '../../components/UI/Navbar/navbar';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Accueil from '../Site/accueil';
import { Link } from 'react-router-dom';

class Site extends Component {
    render() {
      return (
        <>
          <Navbar />

          <Routes>
              <Route path="/" element={<Accueil/>}  />            

{/* Route pour le menu déroulant Réparation véhicules */}
<Route path="/reparation" element={
              <div className="dropdown-menu bg-light">
                <Link className="dropdown-item text-primary" to="/pneumatique">Pneumatique</Link>
                <Link className="dropdown-item text-primary" to="/freinage">Freinage</Link>
                <Link className="dropdown-item text-primary" to="/mecanique">Mécanique</Link>
                <Link className="dropdown-item text-primary" to="/entretien">Entretien</Link>
                <Link className="dropdown-item text-primary" to="/parebrise">Pare-Brise</Link>
                <Link className="dropdown-item text-primary" to="/vidange">Vidange</Link>
              </div>
            } />
              <Route
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