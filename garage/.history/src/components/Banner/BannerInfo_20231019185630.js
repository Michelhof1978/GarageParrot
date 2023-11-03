import BannerPromoEntretien from "../../assets/images/bannerPromoEntretien.webp";
import React from "react"; 

const BannerPromoEntretien = (props) => (
<>
   
    <div className="container-fluid introbanner">
    <div className="row">
      <div className="col-12 text-center p-0 mt-3">
        <div class="image-container">
          <img className="img-fluid w-75 rounded" src={BannerPromoEntretien} alt="banniere promo" />
        </div>
      </div>
    </div>
    </div>
  </>

);

export default  BannerPromoEntretien ;