import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Carousel} from 'react-bootstrap';
import './HeroSection.css';

function HeroSection() {
  return (
    <div className="hero-section">
      <Carousel>
        <Carousel.Item className="c-item">
          <img
            className="d-block w-100 h-100 bg-prlx"
            src="https://preview.ab-themes.com/revelance/wp-content/uploads/revslider/parallax_slider/slide.jpg"
            alt="First slide"
          />
          <Carousel.Caption className="cap_tion">
            <h3>First slide label</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item className="c-item" >
          <img
            className="d-block w-100 h-100 bg-prlx"
            src="https://preview.ab-themes.com/revelance/wp-content/uploads/revslider/parallax_slider/Untitled-1-e1399994290886.jpg"
            alt="Third slide"
          />

          <Carousel.Caption className="cap_tion">
            <h3>Second slide label</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item className="c-item">
          <img
            className="d-block w-100 h-100 bg-prlx"
            src="https://preview.ab-themes.com/revelance/wp-content/uploads/revslider/parallax_slider/taxi.jpg"
            alt="Third slide"
          />

          <Carousel.Caption className="cap_tion">
            <h3>Third slide label</h3>
            <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item className="c-item">
          <img
            className="d-block w-100 h-100 bg-prlx"
            src="https://image.freepik.com/free-photo/group-people-working-website-template_53876-25068.jpg"
            alt="Third slide"
          />

          <Carousel.Caption className="cap_tion">
            <h3>Third slide label</h3>
            <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  );
}

export default HeroSection;
