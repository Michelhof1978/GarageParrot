import React from "react";

const Banner = (props) => (
    <div className="container-fluid introbanner">
    <div className="row">
      <div className="col-12 text-center p-0 mt-3">
        <div class="image-container">
          <img className="img-fluid w-75 rounded" src={BannerInfo} alt="banniere arrivage voitures" />
        </div>
      </div>
    </div>
  </div>

  <div className="container-fluid p-0">
    <div className="row">
      <div className="col-12 text-center p-0">
        <img className="img-fluid w-" src={props.imageUrl} alt={props.altText} />
      </div>
    </div>
  </div>
);

export default Banner;