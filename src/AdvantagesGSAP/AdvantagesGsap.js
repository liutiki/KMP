import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import './AdvantagesGsap.css';

function AdvantagesGsap() {
    const textRef = useRef(null);

    useEffect(() => {
        const words = textRef.current.querySelectorAll('.letter');

        //анимации слов
        const animateWords = () => {
            gsap.fromTo(words, 
                { opacity: 0 }, 
                { 
                    
                    opacity: 1, 
                    delay:0.5,
                    duration: 1.2,
                    ease: 'power2.out', // Более плавная функция easing
                    stagger: 0.2, // Задержка между анимациями слов
                    onComplete: () => {
                        // таймер на 3 секунды после появления
                        setTimeout(() => {
                            gsap.to(words, {
                               
                                opacity: 0,
                                duration: 1.2,
                                ease: 'power2.out', // Более плавная функция easing
                                onComplete: () => {
                                    // анимация заново
                                    animateWords();
                                }
                            });
                        }, 3000);
                    }
                }
            );
        };

        animateWords(); // анимация снова запускается

    }, []);

    return (
        <div>
            <div className="adv-top">
                <p ref={textRef}>
                    <span className="letter">Наши</span>
                    <span className="letter">Преимущества</span>
                </p>
            </div>
        </div>
    );
}

export default AdvantagesGsap;






