import React from "react"; 
import iconInsta from "../../assets/images/iconInsta.webp";
import iconTictoc from "../../assets/images/iconTictoc.webp";
import iconTwitter from "../../assets/images/iconTwitter.webp";
import iconLinkedin from "../../assets/images/iconLinkedin.webp";
import {NavLink} from "react-router-dom";

const Footer = (props) => (
    <>
    <footer className="bg-primary text-white text center">
    <div className="row no-gutters align-items-center text-center pt-2">
                <div className="col-3">
                    <a href="/" className="d-block" target="_blank">
                        <img src={facebook} alt='facebook' className="imgFB" />
                    </a> 
                </div>

                <div className="col-3">
                <a href="/" className="d-block" target="_blank">
                        <img src={youtube} alt='youtube' className="imgYoutube" />
                    </a> 
                </div>

                <div className="col-3">
                <a href="/" className="d-block" target="_blank">
                        <img src={twitter} alt='twitter' className="imgTwitter" />
                    </a> 
               
                </div>

                <div className="col-3 ">
                <NavLink to="/mentionLegales" className={`nav-link p-0 m-0 ${styles.footerLink}`}>Mentions légales</NavLink>
                    <a href="mailto:contact@myzoo.com" className={styles.footerLink}>contact@myzoo.com</a>
                </div>
           </div>
       
                    <p>Garage PARROT - 2021</p>
      
       
    </footer>
    </>
);

export default Footer;