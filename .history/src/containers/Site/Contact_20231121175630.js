import React, { useEffect } from 'react';
import TitreH2 from '../../components/UI/Titres/TitreH2';
import Form from '../Formulaire/Formulaire';
import axios from 'axios';
import BannerInfo from "../../components/UI/Banner/BannerInfo";
import BannerContactForm from "../../assets/images/bannerContactForm.webp";
import TitreH3 from '../../components/UI/Titres/TitreH3';
import Textes from '../../components/UI/Textes/Textes';
import BannerQuality from "../../assets/images/bannerQuality.webp";



const Contact = () => {
  // Nom de la page dans l'onglet
  useEffect(() => {
    document.title = "Page de contact";
  }, []);

  const handleEnvoiMail = (message) => {
    axios.post("http://localhost/garageback/front/contact", message)
      .then(reponse => { console.log(reponse) })
      .catch(error => { console.log(error) });
  }

  return (
    <>
      <TitreH2>Nous Contacter</TitreH2>
      <BannerInfo imageUrl={BannerContactForm} altText="formulaire de contact" />

      <div className="container">
        <div className='text-center'>
          <Textes>
            <p className='fw-bold mb-2'>Adresse</p>
            <p className='mb-4'>11 rue de la quiche 33 000 Toulouse</p>

            <p className='fw-bold mb-2'>Téléphone</p>
            <p className='mb-4'>04-70-45-25-36</p>
          </Textes>
        </div>

        <TitreH3>Nous écrire </TitreH3>
        <Form sendMail={handleEnvoiMail} />

      </div>
      <BannerInfo imageUrl={BannerQuality} altText="Offre satisfaction" />
    </>
  );
}

export default Contact;
