import React from "react";
import { Carousel, Card, Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
impo

function Caroussel() {
    return (
        <div className="container mt-5">
          <h2 className="text-center mb-4">Carousel de Cartes avec Boutons</h2>
          <Carousel interval={null}>
            <Carousel.Item>
              <div className="d-flex justify-content-around">
                <Card>
                  {/* Card 1 content */}
                </Card>
                <Card>
                  {/* Card 2 content */}
                </Card>
                <Card>
                  {/* Card 3 content */}
                </Card>
              </div>
            </Carousel.Item>
            {/* Add more Carousel.Item elements for additional sets of cards */}
          </Carousel>
        </div>
      );
    }

export default Caroussel;
