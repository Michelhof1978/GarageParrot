import React from "react";
import Logo1 from "../../../assets/images/logo1.webp";

const Logo1 = (props) => (
  
      <div className="">
        <img className="img-fluid banner-image" src={props.imageUrl} alt={props.altText} />
      </div>
    
);

export default Logo1;
