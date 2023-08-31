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
            < className="row mb-4">
              <div className="col">
                <div className="form-outline">
                  <input name="firstName" type="text" id="firstName" className="form-control" placeholder="Prénom" required />
                  <label htmlFor="firstName" className="form-label"></label>
                  <div className="invalid-feedback">Veuillez saisir votre prénom.</div>
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

< class="col">
    <div class="form-outline">
        <input name="phoneNumber" type="tel" id="phoneNumber" class="form-control" placeholder="Téléphone" required/>
            <label for="phoneNumber" class="form-label"></label>
                <div class="invalid-feedback">
                     Veuillez saisir votre téléphone.
                </div>
    </div>



            </div>
            <div className="form-outline mb-4">
              <div className="input-group has-validation">
                <span className="input-group-text" id="inputGroupPrepend">@</span>
                <input name="email" type="email" id="email" className="form-control" placeholder="Email" required />
              </div>
              <label htmlFor="email" className="form-label"></label>
              <div className="invalid-feedback">Veuillez saisir votre Email.</div>
            </div>
            <div className="form-outline mb-4">
              <label className="form-label round" htmlFor="objet">Objet :</label>
              <select className="form-label" name="objet" id="objet">
                <option>Renseignements</option>
                <option>Prendre Rdv</option>
              </select>
            </div>
            <div className="form-floating">
              <textarea name="message" className="form-control" id="message" required></textarea>
              <label htmlFor="message">Message</label>
              <div className="invalid-feedback">Veuillez saisir votre message.</div>
            </div>
            <ReCAPTCHA sitekey="6LeouOsnAAAAAJtNEXrK24tmIgsSaLO_ZdUaJzXJ" onChange={handleCaptchaChange} />
            <button type="submit">Envoyer</button>
          </div>
        </div>
      </form>
    </>
  );
};

export default Form;
