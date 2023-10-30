import bannerInfo from "../../assets/images/bannerInfo.webp";
import React from "react"; 

const BannerInfo = (props) => (

   
   <h3 className="ms-3 text-primary lead fw-bold display-6 mt-3 text-center">
   {props.children}
   </h3>

);

export default BannerInfo;