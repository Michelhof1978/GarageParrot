import React from "react";

const ImageComponent = (props) => (
  <div className="">
    <img src={props.imageUrl} alt={props.altText} />
  </div>
);

export default ImageComponent;
