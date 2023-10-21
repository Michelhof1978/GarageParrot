import React from "react";
import BannerHeader from "../../../assets/images/bannerHeader.webp";
import Logo2 from "../../../assets/images/logo2.webp";
import Contact from "../../../assets/images/contact.webp";
import iconespacepro from "../../../assets/images/iconespacepro.webp";
import { NavLink } from "react-router-dom";//Pour éviter le rechargement des pages
import Banner from "../Banner/BannerWidh100";


//Composant stateless
const Navbar = (props) => (
  <>

<Banner imageUrl={BannerHeader} altText="Banner offre" />

<div className="row">

  <div className="col-3 ">
    <a className="navbar-brand" href="/accueil ">
      <img className="img-fluid" src={Logo2} alt="Logo Garage PARROT" />
    </a>
  </div>
  <div className="col-6 d-flex justify-content-center align-items-center">
  <img className="img-fluid me-3 img-md img-sm" src={Contact} alt="icône de contact" />
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
                <NavLink to="/reparation" className="nav-link text-white lead">Nos services De Réparation</NavLink>
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

import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook, faTwitter, faInstagram } from "@fortawesome/free-brands-svg-icons";
import Logo1 from "../../../assets/images/logo1.webp";

const Footer = () => {
  return (
    <footer className="bg-primary text-white py-3">
      <div className="container">
        <div className="row">
          <div className="col-md-4 lead">
            <h4>Contact</h4>
            <p>Adresse : 11 rue de la quiche, 33 000 Toulouse</p>
            <p>Téléphone : 04-70-45-25-36</p>
            <p>Email : contact@garageParrot.com</p>
          </div>
          <div className="col-md-4 lead">
            <h4>Horaires d'ouverture</h4>
            <ul>
              <li>Lundi - Vendredi : 8h00 - 18h00</li>
              <li>Samedi : 9h00 - 14h00</li>
              <li>Dimanche : Fermé</li>
            </ul>
          </div>
          <div className="col-md-4 lead">
            <h4>Suivez-nous</h4>
            <p>Restez connecté avec nous sur les réseaux sociaux :</p>
            <div className="social-icons">
              <a href="#" className="text-white me-2">
                <FontAwesomeIcon icon={faFacebook} />
              </a>
              <a href="#" className="text-white me-2">
                <FontAwesomeIcon icon={faTwitter} />
              </a>
              <a href="#" className="text-white me-2">
                <FontAwesomeIcon icon={faInstagram} />
              </a>
            </div>
          </div>
        </div>
        <div className="row mt-2">
          <div className="col-md-12">
            <p className="text-center">
          
              <a href="/mentions-legales" className="text-white me-2 lead">Mentions légales</a>
              <a href="/conditions-generales-de-ventes" className="text-white me-2 lead">Conditions générales de ventes</a>
              <a href="/politique-de-confidentialite" className="text-white me-2 lead">Politique de confidentialité</a>
            </p>
          </div>
        </div>
      </div>
        <a className="navbar-brand" href="">
      <img className="img-fluid" src={Logo1} alt="Logo Garage PARROT" />
    </a>
    </footer>
  );
};

export default Footer;
