import React from "react";
import TitreH1 from "../UI/Titreh1/TitresH1";

const Error = (props) => (
  <>
    <TitreH1 bgColor="bg-danger">Erreur 404{props.type}</TitreH1>
    <div>
      {props.children}
    </div>
  </>
);

export default Error;
