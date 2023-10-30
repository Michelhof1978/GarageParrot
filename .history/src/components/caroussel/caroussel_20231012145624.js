import React from 'react';
import 'font-awesome/css/font-awesome.min.css'; // Assurez-vous que le chemin est correct
import 'bootstrap/dist/css/bootstrap.min.css'; // Assurez-vous que Bootstrap est importé correctement
import { Link } from 'react-router-dom';

import carousselEntretient01 from '../../assets/images/carousselEntretient01.webp';
import carousselEntretient02 from '../../assets/images/carousselEntretient02.webp';
import carousselEntretient03 from '../../assets/images/carousselEntretient03.webp';
import carousselEntretient04 from '../../assets/images/carousselEntretient04.webp';
import carousselEntretient05 from '../../assets/images/carousselEntretient05.webp';

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
        </ol>
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img src={carousselEntretient01} className="d-block w-100 carousel-image" alt="Slide 1" />
            <div className="carousel-caption d-none d-md-block">
              <h2 className='lead fw-bold'>GARAGE PARROT</h2>
              <p className='lead fw-bold'>Tout Type De Mécanique</p>
              <Link to="/reparation" className="btn btn-primary">Plus d'Infos Ici !</Link>
            </div>
          </div>
          <div className="carousel-item">
            <img src={carousselEntretient02} className="d-block w-100 carousel-image" alt="Slide 2" />
            <div className="carousel-caption d-none d-md-block">
            <h2 className='lead fw-bold'>GARAGE PARROT</h2>
              <p className = 'lead fw-bold'>Pneus Toutes Saisons</p>
              <Link to="/reparation" className="btn btn-primary">Plus d'Infos Ici !</Link>
            </div>
          </div>
          <div className="carousel-item">
            <img src={carousselEntretient03} className="d-block w-100 carousel-image" alt="Slide 3" />
            <div className="carousel-caption d-none d-md-block">
            <h2 className='lead fw-bold'>GARAGE PARROT</h2>
              <p className='lead fw-bold'>Vidange</p>
              <Link to="/reparation" className="btn btn-primary">Plus d'Infos Ici !</Link>
            </div>
          </div>
          <div className="carousel-item">
            <img src={carousselEntretient04} className="d-block w-100 carousel-image" alt="Slide 4" />
            <div className="carousel-caption d-none d-md-block">
            <h2 className='lead fw-bold'>GARAGE PARROT</h2>
              <p className='lead fw-bold'>Renplacement de vitrage</p>
              <Link to="/reparation" className="btn btn-primary">Plus d'Infos Ici !</Link>
            </div>
          </div>
          <div className="carousel-item">
            <img src={carousselEntretient05} className="d-block w-100 carousel-image" alt="Slide 5" />
            <div className="carousel-caption d-none d-md-block">
            <h2 className='lead fw-bold'>GARAGE PARROT</h2>
              <p className='lead fw-bold'>Mise à Niveau Gratuit !</p>
              <Link to="/reparation" className="btn btn-primary">Plus d'Infos Ici !</Link>
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
