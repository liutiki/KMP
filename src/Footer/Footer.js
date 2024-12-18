import './Footer.css';
import telegram from '../ContactsTop/telegram.png';
import logo from '../ContactsTop/logo.png';
import './Footer.css';
import { useNavigate } from 'react-router-dom';
import iconstelephone from './iconstelephone.png';
import footermail from './footermail.png';


const Footer =() => {

    const navigate = useNavigate();

    const handleButtonClick = () => {
        navigate("/policy");
    };
    return(
            <div className="footer">

                <div className="vensil-position">
                <img className="Vensil" src={logo} alt="logo"/>
                </div>
            
            <div className="footerTwo">

            <div className="foter-container">
            <p className="footer-kmp">"Калининградское Морское Пароходство"</p>
            <p className="footer-rest">Морские грузоперевозки</p>
            </div>
            <div className="time-work">
            <p className="footer-rest">236039, Калининградская обл.,</p>
            <p className="footer-rest">Калининград, ул. Портовая 66</p>
            </div>
            

                 <ul className="foter-container">
                 <li className="footer-tel">
                <a className="no-underline" href="tel:+74012994989"><img src={iconstelephone} className="icon-footer" alt="icons-kmp"/>+7(4012)99 49 89</a>
                </li>

                <li className="footer-rest">
                <a className="no-underline"href="mailto:info@kdsc.ru"><img src={footermail} className="icon-footer" alt="icons-kmp"/>info@kdsc.ru</a>
                </li>
                <li>
                <a href="https://t.me/kdsc39" target="_blank" rel="noopener noreferrer">
                <img className="telegram" src={telegram} alt ="icon" /></a>
                </li>
             

                <div className="time-work">
                <li className="footer-time-work">Режим работы:</li>
                <li className="footer-time-work">пн-пт:9:00-18:00</li>
                </div> 
                </ul>
       

          </div>
         
            <div className="footer-policy">
            <button className="policy" onClick={handleButtonClick}>Политика обработки персональных данных</button>
            </div>

                          <div className="copyright">
                            <div className="line"></div>
                            <p>ООО "Калининградское Морское Пароходство", 2024</p>
                            </div>
                         </div>
    )
}


export default Footer;