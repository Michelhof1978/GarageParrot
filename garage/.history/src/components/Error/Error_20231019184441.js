import React from "react";
import TitreH1 from "../UI/Titre/TitresH1";

const error = (props) => (
  <div style={{ backgroundColor: "#FF0000", color: "#FFFFFF", padding: "20px" }}>
    <TitreH1>Erreur{props.type}</TitreH1>
    <div>
      {props.children}
    </div>
  </div>
);

export default error;
