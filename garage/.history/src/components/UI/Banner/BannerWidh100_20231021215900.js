import React from "react";

const Banner = (props) => (
  <div className="container-fluid p-0 text-cen">
    <div className="row">
      <div className="col-12 text-center p-0">
        <img className="img-fluid banner-image" src={props.imageUrl} alt={props.altText} />
      </div>
    </div>
  </div>
);

export default Banner;
