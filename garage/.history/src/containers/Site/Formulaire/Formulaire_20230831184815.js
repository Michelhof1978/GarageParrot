import React, { useState } from "react";
import ReCAPTCHA from "react-google-recaptcha";

const Form = (props) => {
  const [captchaValue, setCaptchaValue] = useState("");

  const handleCaptchaChange = (response) => {
    console.log("Captcha value:", response);
    setCaptchaValue(response);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (captchaValue) {
      console.log("Succès");
      // Ajoutez ici votre logique pour traiter le formulaire
    } else {
      console.log("Échec, veuillez recommencer");
    }
  };

  return (
    <>
      <h4 className="m-5 text-center border border-3 rounded text-white p-2 display-6 h4Index" id="contact">
        <strong>NOUS CONTACTER</strong>
      </h4>
      <form onSubmit={handleSubmit} className="needs-validation" id="formulaire" noValidate action="#" method="POST">
        <div className="row d-flex justify-content-center">
          <div className="col-md-6">
            <div className="form-outline">
              <input name="firstName" type="text" id="firstName" className="form-control" placeholder="Prénom" required />
              <label htmlFor="firstName" className="form-label"></label>
              <div className="invalid-feedback">Veuillez saisir votre prénom.</div>
            </div>
            {/* Ajoutez les autres champs de formulaire ici */}
            <div className="form-floating">
              <textarea name="message" className="form-control" id="message" required></textarea>
              <label htmlFor="message">Message</label>
              <div className="invalid-feedback">Veuillez saisir votre message.</div>
            </div>
            <ReCAPTCHA sitekey="Votre_clé_sitekey" onChange={handleCaptchaChange} />
            <button type="submit">Envoyer</button>
          </div>
        </div>
      </form>
    </>
  );
};

export default Form;
