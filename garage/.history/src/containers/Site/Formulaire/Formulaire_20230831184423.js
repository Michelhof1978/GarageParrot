import React, { useState } from "react";
import Recaptcha from "./recaptcha";
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
      console.log("Succés");
    
    } else {
      console.log("Echec, Recommencez");
    }
  };

  return (
    <>
      <h4 className="m-5 text-center border border-3 rounded text-white p-2 display-6 h4Index" id="contact">
        <strong>NOUS CONTACTER</strong>
      </h4>
      <form onSubmit={handleSubmit} className="needs-validation" id="formulaire" noValidate action="#" method="POST">
        <fieldset className="mb-5 ms-2 me-2">
          <div className="row d-flex justify-content-center">
            <div className="col-md-6">
            
            <fieldset class="mb-5 ms-2 me-2">

        <div class="row d-flex justify-content-center">
            <div class="col-md-6">

<!-- 2 column grid layout with text inputs for the first and last names -->
<div class="row mb-4">

    <div class="col">
        <div class="form-outline">
            <input name="firstName" type="text" id="firstName" class="form-control"placeholder="Prénom" required/>
            <label for="firstName" class="form-label"></label>
        <div class="invalid-feedback">
            Veuillez saisir votre prénom.
        </div>
        </div>
</div>

<div class="col">
    <div class="form-outline">
        <input name="lastName" type="text" id="lastName" class="form-control"placeholder="Nom" required/>
            <label for="lastName" class="form-label"></label>
                <div class="invalid-feedback">
                    Veuillez saisir votre nom.
                </div>
    </div>
</div>

<div class="col">
    <div class="form-outline">
        <input name="phoneNumber" type="tel" id="phoneNumber" class="form-control" placeholder="Téléphone" required/>
            <label for="phoneNumber" class="form-label"></label>
                <div class="invalid-feedback">
                     Veuillez saisir votre téléphone.
                </div>
    </div>
</div>

</div>

<!-- Email input -->
<div class="form-outline mb-4">
    <div class="input-group has-validation">
        <span class="input-group-text" id="inputGroupPrepend">@</span>
            <input name="email" type="email" id="email" class="form-control " placeholder="Email" required/>
                </div>
                    <label for="email" class="form-label"></label>
                        <div class="invalid-feedback">
                            Veuillez saisir votre Email.
                        </div>
                </div>

<div class="form-outline mb-4">
    <label class="form-label round" for="objet">Objet :</label>
        <select class="form-label" name="objet" id="objet">
            <option>Renseignements</option>
            <option>Résérvation</option>
        </select>
</div>

              <div className="form-floating">
                <textarea name="message" className="form-control" id="message" required></textarea>
                <label htmlFor="message">Message</label>
                <div className="invalid-feedback">
                  Veuillez saisir votre message.
                </div>
              </div>
              <Recaptcha onChange={handleCaptchaChange} />
              <button type="submit">Envoyer</button>
            </div>
          </div>
        </fieldset>
      </form>
    </>
  );
};

export default Form;
