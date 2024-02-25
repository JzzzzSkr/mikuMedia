import React from "react";
import "./Feature.scss";

const Feature = () => {
  return (
    <div className="featureWrapper">
      <div className="title">
        Featured for you
        <div class="banner">
          <div id="carouselExampleDark" class="carousel carousel-dark slide">
            <div class="carousel-indicators">
              <button
                type="button"
                data-bs-target="#carouselExampleDark"
                data-bs-slide-to="0"
                class="active"
                aria-current="true"
                aria-label="Slide 1"
              ></button>
              <button
                type="button"
                data-bs-target="#carouselExampleDark"
                data-bs-slide-to="1"
                aria-label="Slide 2"
              ></button>
              <button
                type="button"
                data-bs-target="#carouselExampleDark"
                data-bs-slide-to="2"
                aria-label="Slide 3"
              ></button>
            </div>
            <div class="carousel-inner">
              <div class="carousel-item active" data-bs-interval="10000">
                <img
                  src="./assets/kiki1.png"
                  class="d-block w-100"
                  alt="./assets/kiki1.png"
                />
                <div class="carousel-caption d-none d-md-block">
                  <h5 className="title">
                    Once a magical girl reaches the age of 13, she must leave
                    home for a year of independent training, and Qiqi is no
                    exception.
                  </h5>
                </div>
              </div>
              <div class="carousel-item" data-bs-interval="2000">
                <img src="./assets/kiki1.png" class="d-block w-100" alt="..." />
                <div class="carousel-caption d-none d-md-block"></div>
              </div>
              <div class="carousel-item">
                <img src="./assets/kiki1.png" class="d-block w-100" alt="..." />
                <div class="carousel-caption d-none d-md-block"></div>
              </div>
            </div>
            <button
              class="carousel-control-prev"
              type="button"
              data-bs-target="#carouselExampleDark"
              data-bs-slide="prev"
            >
              <span
                class="carousel-control-prev-icon"
                aria-hidden="true"
              ></span>
              <span class="visually-hidden">Previous</span>
            </button>
            <button
              class="carousel-control-next"
              type="button"
              data-bs-target="#carouselExampleDark"
              data-bs-slide="next"
            >
              <span
                class="carousel-control-next-icon"
                aria-hidden="true"
              ></span>
              <span class="visually-hidden">Next</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Feature;