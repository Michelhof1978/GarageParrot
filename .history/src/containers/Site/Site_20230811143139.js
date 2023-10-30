import React, { Component } from 'react';
import Navbar from '../../components/UI/Navbar/navbar';

class Site extends Component {
    render() {
      return (
        <>
          <Navbar />
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