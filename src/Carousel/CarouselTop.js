import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import './Carousel.css';
import shipOne from './shipOne.jpg';
import shipTwo from './shipTwo.jpg';
import shipThree from './shipThree.jpg';

function CarouselTop() {
  return (
    <Carousel fade>
      <Carousel.Item interval={2000}>
        <img 
          className="carousel-image" 
          src={shipOne}
          alt="First slide" 
        /> 
        <Carousel.Caption>
          <p className="magic carousel-caption">Морские грузоперевозки</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={2000}>
        <img 
          className="carousel-image" 
          src={shipTwo}
          alt="Second slide" 
        /> 
        <Carousel.Caption>
          <p className="magic carousel-caption">Морские грузоперевозки</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={2000}>
        <img 
          className="carousel-image" 
          src={shipThree}
          alt="Third slide" 
        /> 
        <Carousel.Caption>
          <p className="magic carousel-caption">Морские грузоперевозки</p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default CarouselTop;
