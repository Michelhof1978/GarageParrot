import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook, faTwitter, faInstagram } from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
  return (
    <div className="footer-container bg-dark text-white py-4">
    <footer className="bg-dark text-white py-4">
      <div className="container">
        <div className="row">
          <div className="col-md-4">
            <h4>Contact</h4>
            <p>Adresse : 123 Rue de l'Automobile, 75000 Ville</p>
            <p>Téléphone : (123) 456-7890</p>
            <p>Email : contact@garageauto.com</p>
          </div>
          <div className="col-md-4">
            <h4>Horaires d'ouverture</h4>
            <ul>
              <li>Lundi - Vendredi : 8h00 - 18h00</li>
              <li>Samedi : 9h00 - 14h00</li>
              <li>Dimanche : Fermé</li>
            </ul>
          </div>
          <div className="col-md-4">
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
        <div className="row mt-4">
          <div className="col-md-12">
            <p className="text-center">
              <a href="/mentions-legales" className="text-white me-2">Mentions légales</a>
              <a href="/conditions-generales-de-ventes" className="text-white me-2">Conditions générales de ventes</a>
              <a href="/politique-de-confidentialite" className="text-white me-2">Politique de confidentialité</a>
            </p>
          </div>
        </div>
      </div>
    </footer>
    
  );
};

export default Footer;
