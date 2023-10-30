import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook, faTwitter, faInstagram } from "@fortawesome/free-brands-svg-icons";
import Logo2 from "../../../assets/images/logo1.webp";

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
      <img className="img-fluid" src={Logo2} alt="Logo Garage PARROT" />
    </a>
    </footer>
  );
};

export default Footer;
