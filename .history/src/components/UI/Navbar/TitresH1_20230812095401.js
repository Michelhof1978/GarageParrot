import React from "react"; 

const titreH1 = (props) => (

    let myCss = "text-center text-primary";
    return <h1 className={myCss}>{props.children}</h1>

);

export default titreH1;


