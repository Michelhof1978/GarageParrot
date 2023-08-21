import React from "react"; 
import iconInsta from "../../assets/images/iconInsta.webp";
import iconTictoc from "../../assets/images/iconTictoc.webp";
import iconTwitter from "../../assets/images/iconTwitter.webp";
import iconLinkedin from "../../assets/images/iconLinkedin.webp";
import logoVoiture from "../../assets/images/logoVoiture.webp";
import logo from "../../assets/images/logo.webp";


const Footer = (props) => (
    <>
   
   <img className="img-fluid" src={logoVoiture} alt="Logo Garage PARROT" />
    <footer className="bg-primary text-white text center">

    

    <div className="row no-gutters align-items-center text-center pt-2">

                <div className="col-3">
                    <a href="/" className="d-block" target="_blank">
                        <img src={iconInsta} alt='instagram' className="imgInstagram" />
                    </a> 
                </div>

                <div className="col-3">
                <a href="/" className="d-block" target="_blank">
                        <img src={iconTictoc} alt='tictoc' className="imgTictoc" />
                    </a> 
                </div>

                <div className="col-3">
                <a href="/" className="d-block" target="_blank">
                        <img src={iconLinkedin} alt='linkedin' className="imgLinkedin" />
                    </a> 
               
                </div>

                <div className="col-3">
                <a href="/" className="d-block" target="_blank">
                        <img src={iconTwitter} alt='twitter' className="imgTwitter" />
                    </a> 
                </div>

               

       <div>
       <img className="img-fluid" src={logo} alt="Logo Garage PARROT" />
       <p></p>Garage PARROT - 2021
       </div>
                    </div>
       
    </footer>
    </>
);

export default Footer;