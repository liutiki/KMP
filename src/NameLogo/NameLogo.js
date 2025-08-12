import React, { useEffect, useRef } from 'react';
import { useInView } from 'react-intersection-observer';
import photoShip from '../Assets/photo-ship.jpg';
import CallButton from '../CallButton/CallButton';
import check from '../Assets/check.png';
import './NameLogo.css';
import { gsap } from 'gsap';


function NameLogo() {
    const { ref, inView } = useInView({
        threshold: 0.1,
    });

    const imgRef = useRef(null);
    useEffect(() => {
        if (inView) {
            gsap.fromTo(imgRef.current, 
                { opacity: 0, scale: 0.5 }, 
                { opacity: 1, scale: 1, duration: 1, } 
            );
        }
    }, [inView]);

    return (
        <div className="phraze" ref={ref}>
            <img className="ship" src={photoShip} alt="ship" ref={imgRef} />
            <div className="phrazeSecond">
                <p className="safety"><img className="check"src={check} alt="checkMark"/>Квалифицированный логистический оператор</p>
                <p className="safety"><img className="check"src={check} alt="checkMark"/>Резидент Особой Экономической Зоны</p>
                <p className="safety"><img className="check"src={check} alt="checkMark"/>Собственный морской флот</p>
                 <div className="btn-call-second"><CallButton /></div>
            </div>
        </div>
    );
}

export default NameLogo;
