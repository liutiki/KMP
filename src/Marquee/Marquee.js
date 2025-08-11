import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import styles from './Marquee.module.scss'; 
import { useNavigate } from 'react-router-dom';

const Marquee = ({ text }) => {
    
  const navigate = useNavigate();
  const marqueeRef = useRef(null);

    useEffect(() => {
        const marqueeElement = marqueeRef.current;

      
        const textWidth = marqueeElement.scrollWidth;
        const containerWidth = marqueeElement.clientWidth;

     
        gsap.set(marqueeElement, { x: containerWidth });


        gsap.to(marqueeElement, {
            x: -textWidth,
            duration: (textWidth + containerWidth) / 100, // Скорость прокрутки
            ease: "none",
            repeat: -1, 
        });
    }, [text]);

 
    return (
        <div className={styles.marquee}>
            <div className={styles.marquee_content} ref={marqueeRef}>
                {text} &nbsp; 
                <button onClick={() => navigate('/Services')}>Подробнее</button>
            </div>
        </div>
    );
};

export default Marquee;

