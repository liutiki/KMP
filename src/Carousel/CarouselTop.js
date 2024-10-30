import React, { useEffect, useRef } from 'react'; 
import Carousel from 'react-bootstrap/Carousel'; 
import { gsap } from 'gsap'; // Импортируем GSAP
import './Carousel.css'; 
import shipOne from './shipOne.jpg'; 
import shipTwo from './shipTwo.jpg'; 
import shipThree from './shipThree.jpg'; 
 
function CarouselTop() {
  // Создаем ссылку на элемент, который будем анимировать
  const captionRef = useRef(null);

  useEffect(() => {
    // Анимация появления текста
    gsap.fromTo(captionRef.current, 
      { opacity: 0 }, // Начальное состояние
      { opacity: 1, duration: 1 } // Конечное состояние
    );
  }, []); // Пустой массив зависимостей, чтобы анимация выполнялась только один раз при монтировании

  return ( 
    <Carousel fade> 
      <Carousel.Item interval={2000}> 
        <img  
          className="carousel-image"  
          src={shipOne} 
          alt="First slide"  
        />  
        <Carousel.Caption> 
          <p ref={captionRef} className="magic carousel-caption">Доставка грузов из Калининграда в Санкт-Петербург</p> 
        </Carousel.Caption> 
      </Carousel.Item> 
      <Carousel.Item interval={2000}> 
        <img  
          className="carousel-image"  
          src={shipTwo} 
          alt="Second slide"  
        />  
        <Carousel.Caption> 
          <p ref={captionRef} className="magic carousel-caption">Доставка грузов из Калининграда в Санкт-Петербург</p> 
        </Carousel.Caption> 
      </Carousel.Item> 
      <Carousel.Item interval={2000}> 
        <img  
          className="carousel-image"  
          src={shipThree} 
          alt="Third slide"  
        />  
        <Carousel.Caption> 
          <p ref={captionRef} className="magic carousel-caption">Доставка грузов из Калининграда в Санкт-Петербург</p> 
        </Carousel.Caption> 
      </Carousel.Item> 
    </Carousel> 
  ); 
} 
 
export default CarouselTop;

