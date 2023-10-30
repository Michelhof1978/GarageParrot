import React, { Component} from 'react';
import TitreH2 from '../../components/UI/Titres/TitreH2';
import Form from '../Formulaire/Formulaire';
import axios from 'axios';
import BannerInfo from "../../components/UI/Banner/BannerInfo";
import BannerContactForm from "../../assets/images/bannerContactForm.webp";
import TitreH3 from '../../components/UI/Titres/TitreH3';
import Textes from '../../components/UI/Textes/Textes';

class Contact extends Component {
        // Nom de la page dans l'onglet
        componentDidMount = () => {
          document.title = "Page de contact";
        }
        handleEnvoiMail = (message) => {
         axios.post("http://localhost/garageback/front/contact",message)
         .then(reponse=>{console.log(reponse)})
            .catch(error=>{console.log(error)})
        }

    render () {
        return (
            <>
             <TitreH2>Nous Contacter</TitreH2>
             <BannerInfo imageUrl={BannerContactForm} altText="formulaire de contact" />
           
            
            <div className="container">
          
          <div className='text-center'>
            <Textes>
            <div>
             <p className='fw-bold'>Adresse : </p> 
             <p>11 rue de la quiche 33 000 Toulouse </p>
             </div>

             <div>
             <p className='fw-bold'>Téléphone :</p> 
             <p>04-70-45-25-36  </p> 
                
            </Textes>
            </div>
               
                <TitreH3>Nous écrire </TitreH3>
                <Form sendMail = {this.handleEnvoiMail} />
               
                </div>
            </>
        )
}
}

export default Contact;