import React from "react";
import Banner from "../../components/UI/Banner/BannerWidh100";
import BannerPneusContinental from "../../assets/images/bannerPneusContinental.webp";

const Reparation = (props) => (
  <>
    <div className="h-50">
    <Banner imageUrl={BannerPneusContinental} altText="Promotion pneus" />
    </div>
  </>
);

export default Reparation;
