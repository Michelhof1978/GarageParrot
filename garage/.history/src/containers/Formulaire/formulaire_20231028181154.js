import React from "react";
import { withFormik } from "formik";
import * as Yup from "yup";

const Form = (props) => {
  return (
    <>
      <form
        className="needs-validation"
        id="formulaire"
        noValidate
        action="#"
        method="POST"
      >
        <fieldset className="mb-5 ms-2 me-2">
          <div className="row d-flex justify-content-center mt-4">
            <div className="col-md-6">
              <div className="row mb-4">
                <div className="col">
                  <div className="form-outline">
                    <input
                      name="firstName"
                      onChange={props.handleChange}
                      value={props.values.firstname}
                      onBlur={props.handleBlur}
                      type="text"
                      id="firstName"
                      className="form-control border-2 border-primary" // Ajoutez la classe "border-2 border-primary" ici
                      placeholder="Prénom"
                      required
                    />
                    <label htmlFor="firstName" className="form-label"></label>
                    {props.touched.firstName && props.errors.firstName && (
                      <span className="text-danger">{props.errors.firstName}</span>
                    )}
                  </div>
                </div>

                <div className="col">
                  <div className="form-outline">
                    <input
                      name="lastName"
                      onChange={props.handleChange}
                      value={props.values.lastname}
                      onBlur={props.handleBlur}
                      type="text"
                      id="lastName"
                      className="form-control border-2 border-primary" // Ajoutez la classe "border-2 border-primary" ici
                      placeholder="Nom"
                      required
                    />
                    <label htmlFor="lastName" className="form-label"></label>
                    {props.touched.lastName && props.errors.lastName && (
                      <span className="text-danger">{props.errors.lastName}</span>
                    )}
                  </div>
                </div>

                <div className="col">
                  <div className="form-outline">
                    <input
                      name="phoneNumber"
                      onChange={props.handleChange}
                      value={props.values.phoneNumber}
                      onBlur={props.handleBlur}
                      type="tel"
                      id="phoneNumber"
                      className="form-control border-2 border-primary" // Ajoutez la classe "border-2 border-primary" ici
                      placeholder="Téléphone"
                      required
                    />
                    <label htmlFor="phoneNumber" className="form-label"></label>
                    {props.touched.phoneNumber && props.errors.phoneNumber && (
                      <span className="text-danger">{props.errors.phoneNumber}</span>
                    )}
                  </div>
                </div>
              </div>

              <div className="form-outline mb-4 ">
                <div className="input-group has-validation">
                  <span className="input-group-text" id="inputGroupPrepend">
                    @
                  </span>
                  <input
                    name="email"
                    onChange={props.handleChange}
                    value={props.values.email}
                    onBlur={props.handleBlur}
                    type="email"
                    id="email"
                    className="form-control border-2 border-primary" // Ajoutez la classe "border-2 border-primary" ici
                    placeholder="Email"
                    required
                  />
                </div>
                <label htmlFor="email" className="form-label"></label>
                {props.touched.email && props.errors.email && (
                  <span className="text-danger">{props.errors.email}</span>
                )}
              </div>

              <div className="form-outline mb-4 ">
                <label className="form-label round" htmlFor="objet">
                  Objet :&nbsp;
                </label>
                <select className="form-label border-3 border-primary rounded" name="objet" id="objet">
                  <option>Renseignements</option>
                  <option>Prendre un rendez-vous</option>
                </select>
              </div>

              <div className="form-floating">
                <textarea
                  name="message"
                  onChange={props.handleChange}
                  value={props.values.message}
                  onBlur={props.handleBlur}
                  className="form-control border-3 border-primary" // Ajoutez la classe "border-2 border-primary" ici
                  id="message"
                  required
                ></textarea>
                <label htmlFor="message">Message</label>
                {props.touched.message && props.errors.message && (
                  <span className="text-danger">{props.errors.message}</span>
                )}
              </div>

              <div className="g-recaptcha m-4" data-sitekey="6Ld72FwnAAAAABXBamvH-_h6-dyX_phTGFlAWCgR"></div>

              <button
                type="submit"
                value="Envoyer"
                id="send-data"
                className="btn btn-primary btn-block mb-4"
                onClick={props.handleSubmit}
              >
                Envoyer
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
    firstName: "",
    lastName: "",
    phoneNumber: "",
    email: "",
    message: "",
  }),
  validationSchema: Yup.object().shape({
    firstName: Yup.string()
      .min(2, "Trop court !")
      .max(50, "Trop long !")
      .required("Veuillez saisir votre prénom."),
    lastName: Yup.string()
      .min(2, "Trop court !")
      .max(50, "Trop long !")
      .required("Veuillez saisir votre nom."),
    phoneNumber: Yup.string()
      .min(10, "Trop court !")
      .max(10, "Trop long !")
      .required("Veuillez saisir votre numéro de téléphone."),
    email: Yup.string()
      .email("Veuillez saisir un email valide.")
      .required("Veuillez saisir votre email."),
    message: Yup.string()
      .min(10, "Trop court !")
      .max(1000, "Trop long !")
      .required("Veuillez saisir votre message."),
  }),

  handleSubmit: (values, { props }) => {
    const message = {
      firstName: values.firstName,
      lastName: values.lastName,
      phoneNumber: values.phoneNumber,
      email: values.email,
      message: values.message,
    };
    props.sendMail(message);
  },
})(Form);
