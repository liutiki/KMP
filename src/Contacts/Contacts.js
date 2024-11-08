import ContactsTop from "../ContactsTop/ContactsTop";
import PhotoTop from './PhotoTop.jpg';
import './Contacts.css';
import Footer from "../Footer/Footer";
import Custombar from "../Navbar/Navbar";


function Contacts(){
    return(<div>
              <ContactsTop />
              <Custombar />  
         <img className="contactTop"src={PhotoTop} alt="contactsTop"/>

         <div className="adress-container"> 
          <div className="adress-position">
            <p className="contacts-last">КОНТАКТЫ</p>
           <p className="text-adress">г. Калининград, ул. Портовая 66</p>
           <p className="text-tel">Телефон: 8(4012)99 49 89</p>
           <p className="text-mail">E-mail: info@kdsc.ru</p>
            </div>   
         <div className="map-container">
                <iframe 
                    title="Карта Калининград"
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1370.919528048938!2d20.47515308420664!3d54.69901996448918!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x46e33d89a6d88d8b%3A0x17d918e9f8691362!2sUlitsa%20Portovaya%2C%2066%2C%20Kaliningrad%2C%20Kaliningradskaya%20oblast&#39;%2C%20236003!5e0!3m2!1sen!2sru!4v1730298833991!5m2!1sen!2sru"
                    width="600" 
                    height="450" 
                    style={{ border: 0 }} 
                    allowFullScreen="" 
                    loading="lazy">
                </iframe>
            </div>
         </div>
        <Footer />
    </div>

    )
  
}

export default Contacts;