import React from "react"; 

const TitreH1 = (props) => {
    let fontColor = props.fontColor ? props.Color : "bg-danger";
    let myCss = '  ${backgroundColor}';
    return <h1 className={myCss}>{props.children}</h1>;
    


};

export default TitreH1;

