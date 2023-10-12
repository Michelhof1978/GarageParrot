import React from 'react';
import 'font-awesome/css/font-awesome.min.css'; // Ensure that this path is correct

import carousselEntretient01 from '../../assets/images/carousselEntretient01.webp';
import carousselEntretient02 from '../../assets/images/carousselEntretient02.webp';
import carousselEntretient03 from '../../assets/images/carousselEntretient03.webp';
import carousselEntretient04 from '../../assets/images/carousselEntretient04.webp';
import carousselEntretient05 from '../../assets/images/carousselEntretient05.webp';
import carousselEntretient06 from '../../assets/images/carousselEntretient06.webp';
import carousselEntretient07 from '../../assets/images/carousselEntretient07.webp';
import carousselEntretient08 from '../../assets/images/carousselEntretient08.webp';

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
            <img src={carousselEntretient01} className="d-block w-100" alt="" />
            <div className="carousel-caption d-none d-md-block">
              <h5>ggggggggggggggggggg</h5>
              <p>ggggggggggggggggggggggggg</p>
            </div>
          </div>

          <div className="carousel-item">
            <img src={carousselEntretient02} className="d-block w-100" alt="" />
            <div className="carousel-caption d-none d-md-block">
              <h5>ggggggggggggggggggg</h5>
              <p>ggggggggggggggggggggggggg</p>
            </div>
          </div>

          <div className="carousel-item">
            <img src={carousselEntretient03} className="d-block w-100" alt="" />
            <div className="carousel-caption d-none d-md-block">
              <h5>ggggggggggggggggggg</h5>
              <p>ggggggggggggggggggggggggg</p>
            </div>
          </div>

          {/* Add the other carousel items in a similar manner as above */}
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
