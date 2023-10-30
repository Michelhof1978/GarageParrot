import React from "react"; 

const TitreH1 = (props) => {
    let backgroundColor = props.bgColor ? props.Color : "bg-danger";
    let myCss = '  ${backgroundColor} text-white text-center p-2 m-2';
    return <h1 className={myCss}>{props.children}</h1>;
    


};

export default TitreH1;


