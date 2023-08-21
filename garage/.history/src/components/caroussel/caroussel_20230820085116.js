import React from "react";
import { Carousel, Card, Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import vitrage from "../../assets/images/vitrage.webp";

function Caroussel() {
    return (
        <div className="container mt-5">
          <h2 className="text-center mb-4">Carousel de Cartes avec Boutons</h2>
          <Carousel nextIcon={<span aria-hidden="true" className="carousel-arrow carousel-arrow-next" />} prevIcon={<span aria-hidden="true" className="carousel-arrow carousel-arrow-prev" />}>
            <Carousel.Item>
              <div className="d-flex justify-content-around">
                <Card>
                <img src={vitrage} alt="Vitrage" />
                </Card>
                <Card>
                <img src={vitrage} alt="Vitrage" />
                </Card>
                <Card>
                <img src={vitrage} alt="Vitrage" />
                </Card>
                <Card>
                <img src={vitrage} alt="Vitrage" />
                </Card>
                <Card>
                <img src={vitrage} alt="Vitrage" />
                </Card>
              </div>
            </Carousel.Item>
            {/* Add more Carousel.Item elements for additional sets of cards */}
          </Carousel>
        </div>
      );
    }
    
    

export default Caroussel;
