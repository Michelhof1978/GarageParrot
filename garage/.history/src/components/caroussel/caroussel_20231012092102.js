import React from "react";
import vitrage from "../../assets/images/vitrage.webp";
import mecanique from "../../assets/images/mecanique.webp";
import "font-awesome/css/font-awesome.min.css";

const Caroussel = (props) => {
  return (
    <section className="pt-5 pb-5">
      <div className="container-fluid">
        <div className="row">
          <div className="col-12">
            <div
              id="carouselExampleIndicators2"
              className="carousel slide"
              data-ride="carousel"
            >
              <div className="carousel-inner">
                <div className="carousel-item active">
                  <div className="row">
                    <div className="col-md-4">
                      <div className="card">
                        <img
                          className="img-fluid"
                          alt="100%x280"
                          src={vitrage}
                          alt="prestation"
                        />
                        <div className="card-body">
                          <h4 className="card-title">Special title treatment</h4>
                          <p className="card-text">
                            With supporting text below as a natural lead-in to
                            additional content.
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-4">
                      <div className="card">
                        <img
                          className="img-fluid"
                          alt="100%x280"
                          src={mecanique}
                          alt="prestation"
                        />
                        <div className="card-body">
                          <h4 className="card-title">Special title treatment</h4>
                          <p className="card-text">
                            With supporting text below as a natural lead-in to
                            additional content.
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-4">
                      <div className="card">
                        <img
                          className="img-fluid"
                          alt="100%x280"
                          src={vitrage}
                          alt="prestation"
                        />
                        <div className="card-body">
                          <h4 className="card-title">Special title treatment</h4>
                          <p className="card-text">
                            With supporting text below as a natural lead-in to
                            additional content.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                {/* Ajoutez d'autres éléments de carrousel ici */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Caroussel;
