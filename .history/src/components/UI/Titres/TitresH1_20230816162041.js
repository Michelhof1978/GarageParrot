import React from "react"; 

const TitreH1 = (props) => {
    let backgroundColor = "bg-primary text-white p-2 m-2";
    let myCss = '  ';
    return <h1 className={myCss}>{props.children}</h1>;
    


};

export default TitreH1;


