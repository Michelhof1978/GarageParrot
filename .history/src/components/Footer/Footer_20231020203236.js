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
              {/* ... (informations de contact) */}
            </div>
            <div className="col-md-4">
              <h4>Horaires d'ouverture</h4>
              {/* ... (horaires d'ouverture) */}
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
        </div>
      </footer>
    );
  };
  






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

// 