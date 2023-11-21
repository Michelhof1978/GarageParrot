import React from 'react';
import ReCAPTCHA from "react-google-recaptcha";

const Recaptcha = ({ onChange }) => {
  return (
    <ReCAPTCHA
      sitekey="6LeouOsnAAAAAJtNEXrK24tmIgsSaLO_ZdUaJzXJ"
      onChange={onChange}
    />
  );
};

export default Recaptcha;