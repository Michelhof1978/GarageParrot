import React from "react";
import TitreH1 from "../UI/Titres/TitreH1";

const Error = (props) => (
  <div
    style={{ backgroundColor: "#FF0000", color: "#FFFFFF", padding: "20px" }}
  >
    <TitreH1 class>Erreur{props.type}</TitreH1>
    <div>{props.children}</div>
  </div>
);

export default Error;
