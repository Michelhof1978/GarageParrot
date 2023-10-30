import React from "react";

const CardFiche = (props) => {
  return (
    <div className="card">
      <div className="card-body">
        <h5 className="card-title">ID du véhicule : {props.id}</h5>
      </div>
    </div>
  );
};

export default CardFiche;
