import React from "react";
import { Carousel, Card, Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import vitrage from "../../assets/images/vitrage.webp";
<img src={vitrage} alt="Vitrage" />
function Caroussel() {
    return (
        <div className="container mt-5">
          <h2 className="text-center mb-4">Carousel de Cartes avec Boutons</h2>
          <Carousel nextIcon={<span aria-hidden="true" className="carousel-arrow carousel-arrow-next" />} prevIcon={<span aria-hidden="true" className="carousel-arrow carousel-arrow-prev" />}>
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
    
    export default App;
    Dans cet exemple, nous avons utilisé les propriétés nextIcon et prevIcon de la composante Carousel pour personnaliser les icônes des flèches de navigation. Nous avons également ajouté les classes carousel-arrow-next et carousel-arrow-prev pour styliser les flèches.
    
    Maintenant, dans votre fichier CSS (par exemple, App.css), vous pouvez définir les styles pour les flèches en utilisant les classes carousel-arrow-next et carousel-arrow-prev :
    
    css
    Copy code
    .carousel-arrow {
      position: absolute;
      top: 50%;
      transform: translateY(-50%);
      font-size: 2rem;
      z-index: 1;
    }
    
    .carousel-arrow-prev {
      left: -40px; /* Adjust the distance from the left edge */
    }
    
    .carousel-arrow-next {
      right: -40px; /* Adjust the distance from the right edge */
    }
    Dans ce code CSS, nous utilisons position: absolute pour positionner les flèches en dehors du carrousel, top: 50% et transform: translateY(-50%) pour les centrer verticalement, et left et right pour définir la distance par rapport aux bords gauche et droit du carrousel. Vous pouvez ajuster les valeurs en fonction de vos besoins.
    
    N'oubliez pas d'ajuster les styles et le contenu des cartes en fonction de votre projet.
    
    
    
    
    
    

export default Caroussel;
