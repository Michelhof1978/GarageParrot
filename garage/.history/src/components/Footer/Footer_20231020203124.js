import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook, faTwitter, faInstagram } from "@fortawesome/free-brands-svg-icons";


const Footer = () => {
  return (
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
                <i className="fab fa-facebook"></i>
              </a>
              <a href="#" className="text-white me-2">
                <i className="fab fa-twitter"></i>
              </a>
              <a href="#" className="text-white me-2">
                <i className="fab fa-instagram"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;






// import React from "react"; 
// import iconInsta from "../../assets/images/iconInsta.webp";
// import iconTictoc from "../../assets/images/iconTictoc.webp";
// import iconTwitter from "../../assets/images/iconTwitter.webp";
// import iconLinkedin from "../../assets/images/iconLinkedin.webp";


// const Footer = (props) => (
//     <>
//     <footer className="bg-primary text-white text center">

//     <div className="row no-gutters align-items-center text-center pt-2">
//                 <div className="col-3">
//                     <a href="/" className="d-block" target="_blank">
//                         <img src={iconInsta} alt='instagram' className="imgInstagram" />
//                     </a> 
//                 </div>

//                 <div className="col-3">
//                 <a href="/" className="d-block" target="_blank">
//                         <img src={iconTictoc} alt='tictoc' className="imgTictoc" />
//                     </a> 
//                 </div>

//                 <div className="col-3">
//                 <a href="/" className="d-block" target="_blank">
//                         <img src={iconLinkedin} alt='linkedin' className="imgLinkedin" />
//                     </a> 
               
//                 </div>

//                 <div className="col-3">
//                 <a href="/" className="d-block" target="_blank">
//                         <img src={iconTwitter} alt='twitter' className="imgTwitter" />
//                     </a> 
//                 </div>

//        <p>Garage PARROT - 2021</p>
//                     </div>
       
//     </footer>
//     </>
// );

// export default Footer;