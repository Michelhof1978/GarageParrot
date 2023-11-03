import React from "react";
import Logo from "../../../assets/images/logo1.webp";

const Logo = (props) => (
    <div className="container-fluid introbanner">
    <div className="row">
      <div className="col-12 text-center p-0 mt-3">
        <div class="image-container">
        <img className="img-fluid w-75 rounded" src={props.imageUrl} alt={props.altText} />
        </div>
      </div>
    </div>
  </div>


);

export default BannerInfo;