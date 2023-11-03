import React from "react";
import vitrage from "../../assets/images/vitrage.webp";
import mecanique from "../../assets/images/mecanique.webp";
import "font-awesome/css/font-awesome.min.css";

const CarousselCard = (props) => {
  return (
    <div class="container d-flex justify-content-center ">
  <div id="carouselExampleCaptions" class="carousel slide carousel carouselIndex ">

    <div class="carousel-indicators ">
      <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
      <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
      <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>

    </div>

    <div class="carousel-inner ">
      <div class="carousel-item active ">
        <img src=" ../images/oies.webp" class="d-block w-100" alt="Tourisme Auvergne">
        <div class="carousel-caption d-none d-md-block">
          <h5>Ballades au bord des étangs</h5>
          <p>De multiples randonées à faire à pieds ou en vélo</p>
        </div>
      </div>

      <div class="carousel-item">
        <img src="../images/tournesol.webp" class="d-block w-100 " alt="Vacances Auvergne">
        <div class="carousel-caption d-none d-md-block">
          <h5>Champs de tournesols</h5>
          <p>Venez découvrir la beauté des paysages</p>
        </div>
      </div>

      <div class="carousel-item">
        <img src=" ../images/poule.webp" class="d-block w-100 " alt="Vacances Allier">
        <div class="carousel-caption d-none d-md-block">
          <h5>Fermes Pédagogiques</h5>
          <p>Venez visiter des fermes pour le plaisir des enfants</p>
        </div>

      </div>
    </div>

    <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
      <span class="carousel-control-prev-icon" aria-hidden="true"></span>
      <span class="visually-hidden">Previous</span>
    </button>

    <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
      <span class="carousel-control-next-icon" aria-hidden="true"></span>
      <span class="visually-hidden">Next</span>
    </button>

  </div>
</div>
 

export default CarousselCard;
