import logo from './logo.png';
import telegram from './telegram.png';
import whatsapp from './whatsapp.png';
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
        <p><img src={whatsapp} alt="whatsapp" width="50px"/></p>
        <p><a href="https://web.telegram.org/k/#@kdsc39" target="_blank" rel="noopener noreferrer">
        <img className="telegram" src={telegram}width="50px" alt ="icon" /></a></p>
      </div>
    </div>

    )
  
}

export default ContactsTop;