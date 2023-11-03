import React from "react"; 

const Textes = (props) => (

   
    <p className="fw-bold lead bg-light rounded shadow p-4 pb-5 bg-white rounded ms-1 me-1 mt-3">
         {props.children}
    </p>

);

export default Textes;