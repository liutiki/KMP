import React, { useEffect, useRef } from 'react'; 
import { gsap } from 'gsap'; 
import './AdvantagesGsap.css'; 

function AdvantagesGsap() { 
    const textRef = useRef(null); 

    useEffect(() => { 
        const words = textRef.current.querySelectorAll('.word'); 

        const animateWords = () => { 
            words.forEach((word, index) => { 
                gsap.fromTo(word,  
                    { opacity: 0, y: -20 },  
                    {  
                        opacity: 1,  
                        y: 0,  
                        duration: 0.5,  
                        delay: index * 0.5, // Увеличиваем задержку для каждого слова
                        onComplete: () => { 
                            // Устанавливаем таймер на 3 секунды после последнего слова 
                            if (index === words.length - 1) { 
                                setTimeout(() => { 
                                    // Запускаем анимацию снова 
                                    animateWords(); 
                                }, 3000); 
                            } 
                        } 
                    } 
                ); 
            }); 
        }; 

        animateWords(); // Запускаем анимацию 

    }, []); 

    return ( 
        <div> 
            <div className="adv-top"> 
                <p ref={textRef}> 
                    <span className="word">Наши</span> <br /> {/* Первая строка */}
                    <span className="word">преимущества</span> {/* Вторая строка */}
                </p> 
            </div> 
        </div> 
    ); 
} 

export default AdvantagesGsap;





