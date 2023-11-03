import React from "react";
import { Carousel, Card, Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

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
    
    export default App;
    Dans cet exemple, j'ai ajouté les trois cartes dans un conteneur div avec la classe d-flex justify-content-around pour les aligner horizontalement avec un espace équivalent entre elles. Vous pouvez personnaliser les styles et le contenu des cartes en fonction de vos besoins.
    
    Notez que l'utilisation de interval={null} dans le composant Carousel empêchera le carrousel de changer automatiquement de diapositive. Les flèches de navigation du carrousel vous permettront de faire défiler les ensembles de cartes.
    
    N'oubliez pas d'ajuster les images, les contenus et les styles en fonction de votre projet.
    
    
    
    
    
    
 
}

export default Caroussel;
