import React from "react";
import { Carousel, Card, Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import vitrage from "../../assets/images/vitrage.webp";
<img src={vitrage} alt="Vitrage" />
function Caroussel() {
    return (
        <div className="container mt-5">
          
          <Carousel interval={null}>
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
              </div>
            </Carousel.Item>
            {/* Add more Carousel.Item elements for additional sets of cards */}
          </Carousel>
        </div>
      );
    }

export default Caroussel;
