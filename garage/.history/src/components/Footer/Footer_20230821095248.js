import React from "react";
import iconInsta from "../../assets/images/iconInsta.webp";
import iconTictoc from "../../assets/images/iconTictoc.webp";
import iconTwitter from "../../assets/images/iconTwitter.webp";
import iconLinkedin from "../../assets/images/iconLinkedin.webp";
import logo from "../../assets/images/logo.webp";

const Footer = (props) => (
  <footer className="bg-primary text-white text-center">
    <div className="container py-4">
      <div className="row justify-content-center align-items-center">
        <div className="col-2">
          <a href="/" target="_blank">
            <img src={iconInsta} alt="Instagram" className="img-fluid img-icon" />
          </a>
        </div>
        <div className="col-2">
          <a href="/" target="_blank">
            <img src={iconTictoc} alt="Tictoc" className="img-fluid img-icon" />
          </a>
        </div>
        <div className="col-2">
          <a href="/" target="_blank">
            <img src={iconLinkedin} alt="LinkedIn" className="img-fluid img-icon" />
          </a>
        </div>
        <div className="col-2">
          <a href="/" target="_blank">
            <img src={iconTwitter} alt="Twitter" className="img-fluid img-icon" />
          </a>
        </div>
      </div>
    </div>
    <div className="container">
      <div className="row">
        <div className="col text-center">
          <img className="img-fluid" src={logo} alt="Logo Garage PARROT" />
          <div className="d-flex flex-column align-items-center">
            <p>Garage PARROT - 2021</p>
            <p className="mb-0">123 Rue de la Réparation</p>
            <p className="mb-0">Ville, Code Postal</p>
            <p className="mb-0">Téléphone : 123-456-7890</p>
          </div>
        </div>
        <div
    </div>
  </footer>
);

export default Footer;
