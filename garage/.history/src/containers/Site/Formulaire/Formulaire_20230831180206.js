import React from "react"; 
import Recaptcha from "./recaptcha";


export default Formulaire;

import React, { useState } from 'react';
import RecaptchaComponent from './RecaptchaComponent';

const ContactForm = () => {
  const [captchaValue, setCaptchaValue] = useState("");

  const handleCaptchaChange = (response) => {
    console.log("Captcha value:", response);
    setCaptchaValue(response);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (captchaValue) {
      console.log("Form submitted successfully!");
      // Ajoutez votre logique d'envoi de formulaire ici
    } else {
      console.log("Please complete the reCAPTCHA.");
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      {/* Vos champs de formulaire */}
      <RecaptchaComponent onChange={handleCaptchaChange} />
      <button type="submit">Submit</button>
    </form>
  );
};

export default ContactForm;
