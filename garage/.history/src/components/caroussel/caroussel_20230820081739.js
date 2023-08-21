import React from "react";
import { Carousel, Card, Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <div className="container mt-5">
      <h2 className="text-center mb-4">Carousel de Cartes avec Boutons</h2>
      <Carousel>
        <Carousel.Item>
          <Card>
            <Card.Img variant="top" src="image1.jpg" />
            <Card.Body>
              <Card.Title>Card 1</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up the bulk of
                the card's content.
              </Card.Text>
              <Button variant="primary">En savoir plus</Button>
            </Card.Body>
          </Card>
        </Carousel.Item>
        <Carousel.Item>
          <Card>
            <Card.Img variant="top" src="image2.jpg" />
            <Card.Body>
              <Card.Title>Card 2</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up the bulk of
                the card's content.
              </Card.Text>
              <Button variant="primary">En savoir plus</Button>
            </Card.Body>
          </Card>
        </Carousel.Item>
        {/* Ajoutez d'autres éléments Carousel.Item ici si nécessaire */}
      </Carousel>
    </div>
  );
}

export default App;
