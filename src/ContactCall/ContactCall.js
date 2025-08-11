import { useInView } from 'react-intersection-observer';
import './ContactCall.css';
import { gsap } from 'gsap';
import { useEffect, useRef} from 'react';
import { Link } from 'react-router-dom';



function ContactCall() {


    const { inView } = useInView({
        threshold: 0.1, 
    });
    const formRef = useRef(null);

    useEffect(() => {
        if (inView) {
            
            gsap.fromTo(formRef.current, 
                { opacity: 0 }, 
                { opacity: 1, duration: 1, delay:0.5 } 
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
       
                     
           <form action="https://formcarry.com/s/aWX-ODncuxl" method="POST" enctype="multipart/form-data">
 <label>                     
<input className="inputName" placeholder="Ваше имя" id="name" type="text" name="name" required/>
<input className="inputName" placeholder="Компания" id="company" type="text" name="company" required />
<input className="inputTel" placeholder="Ваш телефон" id="phone" type="phone" name="phone" required />
<textarea className="inputMes" placeholder="Сообщение" id="message" name="message" />
 </label>                
                   <div className="btnCall-position">
                    <button className="btnCall" type="submit">Отправить</button>
                    <p className="press-Send">Нажимая кнопку "Отправить", вы даете согласие на обработку персональных данных</p>      
                    <Link to="/policy" className="policy-link">Политика обработки персональных данных</Link>    
                    </div>                             
                </form>
      
        </div>
        </div>
        );
}

export default ContactCall;