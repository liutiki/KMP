import React, { useEffect, useRef } from 'react'; 
import Carousel from 'react-bootstrap/Carousel'; 
import { gsap } from 'gsap'; 
import './Carousel.css'; 
import shipOn from './shipOn.jpg'; 
import shipTwo from './shipTwo.jpg'; 
import shipThree from './shipThree.jpg'; 

function CarouselTop() {
  // Создаем массив ссылок на элементы, которые будем анимировать
  const captionRefs = useRef([]);

  useEffect(() => {
    // Анимация появления текста для каждого элемента
    captionRefs.current.forEach((caption) => {
      gsap.fromTo(caption, 
        { opacity: 0 }, // Начальное состояние
        { opacity: 1, duration: 1, delay:0.5, y:-20} // Конечное состояние
      );
    });
  }, []); // Пустой массив зависимостей, чтобы анимация выполнялась только один раз при монтировании

  return ( 
    <Carousel fade> 
      <Carousel.Item interval={2000}> 
        <img  
          className="carousel-image"  
          src={shipOn} 
          alt="First slide"  
        />  
        <Carousel.Caption> 
          <p ref={el => captionRefs.current[0] = el} className="magic carousel-caption">Доставка грузов из Калининграда в Санкт-Петербург</p> 
        </Carousel.Caption> 
      </Carousel.Item> 
      <Carousel.Item interval={1000}> 
        <img  
          className="carousel-image"  
          src={shipTwo} 
          alt="Second slide"  
        />  
        <Carousel.Caption> 
          <p ref={el => captionRefs.current[1] = el} className="magic carousel-caption">Доставка грузов из Калининграда в Санкт-Петербург</p> 
        </Carousel.Caption> 
      </Carousel.Item> 
      <Carousel.Item interval={2000}> 
        <img  
          className="carousel-image"  
          src={shipThree} 
          alt="Third slide"  
        />  
        <Carousel.Caption> 
          <p ref={el => captionRefs.current[2] = el} className="magic carousel-caption">Доставка грузов из Калининграда в Санкт-Петербург</p> 
        </Carousel.Caption> 
      </Carousel.Item> 
    </Carousel> 
  ); 
} 

export default CarouselTop;


