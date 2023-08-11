import React, { Component } from 'react';
import Navbar from '../../components/UI/Navbar/navbar';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
class Site extends Component {
    render() {
      return (
        <>
          <Navbar />
          <Routes>
              <Route path="/" element={<Accueil/>}  />
              <Route path="/a" element={<Parc/>}  />
              <Route path="/contact" element={<h1>Page de Contact</h1>}  />
              <Route path="/mentionLegales" element={<h1>Mentions légales</h1>}  />
              <Route path="*" element={<Error type="404">La Page N'existe Pas</Error>} />
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