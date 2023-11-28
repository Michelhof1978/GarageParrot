import React from "react";
import TitreH1 from "../UI/Titres/TitreH1";

const Error = (props) => (
  <div
    style={{
      backgroundColor: "#FF0000",
      color: "#FFFFFF",
      padding: "20px",
      textAlign: "center", // Centrer le texte
    }}
  >
    <TitreH1 style={{ fontSize: "2em" }}>Erreur{props.type}</TitreH1>
    <div style={{ fontSize: "1.5em" }}>{props.children}</div>
  </div>
);

export default Error;
