// TitreH1.js
import React from "react";

const TitreH1 = (props) => {
  let fontColor = props.fontColor ? props.fontColor : "primary";
  let bgColor = props.bgColor ? props.bgColor : ""; // New line
  let myCss = `text-center ${fontColor} ${bgColor}`; // Include bgColor
  return <h1 className={myCss}>{props.children}</h1>;
};

export default TitreH1;
