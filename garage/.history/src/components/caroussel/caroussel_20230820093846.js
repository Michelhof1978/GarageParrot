import React from "react";
import { Carousel, Card, Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import vitrage from "../../assets/images/vitrage.webp";

function Caroussel() {
    return (
        <section className="pt-5 pb-5">
            <div className="container">
                <div className="row">
                    <div className="col-6">
                        <h3 className="mb-3">Carousel cards title</h3>
                    </div>
                    <div className="col-6 text-right">
                        <a
                            className="btn btn-primary mb-3 mr-1"
                            href="#carouselExampleIndicators2"
                            role="button"
                            data-slide="prev"
                        >
                            <i className="fa fa-arrow-left"></i>
                        </a>
                        <a
                            className="btn btn-primary mb-3"
                            href="#carouselExampleIndicators2"
                            role="button"
                            data-slide="next"
                        >
                            <i className="fa fa-arrow-right"></i>
                        </a>
                    </div>
                    <div className="col-12">
                        <div
                            id="carouselExampleIndicators2"
                            className="carousel slide"
                            data-ride="carousel"
                        >
                            <div className="carousel-inner">
                                {/* Your carousel items */}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Caroussel;

