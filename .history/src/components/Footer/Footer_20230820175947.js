import React from "react"; 
import iconInsta from "../../assets/images/iconInsta.webp";
import iconTictoc from "../../assets/images/iconTictoc.webp";
import iconTwitter from "../../assets/images/iconTwitter.webp";
import iconLinkedin from "../../assets/images/iconLinkedin.webp";


const Footer = (props) => (
    <>
    <footer className="bg-primary text-white text center">
    <div className="row no-gutters align-items-center text-center pt-2">
                <div className="col-3">
                    <a href="/" className="d-block" target="_blank">
                        <img src={iconInsta} alt='facebook' className="imgFB" />
                    </a> 
                </div>

                <div className="col-3">
                <a href="/" className="d-block" target="_blank">
                        <img src={iconTictoc} alt='youtube' className="imgYoutube" />
                    </a> 
                </div>

                <div className="col-3">
                <a href="/" className="d-block" target="_blank">
                        <img src={iconLinkedin} alt='twitter' className="imgTwitter" />
                    </a> 
               
                </div>

                <div className="col-3">
                <a href="/" className="d-block" target="_blank">
                        <img src={iconTwitter} alt='twitter' className="imgTwitter" />
                    </a> 
                
                
           </div>
       <p>Garage PARROT - 2021</p>
                    </div>
       
    </footer>
    </>
);

export default Footer;