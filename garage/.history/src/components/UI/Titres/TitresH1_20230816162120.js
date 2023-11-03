import React from "react"; 

const TitreH1 = (props) => {
    let backgroundColor = "bg-danger";
    let myCss = '  ';
    return <h1 className={myCss}>{props.children}</h1>;
    


};

export default TitreH1;


