import React from "react"; 

const Banner = (props) => (

    <div className="container-fluid p-0"> 
    <div className="row">
      <div className="col-12 text-center p-0"> 
        <img className="img-fluid w-100" src= {props.children} alt="Bannière pub" />
      </div>
    </div>
  </div>
 

);

export default B;


