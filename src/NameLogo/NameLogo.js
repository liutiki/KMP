import React, { useEffect, useRef } from 'react';
import { useInView } from 'react-intersection-observer';
import { gsap } from 'gsap';
import photoShip from './photo-ship.jpg';
import './NameLogo.css';
import CallButton from '../CallButton/CallButton';

function NameLogo() {
    const { ref, inView } = useInView({
        threshold: 0.1, // 10% элемента должно быть видно
    });

    const imgRef = useRef(null);

    useEffect(() => {
        if (inView) {
            // Анимация появления картинки
            gsap.fromTo(imgRef.current, 
                { opacity: 0, scale: 0.5 }, // Начальное состояние
                { opacity: 1, scale: 1, duration: 1 } // Конечное состояние
            );
        }
    }, [inView]);

    return (
        <div className="phraze" ref={ref}>
            <img className="ship" src={photoShip} alt="ship" ref={imgRef} />

            <div className="phrazeSecond">
                <p className="safety">Безопасность и качество в каждой доставке</p>
                <p className="safety">Мы делаем сложное простым</p>
                <CallButton />
            </div>
        </div>
    );
}

export default NameLogo;
