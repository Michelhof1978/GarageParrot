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
      <div id="carouselExampleCaptions" className="carousel slide carousel-fade carouselIndex" data-bs-ride="carousel">
        <ol className="carousel-indicators">
          <li data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active"></li>
          <li data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1"></li>
          <li data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2"></li>
          <li data-bs-target="#carouselExampleCaptions" data-bs-slide-to="3"></li>
          <li data-bs-target="#carouselExampleCaptions" data-bs-slide-to="4"></li>
          <li data-bs-target="#carouselExampleCaptions" data-bs-slide-to="5"></li>
          <li data-bs-target="#carouselExampleCaptions" data-bs-slide-to="6"></li>
          <li data-bs-target="#carouselExampleCaptions" data-bs-slide-to="7"></li>
        </ol>
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img src={carousselEntretient01} className="d-block w-100" alt="Slide 1" />
            <div className="carousel-caption d-none d-md-block">
              <h5 className='lead fw-bold'>GARAGE PARROT</h5>
              <p className='lead fw-bold'>Tout Type De Mécanique</p>
            </div>
          </div>
          <div className="carousel-item">
            <img src={carousselEntretient02} className="d-block w-100" alt="Slide 2" />
            <div className="carousel-caption d-none d-md-block">
            <h5 className='lead fw-bold'>GARAGE PARROT</h5>
            <p className='lead fw-bold'>Pneus Toute</p>
            </div>
          </div>
          <div className="carousel-item">
            <img src={carousselEntretient03} className="d-block w-100" alt="Slide 3" />
            <div className="carousel-caption d-none d-md-block">
            <h5 className='lead fw-bold'>GARAGE PARROT</h5>
            <p className='lead fw-bold'>Tout Type De Mécanique</p>
            </div>
          </div>
          <div className="carousel-item">
            <img src={carousselEntretient04} className="d-block w-100" alt="Slide 4" />
            <div className="carousel-caption d-none d-md-block">
            <h5 className='lead fw-bold'>GARAGE PARROT</h5>
            <p className='lead fw-bold'>Tout Type De Mécanique</p>
            </div>
          </div>
          <div className="carousel-item">
            <img src={carousselEntretient05} className="d-block w-100" alt="Slide 5" />
            <div className="carousel-caption d-none d-md-block">
            <h5 className='lead fw-bold'>GARAGE PARROT</h5>
            <p className='lead fw-bold'>Tout Type De Mécanique</p>
            </div>
          </div>
          <div className="carousel-item">
            <img src={carousselEntretient06} className="d-block w-100" alt="Slide 6" />
            <div className="carousel-caption d-none d-md-block">
            <h5 className='lead fw-bold'>GARAGE PARROT</h5>
            <p className='lead fw-bold'>Tout Type De Mécanique</p>
            </div>
          </div>
          <div className="carousel-item">
            <img src={carousselEntretient07} className="d-block w-100" alt="Slide 7" />
            <div className="carousel-caption d-none d-md-block">
            <h5 className='lead fw-bold'>GARAGE PARROT</h5>
            <p className='lead fw-bold'>Tout Type De Mécanique</p>
            </div>
          </div>
          <div className="carousel-item">
            <img src={carousselEntretient08} className="d-block w-100" alt="Slide 8" />
            <div className="carousel-caption d-none d-md-block">
            <h5 className='lead fw-bold'>GARAGE PARROT</h5>
            <p className='lead fw-bold'>Tout Type De Mécanique</p>
            </div>
          </div>
        </div>
        <a className="carousel-control-prev" href="#carouselExampleCaptions" role="button" data-bs-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Précédent</span>
        </a>
        <a className="carousel-control-next" href="#carouselExampleCaptions" role="button" data-bs-slide="next">
          <span className="carousel-control-next-icon" ariahidden="true"></span>
          <span className="visually-hidden">Suivant</span>
        </a>
      </div>
    </div>
  );
};

export default CarousselCard;
