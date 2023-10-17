import React from "react";
import bannertop from "../../../assets/images/bannertop.webp";
import logo from "../../../assets/images/logo2.webp";
import banner from "../../../assets/images/bannier.webp";
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
      <img className="img-fluid w-100" src={bannertop} alt="Logo Garage PARROT" />
    </div>
  </div>
</div>

<div className="row text-center" style={{ marginBottom: '-100px', marginTop: '-80px'}}>
  
  <div className="col-12">
    <div className="row">
      <div className="col-4 col-md-3">
        <a className="navbar-brand" href="#">
          <img className="img-fluid" src={logo} alt="Logo Garage PARROT" />
        </a>
      </div>

      <div className="col-4 col-md-6">
        <img className="img-fluid" src={contact} alt="publicité offre" />
        <p c>Nous contacter au 04-70-45-25-36</p>
      </div>

      <div className="col-4 col-md-3">
        <a href="http://localhost/GarageBack/back/login">
          <img className="img-fluid" src={iconespacepro} alt="connexion espace pro" />
        </a>
      </div>
    </div>
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
                    <NavLink to="/"  className="nav-link text-white fw-bold">Accueil</NavLink>
                        <span className="visually-hidden">(current)</span>
                </li>

                <li className="nav-item dropdown m-3">
                    <a className="nav-link dropdown-toggle text-white fw-bold" data-bs-toggle="dropdown" href="/reparation" role="button" aria-haspopup="true" aria-expanded="false">Réparation véhicules</a>
                    <div className="dropdown-menu bg-light fw-bold">
            <NavLink className="dropdown-item text-primary fw-bold" to="/pneumatique">Pneumatique</NavLink>
            <NavLink className="dropdown-item text-primary fw-bold" to="/freinage">Freinage</NavLink>
            <NavLink className="dropdown-item text-primary fw-bold" to="/mecanique">Mécanique</NavLink>
            <NavLink className="dropdown-item text-primary fw-bold" to="/entretien">Entretien</NavLink>
            <NavLink className="dropdown-item text-primary fw-bold" to="/parebrise">Pare-Brise</NavLink>
            <NavLink className="dropdown-item text-primary fw-bold" to="/vidange">Vidange</NavLink>
                </div>
                </li>

                <li className="nav-item m-3 ">
                <NavLink to="/voitureoccasion" className="nav-link text-white fw-bold">Voitures D'occasions</NavLink>
                </li>

                <li className="nav-item m-3 ">
                <NavLink to="/avisClients" className="nav-link text-white fw-bold">Avis Clients</NavLink>
                </li>


                <li className="nav-item m-3">
                <NavLink to="/contact" className="nav-link text-white fw-bold">Nous contacter</NavLink>
                </li>

            </ul>
        </div>
    </div>
</nav>
{/*------------END NAVBAR----------- */}

{/*------------BANNER----------- */}
<div className="container-fluid introbanner">
  <div className="row">
    <div className="col-12 text-center p-0 mt-3">
      <div class="image-container">
        <img className="img-fluid w-75 rounded" src={banner} alt="banniere arrivage voitures" />
      </div>
    </div>
  </div>
</div>

{/*------------END BANNER----------- */}
  </>
);

export default Navbar;