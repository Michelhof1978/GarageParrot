import React from "react";
import "font-awesome/css/font-awesome.min.css";
import vitrage from "../../assets/images/vitrage.webp";
import mecanique from "../../assets/images/mecanique.webp";
import "../../App.css";

const CarousselCard = (props) => {
  return (
    <div className="caroussel-container">
      <div id="carouselExampleCaptions" className="carousel slide carouselIndex">
        <div className="carousel-indicators">
          <button
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide-to="0"
            className="active"
            aria-current="true"
            aria-label="Slide 1"
          ></button>
          {/* ... Vos autres indicateurs */}
        </div>

        <div className="carousel-inner">
          <div className="carousel-item active">
            <img src={vitrage} className="d-block w-100" alt="" />
            <div className="carousel-caption d-none d-md-block">
              <h5>ggggggggggggggggggg</h5>
              <p>ggggggggggggggggggggggggg</p>
            </div>
          </div>
        </div>

        

        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide="prev"
        >
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>

        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide="next"
        >
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </div>
  );
};

export default CarousselCard;
