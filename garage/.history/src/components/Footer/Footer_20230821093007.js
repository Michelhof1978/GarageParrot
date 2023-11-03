import React from "react";
import iconInsta from "../../assets/images/iconInsta.webp";
import iconTictoc from "../../assets/images/iconTictoc.webp";
import iconTwitter from "../../assets/images/iconTwitter.webp";
import iconLinkedin from "../../assets/images/iconLinkedin.webp";
import logoVoiture from "../../assets/images/logoVoiture.webp";
import logo from "../../assets/images/logo.webp";

const Footer = (props) => (
  <footer className="bg-primary text-white text-center">
    <div className="container py-4">
      <div className="row justify-content-center align-items-center">
        <div className="col-md-2 col-4 mb-3 mb-md-0">
          <a href="/" target="_blank">
            <img src={iconInsta} alt="Instagram" className="imgInstagram" />
          </a>
        </div>
        <div className="col-md-2 col-4 mb-3 mb-md-0">
          <a href="/" target="_blank">
            <img src={iconTictoc} alt="Tictoc" className="imgTictoc" />
          </a>
        </div>
        <div className="col-md-2 col-4 mb-3 mb-md-0">
          <a href="/" target="_blank">
            <img src={iconLinkedin} alt="LinkedIn" className="imgLinkedin" />
          </a>
        </div>
        <div className="col-md-2 col-4">
          <a href="/" target="_blank">
            <img src={iconTwitter} alt="Twitter" className="imgTwitter" />
          </a>
        </div>
      </div>
    </div>
    <div className="container">
      <div className="row">
        <div className="col text-center">
          <img className="img-fluid" src={logo} alt="Logo Garage PARROT" />
          <p>Garage PARROT - 2021</p>
        </div>
      </div>
    </div>
  </footer>
);

export default Footer;
