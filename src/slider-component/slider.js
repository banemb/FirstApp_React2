
import React from "react";
import './slider.css'
import sli1 from '../Assets/imageSlide/angular.png'
import sli2 from '../Assets/imageSlide/react.png'
import sli3 from '../Assets/imageSlide/angular.png'

function Slider() {
  //state
    // const sli1 = '../Assets/imageSlide/angular.png';
    // const sli2 = '../Assets/imageSlide/next.png';
    // const sli3 = '../Assets/imageSlide/react.png';
  return (
    <div className="container-fluid  bg-danger h-100">
      <div id="carouselExampleIndicators" className="carousel slide" data-bs-ride="true">
        <div className="carousel-indicators">
          <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
          <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
          <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
        </div>
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img src={sli1} className="d-block w-50 h-100" alt="slide1"/>
          </div>
          <div className="carousel-item">
            <img src={sli2} className="d-block w-50 h-100  " alt="slide2"/>
          </div>
          <div className="carousel-item">
            <img src={sli2} className="d-block w-50 h-100  " alt="slide3"/>
          </div>
        </div>
        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
     </div>
    </div>
  );
  
}

export default Slider;