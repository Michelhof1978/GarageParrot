import "font-awesome/css/font-awesome.min.css";
import vitrage from "../../assets/images/vitrage.webp";
import carousselEntretient01 from "../../assets/images/carousselEntretient01.webp";
import carousselEntretient02 from "../../assets/images/carousselEntretient02.webp";
import carousselEntretient03 from "../../assets/images/carousselEntretient02.webp";
import carousselEntretient04 from "../../assets/images/carousselEntretient04.webp";
import carousselEntretient05 from "../../assets/images/carousselEntretient05.webp";
import carousselEntretient06 from "../../assets/images/carousselEntretient06.webp";
import carousselEntretient07 from "../../assets/images/carousselEntretient07.webp";
import carousselEntretient08 from "../../assets/images/carousselEntretient08.webp";
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

          