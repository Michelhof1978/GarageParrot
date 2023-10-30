import React from "react";
import bannertop from "../../../assets/images/bannertop.webp";
import logo from "../../../assets/images/logo2.webp";
import contact from "../../../assets/images/contact.webp";
import iconespacepro from "../../../assets/images/iconespacepro.webp";
import { NavLink } from "react-router-dom";//Pour éviter le rechargement des pages



//Composant stateless
const Navbar = (props) => (
  <>
{/*------------BANNER----------- */}
<div className="container-fluid p-0"> 
  <div className="row">
    <div className="col-12 text-center p-0"> 
      <img className="img-fluid w-100" src={bannertop} alt="Bannière pub" />
    </div>
  </div>
</div>


<div className="row">
  <div className="col-3 ">
    <a className="navbar-brand" href="/accueil ">
      <img className="img-fluid" src={logo} alt="Logo Garage PARROT" />
    </a>
  </div>
  <div className="col-6 d-flex justify-content-center align-items-center">
  <img className="img-fluid me-3 img-md img-sm" src={contact} alt="icône de contact" />
  <div className="text-center">
    <p className="fw-bold text-dark fs-5 fs-4-md mb-1 mb-md-0 lead">
      Nous contacter
    </p>
    <p className="fw-bold text-primary fs-5 fs-4-md mb-1 mb-md-0 lead">
      04-70-45-25-36
    </p>
  </div>
</div>
<div className="col-3 d-flex justify-content-center align-items-center">
  <a href="http://localhost/GarageBack/back/login">
    <img className="img-fluid w-75 w-md-100" src={iconespacepro} alt="connexion espace pro" />
  </a>
</div>


</div>

{/*------------ END BANNER----------- */}

{/*------------NAVBAR----------- */}
<nav className="navbar navbar-expand-lg bg-primary p-0 text-light " data-bs-theme="dark">  <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarColor01" aria-controls="navbarColor01" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>
    <div className="container-fluid ">

        <div className="collapse navbar-collapse " id="navbarColor01">
        <ul className="navbar-nav mx-auto navbar-text-light lead">

                <li className="nav-item m-3">
                    <NavLink to="/"  className="nav-link text-white lead">Accueil</NavLink>
                        <span className="visually-hidden">(current)</span>
                </li>

                {/* <li className="nav-item dropdown m-3 lead">
                    <a className="nav-link dropdown-toggle text-white lead" data-bs-toggle="dropdown" href="/reparation" role="button" aria-haspopup="true" aria-expanded="false">Réparation véhicules</a>
                    <div className="dropdown-menu bg-light ">
            <NavLink className="dropdown-item text-primary lead" to="/pneumatique">Pneumatique</NavLink>
            <NavLink className="dropdown-item text-primary lead" to="/freinage">Freinage</NavLink>
            <NavLink className="dropdown-item text-primary lead" to="/mecanique">Mécanique</NavLink>
            <NavLink className="dropdown-item text-primary lead" to="/entretien">Entretien</NavLink>
            <NavLink className="dropdown-item text-primary lead" to="/parebrise">Pare-Brise</NavLink>
            <NavLink className="dropdown-item text-primary lead" to="/vidange">Vidange</NavLink>
                </div>
                </li> */}

                <li className="nav-item m-3 ">
                <NavLink to="/reparation" className="nav-link text-white lead">Nos sérvices De Réparation</NavLink>
                </li>

                <li className="nav-item m-3 ">
                <NavLink to="/voitureoccasion" className="nav-link text-white lead">Voitures D'occasions</NavLink>
                </li>

                <li className="nav-item m-3 ">
                <NavLink to="/avisClients" className="nav-link text-white lead">Avis Clients</NavLink>
                </li>


                <li className="nav-item m-3">
                <NavLink to="/contact" className="nav-link text-white lead">Nous contacter</NavLink>
                </li>

            </ul>
        </div>
    </div>
</nav>
{/*------------END NAVBAR----------- */}


  </>
);

export default Navbar;