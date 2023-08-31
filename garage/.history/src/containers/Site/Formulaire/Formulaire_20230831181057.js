import React, { useState } from "react";
import Recaptcha from "./recaptcha";

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
              {/* Vos champs de formulaire */}
              {/* ... */}
              <div className="form-floating ">
                <textarea name="message" className="form-control " id="message" required></textarea>
                <label htmlFor="message">Message</label>
                <div className="invalid-feedback">
                  Veuillez saisir votre message.
                </div>
              </div>
            </div>
          </div>
        </fieldset>
        <Recaptcha onChange={handleCaptchaChange} />
        <button type="submit">Envoyer</button>
      </form>
    </>
  );
};

export default Form;
