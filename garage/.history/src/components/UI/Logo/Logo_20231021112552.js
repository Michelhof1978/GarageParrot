import React from "react";


const Logo = (props) => (
   
      <div className="col-12 text-center ">
        <div class="image-container">
        <img className="img-fluid w-75 rounded" src={props.imageUrl} alt={props.altText} />
        </div>
      </div>
  
  


);

export default Logo;