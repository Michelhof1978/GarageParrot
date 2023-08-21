import React from "react";
import { Carousel, Card, Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import vitrage from "../../assets/images/vitrage.webp";

function Caroussel() {
    return (
        <section class="pt-5 pb-5">
            <div class="container">
                <div class="row">
                    <div class="col-6">
                        <h3 class="mb-3">Carousel cards title</h3>
                    </div>
                    <div class="col-6 text-right">
                        <a
                            class="btn btn-primary mb-3 mr-1"
                            href="#carouselExampleIndicators2"
                            role="button"
                            data-slide="prev"
                        >
                            <i class="fa fa-arrow-left"></i>
                        </a>
                        <a
                            class="btn btn-primary mb-3"
                            href="#carouselExampleIndicators2"
                            role="button"
                            data-slide="next"
                        >
                            <i class="fa fa-arrow-right"></i>
                        </a>
                    </div>
                    <div class="col-12">
                        <div
                            id="carouselExampleIndicators2"
                            class="carousel slide"
                            data-ride="carousel"
                        >
                            <div class="carousel-inner">
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

