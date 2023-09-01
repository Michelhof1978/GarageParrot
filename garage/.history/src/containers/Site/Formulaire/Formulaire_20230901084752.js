import React, { useState } from "react";
import {withFormik} from 'formik';
import * as Yup from 'yup';//Vérification ds les champs de formulaire pour qu'ils soient correctement remplis

const Form = (props) => {
  return(
  <>
 

<form className="needs-validation" id="formulaire" novalidate action="#" method="POST">
    <fieldset className="mb-5 ms-2 me-2">

        <div className="row d-flex justify-content-center">
            <div className="col-md-6">


<div className="row mb-4">

    <div className="col">
        <div className="form-outline">
            <input name="firstName" type="text" id="firstName" className="form-control"placeholder="Prénom" required/>
            <label htmlfor="firstName" class="form-label"></label>
        <div className="invalid-feedback">
            Veuillez saisir votre prénom.
        </div>
        </div>
</div>

<div className="col">
    <div className="form-outline">
        <input name="lastName" type="text" id="lastName" className="form-control"placeholder="Nom" required/>
            <label htmlfor="lastName" className="form-label"></label>
                <div className="invalid-feedback">
                    Veuillez saisir votre nom.
                </div>
    </div>
</div>

<div className="col">
    <div className="form-outline">
        <input name="phoneNumber" type="tel" id="phoneNumber" className="form-control" placeholder="Téléphone" required/>
            <label htmlfor="phoneNumber" className="form-label"></label>
                <div className="invalid-feedback">
                     Veuillez saisir votre téléphone.
                </div>
    </div>
</div>

</div>


<div className="form-outline mb-4">
    <div className="input-group has-validation">
        <span className="input-group-text" id="inputGroupPrepend">@</span>
            <input name="email" type="email" id="email" className="form-control " placeholder="Email" required/>
                </div>
                    <label htmlfor="email" className="form-label"></label>
                        <div className="invalid-feedback">
                            Veuillez saisir votre Email.
                        </div>
                </div>

<div className="form-outline mb-4">
    <label className="form-label round" htmlfor="objet">Objet :</label>
        <select className="form-label" name="objet" id="objet">
            <option>Renseignements</option>
            <option>Résérvation</option>
        </select>
</div>


<div className="form-floating ">
    <textarea name="message" className="form-control " id="message" required></textarea>
        <label htmlfor="message">Message</label>
            <div className="invalid-feedback">
                Veuillez saisir votre message.
            </div>
</div>

<div className="g-recaptcha m-4" data-sitekey="6Ld72FwnAAAAABXBamvH-_h6-dyX_phTGFlAWCgR"></div>


<button type="submit" value="Valider" id="send-data" className="btn btn-primary btn-block mb-4 ">
    Envoyez
</button>

</div>
    </div>
        </fieldset>
</form>

  </>
  );
};

export default withFormikForm;
