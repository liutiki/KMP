import './Footer.css';
import telegram from '../ContactsTop/telegram.png';
import logo from '../ContactsTop/logo.png';
import './Footer.css';
import { useNavigate } from 'react-router-dom';


const Footer =() => {

    const navigate = useNavigate();

    const handleButtonClick = () => {
        navigate("/policy");
    };
    return(
        <div className="footer">
            <div className="footerTwo">
            <ul className="foter-container">
            <span><img className="Vensil" src={logo} alt="logo"/></span>
            <li className="footer-rest">236000,Калининградская обл.,</li>
            <li className="footer-rest">Калининград, ул. Портовая 66</li>
            <div className="time-work">
            <li className="footer-time-work">Режим работы:</li>
            <li className="footer-time-work">пн-пт:9:00-18:00</li>
            </div>
                </ul>

                 <ul className="foter-container">
                
                 <li className="footer-tel">+7(921)106-98-69</li>
                <li className="footer-rest">info@kdsc.ru </li>
                <li className="footer-rest"></li>
               
            </ul>

            <ul className="foter-container">
            <p><a href="https://t.me/kdsc39" target="_blank" rel="noopener noreferrer">
            <img className="telegram" src={telegram} alt ="icon" /></a></p>
                <button className="policy" onClick={handleButtonClick}>Политика обработки персональных данных</button>
            </ul>
                          </div> 
                          <div className="copyright">
                            <div className="line"></div>
                          <p>ООО "Калининградское Морское Пароходство" 2024</p>
                          </div>
        </div>
    )
}


export default Footer;