import './Footer.css';
import telegram from '../ContactsTop/telegram.png';
import logo from '../ContactsTop/logo.png';
import './Footer.css';


const Footer =() => {
    return(
        <div className="footer">
            <div className="footerTwo">
            <ul className="relax-massage">
            <span><img className="Vensil" src={logo} alt="logo"/>Адрес:</span>
            <li className="footer-rest">Калининград, ул. Портовая 66</li>
                </ul>

                 <ul className="relax-massage">
                
               
                <li className="footer-rest">E-mail: info@kdsc.ru </li>
                <li className="footer-rest"></li>
                <li className="footer-rest">Tel: +79211069869</li>
            </ul>

            <ul className="relax-massage">
                <li className="footer-rest">Мы есть в telegram</li>
                <a href="https://web.telegram.org/k/#@kdsc39" target="_blank" rel="noopener noreferrer">
            <img className="telegram" src={telegram} alt ="icon" />
        </a>
               
            </ul>
                          </div> 
                          <div className="copyright">
                          <p>Copyright 2024 OOO "KMP"</p>
                          </div>
        </div>
    )
}


export default Footer;