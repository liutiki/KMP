import logo from './logo.png';
import telegram from './telegram.png';
import mail from './mail.png';
import './ContactsTop.css';
import { Link } from 'react-router-dom';



function ContactsTop(){
    return(<div className="topInfo">
        <div>
        <Link to="/" className="KMP">
                <img className="logo" src={logo} alt="logo" />
                Калининградское Морское Пароходство
            </Link>
        </div>
      <div className="tlf">
      <p className="tel">+7 4012 99 49 89</p>

    <p className="info">
    <img className="mail" src={mail} alt="logo-kmp" />
    <a className="ahref-mail"href="mailto:info@kdsc.ru">info@kdsc.ru</a></p>

    <p><a href="https://web.telegram.org/k/#-2322689377" target="_blank" rel="noopener noreferrer">
    <img className="telegram" src={telegram} alt ="icon" /></a></p>
    </div>
    </div>

    )
  
}

export default ContactsTop;