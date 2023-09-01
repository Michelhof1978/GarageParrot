import React, { useState } from "react";
import {withFormik} from 'formik';
import * as Yup from 'yup'; //Vérification ds les champs de formulaire pour qu'ils soient correctement remplis

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
            <input name="firstName" onChange={props.handleChange} value={props.values.firstname} on type="text" id="firstName" className="form-control"placeholder="Prénom" required/>
            <label htmlfor="firstName" class="form-label"></label>
        {
          props.errors.firstName && <span className="text-danger">{props.errors.firstName}</span>
        }
        </div>
</div>



<div className="col">
    <div className="form-outline">
        <input name="lastName" onChange={props.handleChange} value={props.values.lastname} type="text" id="lastName" className="form-control"placeholder="Nom" required/>
            <label htmlfor="lastName" className="form-label"></label>
                <div className="invalid-feedback">
                    Veuillez saisir votre nom.
                </div>
    </div>
</div>

<div className="col">
    <div className="form-outline">
        <input name="phoneNumber" onChange={props.handleChange} value={props.values.phoneNumber} type="tel" id="phoneNumber" className="form-control" placeholder="Téléphone" required/>
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
            <input name="email" onChange={props.handleChange} value={props.values.email} type="email" id="email" className="form-control " placeholder="Email" required/>
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
    <textarea name="message" onChange={props.handleChange} value={props.values.message} className="form-control " id="message" required></textarea>
        <label htmlfor="message">Message</label>
            <div className="invalid-feedback">
                Veuillez saisir votre message.
            </div>
</div>

<div className="g-recaptcha m-4" data-sitekey="6Ld72FwnAAAAABXBamvH-_h6-dyX_phTGFlAWCgR"></div>


<button type="submit" value="Envoyer" id="send-data" className="btn btn-primary btn-block mb-4 " onClick={props.handleSubmit}>
    Envoyez
</button>

</div>
    </div>
        </fieldset>
</form>

  </>
  );
};

export default withFormik({
  mapPropsToValues: () => ({
    firstName: '',
    lastName: '',
    phoneNumber: '',
    email: '',
    message: '',
  }),
    validationSchema: Yup.object().shape({
      firstName: Yup.string()
        .min(2, 'Trop court !')
        .max(50, 'Trop long !')
        .required('Veuillez saisir votre prénom.'),
      lastName: Yup.string()
        .min(2, 'Trop court !')
        .max(50, 'Trop long !')
        .required('Veuillez saisir votre nom.'),
      phoneNumber: Yup.string()
        .min(10, 'Trop court !')
        .max(10, 'Trop long !')
        .required('Veuillez saisir votre numéro de téléphone.'),
      email: Yup.string()
        .email('Veuillez saisir un email valide.')
        .required('Veuillez saisir votre email.'),
      message: Yup.string()
        .min(10, 'Trop court !')
        .max(1000, 'Trop long !')
        .required('Veuillez saisir votre message.'),
    }),
    handleSubmit: (values)=> {
      alert("Message envoyé");
    }
})(Form);
