import React from "react";
import vitrage from "../../assets/images/vitrage.webp";
import mecanique from "../../assets/images/mecanique.webp";
import "font-awesome/css/font-awesome.min.css";

import React from "react";

import "font-awesome/css/font-awesome.min.css";
import vitrage from "../../assets/images/vitrage.webp";
import mecanique from "../../assets/images/mecanique.webp";

const CustomCarousel = () => {
    return (
      <div className="custom-carousel-container">
        <div className="custom-carousel-arrows">
          <span className="custom-carousel-arrow prev">
            <i className="fa fa-chevron-left" />
          </span>
          <span className="custom-carousel-arrow next">
            <i className="fa fa-chevron-right" />
          </span>
        </div>
        <Carousel prevLabel="" nextLabel="">
          <Carousel.Item>
            <div className="row">
              <div className="col-md-4">
                <Card>
                  <Card.Img variant="top" src={vitrage} alt="Image 1" />
                  <Card.Body>
                    <Card.Title>Card 1</Card.Title>
                    <Card.Text>This is the content of Card 1.</Card.Text>
                    <Button variant="primary">Learn more</Button>
                  </Card.Body>
                </Card>
              </div>
              <div className="col-md-4">
                <Card>
                  <Card.Img variant="top" src={mecanique} alt="Image 2" />
                  <Card.Body>
                    <Card.Title>Card 2</Card.Title>
                    <Card.Text>This is the content of Card 2.</Card.Text>
                    <Button variant="primary">Learn more</Button>
                  </Card.Body>
                </Card>
              </div>
              {/* Add another card */}
            </div>
          </Carousel.Item>
          {/* Add more Carousel.Items as needed */}
        </Carousel>
      </div>
    );
  };
  
  export default ;
  
  
  
  
  
  
  

// const Caroussel = (props) =>{
//     return (
        
//         <section className="pt-5 pb-5">
//         <div className="container">
//             <div className="row">
                
//                 <div className="col-6 text-right">
//                 <a className="btn btn-primary mb-3 mr-1" href="#carouselExampleIndicators2" role="button" data-slide="prev">
//                     <i className="fa fa-arrow-left"></i>
//                 </a>
//                 <a className="btn btn-primary mb-3 " href="#carouselExampleIndicators2" role="button" data-slide="next">
//                     <i className="fa fa-arrow-right"></i>
//                 </a>

//                 </div>
//                 <div className="col-12">
//                     <div id="carouselExampleIndicators2" className="carousel slide" data-ride="carousel">
    
//                         <div className="carousel-inner">
//                             <div className="carousel-item active">
//                                 <div className="row">
    
//                                     <div className="col-md-4 mb-3">
//                                         <div className="card">
//                                             <img className="img-fluid" alt="100%x280" src={vitrage} alt="prestation"/>
//                                             <div className="card-body">
//                                                 <h4 className="card-title">Special title treatment</h4>
//                                                 <p className="card-text">With supporting text below as a natural lead-in to additional content.</p>
    
//                                             </div>
//                                             </div>
//                                 </div>
//                                 <div className="col-md-4 mb-3">
//                                     <div className="card">
//                                         <img className="img-fluid" alt="100%x280" src={mecanique} alt="prestation"/>
//                                         <div className="card-body">
//                                             <h4 className="card-title">Special title treatment</h4>
//                                             <p className="card-text">With supporting text below as a natural lead-in to additional content.</p>

//                                         </div>
//                                     </div>
//                                 </div>
//                                 <div className="col-md-4 mb-3">
//                                     <div className="card">
//                                         <img className="img-fluid" alt="100%x280" src={vitrage} alt="prestation"/>
//                                             <h4 className="card-title">Special title treatment</h4>
//                                             <p className="card-text">With supporting text below as a natural lead-in to additional content.</p>

//                                         </div>
//                                     </div>
//                                 </div>

//                             </div>
//                         </div>
//                         <div className="carousel-item">
//                             <div className="row">
//                             <div className="col-md-4 mb-3">
//                                     <div className="card">
//                                         <img className="img-fluid" alt="100%x280" src={mecanique} alt="prestation"/>
//                                         <div className="card-body">
//                                             <h4 className="card-title">Special title treatment</h4>
//                                             <p className="card-text">With supporting text below as a natural lead-in to additional content.</p>

//                                         </div>

//                                     </div>
//                                 </div>
//                                 <div className="col-md-4 mb-3">
//                                     <div className="card">
//                                         <img className="img-fluid" alt="100%x280" src={vitrage} alt="prestation"/>
//                                         <div className="card-body">
//                                             <h4 className="card-title">Special title treatment</h4>
//                                             <p className="card-text">With supporting text below as a natural lead-in to additional content.</p>

//                                         </div>
//                                     </div>
//                                 </div>
//                                 <div className="col-md-4 mb-3">
//                                     <div className="card">
//                                         <img className="img-fluid" alt="100%x280" src={mecanique} alt="prestation"/>
//                                         <div className="card-body">
//                                             <h4 className="card-title">Special title treatment</h4>
//                                             <p className="card-text">With supporting text below as a natural lead-in to additional content.</p>

//                                         </div>
//                                         </div>
//                                 </div>

//                             </div>
//                         </div>
//                         <div className="carousel-item">
//                             <div className="row">

//                                 <div className="col-md-4 mb-3">
//                                     <div className="card">
                                    
//                                         <img className="img-fluid" alt="100%x280" src={vitrage} alt="Vitrage" />
//                                         <div className="card-body">
//                                             <h4 className="card-title">Special title treatment</h4>
//                                             <p className="card-text">With supporting text below as a natural lead-in to additional content.</p>

//                                         </div>

//                                     </div>
//                                 </div>
//                                 <div className="col-md-4 mb-3">
//                                     <div className="card">
//                                         <img className="img-fluid" alt="100%x280" src={mecanique} alt="Vitrage" />
//                                         <div className="card-body">
//                                             <h4 className="card-title">Special title treatment</h4>
//                                             <p className="card-text">With supporting text below as a natural lead-in to additional content.</p>

//                                         </div>
//                                     </div>
//                                 </div>
//                                 <div className="col-md-4 mb-3">
//                                     <div className="card">
//                                         <img className="img-fluid" alt="100%x280" src={vitrage} alt="Vitrage" />
//                                         <div className="card-body">
//                                             <h4 className="card-title">Special title treatment</h4>
//                                             <p className="card-text">With supporting text below as a natural lead-in to additional content.</p>
//                                         </div>
//                                     </div>
//                                 </div>
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//         </div>
   
// </section>

//       );
//     }
    
    
   
// export default Caroussel;
