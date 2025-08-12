import logo from '../Assets/logo.png';
import telegram from '../Assets/telegram.png';
import phone from '../Assets/phone.png';
import mail from '../Assets/mail.png';
import './ContactsTop.css';
import { Link } from 'react-router-dom';



function ContactsTop(){
    return(<div className="topInfo">
        <div>
        <Link to="/" className="KMP">
                <div className="logo-position">
                  <img className="logo" src={logo} alt="logo" />
                <div className="name-position">
                <p className="kaliningrad">Калининградское</p>
                <p className="sea">Морское Пароходство</p>
                </div>
                </div>
         </Link>
         </div>

    <div className="tlf">
    <p className="tel" href="tel:+74012994989"><img src={phone} alt="logo-kmp" width="30px"/>+7 4012 99 49 89</p>

    <p className="info">
    <img className="mail" src={mail} alt="logo-kmp" />
    <a className="ahref-mail"href="mailto:info@kdsc.ru">info@kdsc.ru</a></p>

    <p><a href="https://t.me/kdsc39" target="_blank" rel="noopener noreferrer">
    <img className="telegram" src={telegram} alt ="icon" /></a></p>
    </div>
    </div>

    )
  
}

export default ContactsTop;