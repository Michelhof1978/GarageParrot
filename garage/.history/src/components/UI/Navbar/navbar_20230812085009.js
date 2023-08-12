

import React from "react";
import bannertop from "../../../assets/images/bannertop.webp";
import logo from "../../../assets/images/logo2.webp";
import banner from "../../../assets/images/bannier.webp";
import sousbanner from "../../../assets/images/sousbanniere.webp";
import iconespacepro from "../../../assets/images/iconespacepro.webp";
import { NavLink } from "react-router-dom";//Pour le rechargement des pages


//Composant stateless
const Navbar = (props) => (
  <>
{/*------------BANNER----------- */}
  <div className="container-fluid p-0"> 
    <div className="row">
      <div className="col-12 text-center p-0"> 
      <img className="img-fluid" src={bannertop} alt="Logo Garage PARROT" />
      </div>
    </div>
  </div>
  {/*------------ END BANNER----------- */}
  

{/*------------BANNER----------- */}
<div className="row ">
    <div className="col-3">
        <a className="navbar-brand" href="#">
             <img className="img-fluid" src={logo} alt="Logo Garage PARROT" />
        </a>
    </div>

    <div className="col-6">
         <img className="img-fluid" src={sousbanner} alt="Logo Garage PARROT" />
    </div>

{/*--ESPACE PRO-- */}
    <div className="col-3">
         <img className="img-fluid" src={iconespacepro} alt="Logo Garage PARROT" />
    </div>
</div>
{/*------------ END BANNER----------- */}

{/*------------NAVBAR----------- */}
<nav className="navbar navbar-expand-lg bg-primary w-75 p-0 text-light" data-bs-theme="dark">
    <div className="container-fluid ">

        <div className="collapse navbar-collapse " id="navbarColor01">
            <ul className="navbar-nav me-auto navbar-text-light"> 

                <li className="nav-item m-3">
                    <NavLink to="/" className="nav-link">Accueil</NavLink>
                        <span className="visually-hidden">(current)</span>
                </li>

                <li className="nav-item dropdown m-3">
                    <a className="nav-link dropdown-toggle" data-bs-toggle="dropdown" href="/reparation" role="button" aria-haspopup="true" aria-expanded="false">Réparation véhicules</a>
                    <div className="dropdown-menu bg-light">
            <NavLink className="dropdown-item text-primary" to="/pneumatique">Pneumatique</NavLink>
            <NavLink className="dropdown-item text-primary" to="/freinage">Freinage</NavLink>
            <NavLink className="dropdown-item text-primary" to="/mecanique">Mécanique</NavLink>
            <NavLink className="dropdown-item text-primary" to="/entretien">Entretien</NavLink>
            <NavLink className="dropdown-item text-primary" to="/parebrise">Pare-Brise</NavLink>
            <NavLink className="dropdown-item text-primary" to="/vidange">Vidange</NavLink>
                </div>
                </li>

                <li className="nav-item m-3">
                <NavLink to="/voitureoccasion" className="nav-link">Voitures D'occasion</NavLink>
                </li>

                <li className="nav-item m-3">
                <NavLink to="/contact" className="nav-link">Page de Contact</NavLink>
                </li>

            </ul>
        </div>
    </div>
</nav>
{/*------------END NAVBAR----------- */}

{/*------------BANNER----------- */}
    <div className="container-fluid"> 
    <div className="row">
      <div className="col-12 text-center p-0"> 
       <img className="img-fluid w-75 " src={banner} alt="Logo Garage PARROT" />
      </div>
    </div>
  </div>
{/*------------END BANNER----------- */}
  </>
);

export default Navbar;
