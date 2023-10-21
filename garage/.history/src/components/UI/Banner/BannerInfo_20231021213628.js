import React from "react";

const BannerInfo = (props) => (
    <div className="container-fluid introbanner">
    <div className="row">
      <div className="col-12 text-center p-0 mt-3 mb">
        <div class="image-container">
        <img className="img-fluid w-75 rounded" src={props.imageUrl} alt={props.altText} />
        </div>
      </div>
    </div>
  </div>


);

export default BannerInfo;