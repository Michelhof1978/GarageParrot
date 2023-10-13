import React from "react";
import "font-awesome/css/font-awesome.min.css";
import vitrage from "../../assets/images/vitrage.webp";
import mecanique from "../../assets/images/mecanique.webp";


const CarousselCard = (props) => {
    return (
      <div className="container-fluid caroussel-container p-0">
        <div
          id="carouselExampleCaptions"
          className="carousel slide carouselIndex"
          style={{ height: "0vh" }}>

          </div>
      {/* Utilisez 50vh (50% de la hauteur de la fenêtre) ou la valeur qui vous convient */}
      <div
        id="carouselExampleCaptions"
        className="carousel slide carouselIndex"
        style={{ height: "50%" }}
      >
        {/* Utilisez "100%" pour que le carrousel occupe toute la hauteur de son parent */}
        <div className="carousel-indicators">
          <button
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide-to="0"
            className="active"
            aria-current="true"
            aria-label="Slide 1"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide-to="1"
            aria-label="Slide 2"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide-to="2"
            aria-label="Slide 3"
          ></button>
        </div>

        <div className="carousel-inner">
          <div className="carousel-item active">
            <img src={vitrage} className="d-block w-100" alt="" />
            <div className="carousel-caption d-none d-md-block">
              <h5></h5>
              <p></p>
            </div>
          </div>

          <div className="carousel-item">
            <img
              src="../images/tournesol.webp"
              className="d-block w-100"
              alt="Vacances Auvergne"
            />
            <div className="carousel-caption d-none d-md-block">
              <h5>Champs de tournesols</h5>
              <p>Venez découvrir la beauté des paysages</p>
            </div>
          </div>

          <div className="carousel-item">
            <img
              src="../images/poule.webp"
              className="d-block w-100"
              alt="Vacances Allier"
            />
            <div className="carousel-caption d-none d-md-block">
              <h5>Fermes Pédagogiques</h5>
              <p>Venez visiter des fermes pour le plaisir des enfants</p>
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
          <span className="carousel-control-next-icon" ariahidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </div>
  );
};

export default CarousselCard;
