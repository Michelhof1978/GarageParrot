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

    

    <div className="row align-items-center text-center pt-2">

                <div className="col-2">
                    <a href="/" className="d-block" target="_blank">
                        <img src={iconInsta} alt='instagram' className="imgInstagram " />
                    </a> 
                </div>

                <div className="col-2">
                <a href="/" className="d-block" target="_blank">
                        <img src={iconTictoc} alt='tictoc' className="imgTictoc" />
                    </a> 
                </div>

                <div className="col-2">
                <a href="/" className="d-block" target="_blank">
                        <img src={iconLinkedin} alt='linkedin' className="imgLinkedin w-25" />
                    </a> 
               
                </div>

                <div className="col-2">
                <a href="/" className="d-block" target="_blank">
                        <img src={iconTwitter} alt='twitter' className="imgTwitter w-25" />
                    </a> 
                </div>

               
        <div className="col-12 no-gutter">
            <img className="img-fluid w-50" src={logo} alt="Logo Garage PARROT" />
        </div>
    

       <p>Garage PARROT - 2021</p>
                    </div>
       
    </footer>
    </>
);

export default Footer;