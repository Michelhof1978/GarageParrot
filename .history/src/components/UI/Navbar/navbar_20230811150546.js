

import React from "react";
import bannertop from "../../../assets/images/bannertop.webp";
import logo from "../../../assets/images/logo2.webp";
import banner from "../../../assets/images/bannier.webp";
import sousbanner from "../../../assets/images/sousbanniere.webp";
import iconespacepro from "../../../assets/images/iconespacepro.webp";

//Composant stateless
const Navbar = (props) => (
  <>
  <div className="container-fluid p-0"> 
    <div className="row">
      <div className="col-12 text-center p-0"> 
      <img className="img-fluid" src={bannertop} alt="Logo Garage PARROT" />
      </div>
    </div>
  </div>

  

<div className="row ">
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



<nav className="navbar navbar-expand-lg bg-primary w-75 p-0" data-bs-theme="dark">
    <div className="container-fluid">

        <div className="collapse navbar-collapse" id="navbarColor01">
            <ul className="navbar-nav me-auto navbar"> {/* Ajout de "d-flex justify-content-center" ici */}
                <li className="nav-item m-3">
                    <a className="nav-link active" href="/">Accueil
                        <span className="visually-hidden">(current)</span>
                    </a>
                </li>

                <li className="nav-item dropdown m-3">
                    <a className="nav-link dropdown-toggle" data-bs-toggle="dropdown" href="#" role="button" aria-haspopup="true" aria-expanded="false">Réparation véhicules</a>
                    <div className="dropdown-menu bg-light">
                        <a className="dropdown-item text-primary" href="#">Pneumatique</a>
                        <a className="dropdown-item text-primary" href="#">Freinage</a>
                        <a className="dropdown-item text-primary" href="#">Mécanique</a>
                        <a className="dropdown-item text-primary" href="#">Entretien</a>
                        <a className="dropdown-item text-primary" href="#">Par-Brise</a>
                        <a className="dropdown-item text-primary" href="#">Vidange</a>
                    </div>
                </li>

                <li className="nav-item m-3">
                    <a className="nav-link" href="#">Voitures D'occasion</a>
                </li>
                <li className="nav-item m-3">
                    <a className="nav-link" href="#">Nous Contacter</a>
                </li>
            </ul>
        </div>
    </div>
</nav>

    <div className="container-fluid"> 
    <div className="row">
      <div className="col-12 text-center p-0"> 
       <img className="img-fluid w-75 " src={banner} alt="Logo Garage PARROT" />
      </div>
    </div>
  </div>
   
  </>
);

export default Navbar;
