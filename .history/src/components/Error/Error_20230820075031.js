import React from "react";
import TitreH1 from "../UI/Titreh1/TitresH1";

const error = (props) => (
  <div style={{ backgroundColor: "#FF0000", color: 3", padding: "20px" }}>
    <TitreH1 fontColor="white" bgColor="bg-danger">Erreur{props.type}</TitreH1>
    <div>
      {props.children}
    </div>
  </div>
);

export default error;
