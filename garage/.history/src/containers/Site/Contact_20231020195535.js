import React, { Component} from 'react';
import TitreH1 from '../../components/UI/Titres/TitreH1';
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
             <BannerInfo imageUrl={BannerContactForm} altText="formulaire de contact" />
            <TitreH1>Nous Contacter</TitreH1>
            
            <div className="container">
          
          <div>
            <Textes>
            Adresse :  11 rue de la quiche 33 000 Toulouse 
          Téléphone :
                04 75 02 14 05
                </Textes>
              
               
                </div>
                <TitreH3>Nous écrire </TitreH3>
                <Form sendMail = {this.handleEnvoiMail} />
               
         
            </>
        )
}
}

export default Contact;