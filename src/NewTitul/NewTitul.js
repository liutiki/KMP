import { useEffect } from 'react';
import './NewTitul.css';
import shipOn from './shipOn.jpg';
import { gsap } from 'gsap';
import Custombar from '../Navbar/Navbar';


function NewTitul(){

    useEffect(() => {
        // Анимация для seaWay-position
        gsap.fromTo(
            '.seaWay-position',
            { y: 10, opacity: 0 }, // Начальные значения
            { y: 0, opacity: 1,delay:1, duration: 1 } // Конечные значения и длительность
        );
    }, []);


    return(
        <div className="titul-container">
            <div className="contactsNewTop">
          
               <Custombar/>
            </div>
        
        <div >
<img className="shipTitul" src={shipOn} alt="shipTitul" />
        </div>

<div className="delivery-position">

    <div className="seaWay-position">
    <p className="your-Top">ВАШ НАДЕЖНЫЙ ПАРТНЕР В СФЕРЕ МОРСКИХ ПЕРЕВОЗОК</p>
    <p className="seaWay">Морские</p>
    <p className="seaWay">Грузоперевозки</p>
   
    <div className="seaWayWork-position">
  
      <p className="seaWayWork">Работаем по направлению</p>
      <p className="seaWayWork">Калининград - Санкт-Петербург</p>   
      <p className="seaWayOffice">Представительства в Калининграде и Санкт-Петербурге</p>   
      <button className="btnCall-top">Связаться с нами</button> 
    </div>
   
  
    </div>

   
 
    <div className="your-position">
    <p className="your"></p>
    <p className="your"></p>    
    </div>
   
</div>
</div>
    )
}

export default NewTitul;
