

import React from "react";
import bannertop from "../../../assets/images/bannertop.webp";
import logo from "../../../assets/images/logo2.webp";
import banner from "../../../assets/images/bannier.webp";
import sousbanner from "../../../assets/images/sousbanniere.webp";
import iconespacepro from "../../../assets/images/iconespacepro.webp";

//Composant stateless
const Navbar = (props) => (
  <>
  <div class="container-fluid"> 
    <div class="row">
      <div class="col-12 text-center p-0"> 
      <img className="img-fluid" src={bannertop} alt="Logo Garage PARROT" />
      </div>
    </div>
  </div>

  

<div className="row">
    <div className="col-3">
        <a className="navbar-brand" href="#">
             <img className="img-fluid" src={logo} alt="Logo Garage PARROT" />
        </a>
    </div>

    <div className="col-6">
         <img className="img-fluid" src={sousbanner} alt="Logo Garage PARROT" />
    </div>

    <div className="col-3">
         <img className="img-fluid" src={iconespacepro} alt="Logo Garage PARROT" />
    </div>
</div>



    <nav className="navbar navbar-expand-lg bg-primary w-75 " data-bs-theme="dark">
      <div className="container-fluid">

       

        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarColor01" aria-controls="navbarColor01" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarColor01">
          <ul className="navbar-nav me-auto">

            <li className="nav-item">
              <a className="nav-link active" href="#">Accueil
                <span className="visually-hidden">(current)</span>
              </a>
            </li>

            <li className="nav-item">
              <a className="nav-link" href="#">Voitures D'occasion</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">Nous Contacter</a>
            </li>
           
            <li className="nav-item dropdown">
              <a className="nav-link dropdown-toggle" data-bs-toggle="dropdown" href="#" role="button" aria-haspopup="true" aria-expanded="false">R</a>
              <div className="dropdown-menu">
                <a className="dropdown-item" href="#">Action</a>
                <a className="dropdown-item" href="#">Another action</a>
                <a className="dropdown-item" href="#">Something else here</a>
                <div className="dropdown-divider"></div>
                <a className="dropdown-item" href="#">Separated link</a>
              </div>
            </li>
          </ul>
        
        </div>
      </div>
      
    </nav>
    <div class="container-fluid"> 
    <div class="row">
      <div class="col-12 text-center p-0"> 
       <img className="img-fluid w-75 h-75" src={banner} alt="Logo Garage PARROT" />
      </div>
    </div>
  </div>
   
  </>
);

export default Navbar;
