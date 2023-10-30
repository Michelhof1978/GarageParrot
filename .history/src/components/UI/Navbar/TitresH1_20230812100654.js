import React from "react"; 

const titreH1 = (props) => (

    let myCss = "text-start text-primary";
    return <h1 className={myCss}>{props.children}</h1>

);

export default TitreH1;


