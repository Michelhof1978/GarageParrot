import React from "react";
import Banner from "../../components/UI/Banner/Banner";
import bannerPromoEntretien from "../../assets/images/bannerPromoEntretien.webp";

const Reparation = (props) => (
  <>
    <div>
      <Banner>
        <img src={bannerPromoEntretien} alt="Banner Promo Entretien" />
      </Banner>
    </div>
  </>
);

export default Reparation;
