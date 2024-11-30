import { useInView } from 'react-intersection-observer';
import './ContactCall.css';
import { gsap } from 'gsap';
import { useEffect, useRef} from 'react';



function ContactCall() {


    const { inView } = useInView({
        threshold: 0.1, // 10% элемента должно быть видно
    });

    const formRef = useRef(null);

    useEffect(() => {
        if (inView) {
            // Анимация появления картинки
            gsap.fromTo(formRef.current, 
                { opacity: 0 }, // Начальное состояние
                { opacity: 1, duration: 1, delay:0.5 } // Конечное состояние
            );
        }
    }, [inView]);


    return (

     
       
        <div className="way">
      
        <div className="modalQuestion-container">
            <div className="connectWithUs-position">
           <p className="connectWithUs">Связаться с нами</p>
           <p className="fillForm">Заполните форму и наш менеджер свяжется с вами для полного расчета стоимости и сроков.</p>      
            </div>
       
                     
                <form 
                 ref={formRef} 
                 className="form-container" 
                 action="https://formspree.io/f/xgegyzoo" 
                 method="POST">
                   <label htmlFor="email"></label>

<input className="inputName" placeholder="Ваше имя" id="name" type="name" name="name" />


<input className="inputTel" placeholder="Ваш телефон" id="phone" type="phone" name="phone" />


<textarea className="inputMes" placeholder="Сообщение" id="message" name="message" />



                                 
                   
                    <div className="btnCall-position">
                    <button className="btnCall" type="submit">Отправить</button>
                    <p className="press-Send">Нажимая кнопку "Отправить", вы даете согласие на обработку персональных данных</p>      
                    </div>
                      
                    
                                               
                </form>
      
        </div>
        </div>
        
        );
}

export default ContactCall;