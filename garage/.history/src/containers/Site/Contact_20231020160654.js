import React, { Component} from 'react';
import TitreH1 from '../../components/UI/Titres/TitreH1';
import Form from '../Formulaire/Formulaire';
import axios from 'axios';
import BannerInfo from "../../components/UI/Banner/BannerInfo";
import BannerContactForm from "../../assets/images/bannerContactForm.webp";
import TitreH2 from '../../components/UI/Titres/TitreH2';
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

            <Textes>
            <TitreH2>Adresse : </TitreH2>
               
                11 rue de la quiche 33 000 Toulouse 
                <TitreH2>Téléphone : </TitreH2>
                
                04 75 02 14 05
                </Textes>

                
                <h2>Nous écrire </h2>
                <Form sendMail = {this.handleEnvoiMail} />

            </div>
            </>
        )
}
}

export default Contact;