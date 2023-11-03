import React from "react";
import Banner from "../../components/UI/Banner/BannerWidh100";
import BannerPneusContinental from "../../assets/images/bannerPneusContinental.webp";
import TitreH1 from "../../components/UI/Titres/TitreH1";
const Reparation = (props) => (
  <>
    <div className="">
    <Banner imageUrl={BannerPneusContinental} altText="Promotion pneus" />
    <TitreH1>
            Nos Services De réparation et d'Entretien
            </TitreH1>
    </div>
  </>
);

export default Reparation;
