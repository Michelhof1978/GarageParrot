import React from "react";
import Logo1 from "../../../assets/images/logo1.webp";

const Logo1 = (props) => (
  
      <div className="col-12 text-center p-0">
        <img className="img-fluid banner-image" src={props.imageUrl} alt={props.altText} />
      </div>
    </div>
  </div>
);

export default Logo1;
