import React from "react";
import Banner from "../../components/UI/Banner/Banner";
import bannerPromoEntretien from "../../assets/images/bannerPromoEntretien.webp";

const Reparation = (props) => (
  <>
    <div>
    <Banner imageUrl={bannerPromoEntretien} altText="Banner Promo Entretien" />
    </div>
  </>
);

export default Reparation;
