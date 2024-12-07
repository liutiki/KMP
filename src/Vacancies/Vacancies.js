import { useEffect } from "react";
import ContactsTop from "../ContactsTop/ContactsTop";
import Footer from "../Footer/Footer";
import map from './Yant.jpg';
import './Vacancies.css';
import { gsap } from 'gsap';
import Download from "../Download/Download";
import blueWave from "./blueWaveOne.png";
import Custombar from "../Navbar/Navbar";
import Sout from "../Sout/Sout";



function Vacancies (){

    useEffect(() => {
                gsap.fromTo(".vac", 
            { opacity: 0, y: 20 },
            { opacity: 1, y: 0, duration: 1, stagger: 0.2 } 
        );
    }, []);



    return(
        <div>
<ContactsTop />
<Custombar />

<div className="Top-position">
<p className="Vacancy-Top" >Вакансии на флот</p>
<img src={blueWave}  width="250px" alt="bluewave"/>
<p className="question">По вопросам трудоустройства пишите на:</p>
<p className="question"> hr@kdsc.ru</p>
<p className="question">Телефон службы персонала 8(921) 106 98 69</p>
<Download />
</div>




<div className="vacancies-position">
    <div className="vac">
    <div className="picture-position-vacancy">
    <img className="picture" src={map} alt="vessel"/>
    </div>
    <p className="type">Судовой повар</p>
    <p className="type">Тип судна: Генеральные грузы</p>
    <p className="type">Дата посадки: 24/12/2024</p>
    <p className="typeZP">Зарплата : 130 000 рублей</p>
</div>

<div className="vac">
    <div className="picture-position-vacancy">
    <img src={map} className="picture" alt="vessel"/>     
    </div>
    <p className="type">2 механик</p>
    <p className="type">Тип судна: Генеральные грузы</p>
    <p className="type">Дата посадки: 23/12/2024</p>
    <p className="typeZP">Зарплата : 240 000 рублей</p>
</div>

<div className="vac">
<div className="picture-position-vacancy">
    <img src={map} className="picture" alt="vessel"/>     
    </div>
    <p className="type">Матросы 1,2 класса</p>
    <p className="type">Тип судна: Генеральные грузы</p>
    <p className="type">Дата посадки: 30/12/2024</p>
    <p className="typeZP">Зарплата : 110 000 рублей</p>     
  </div>

</div>


<Sout/>

<Footer />
        </div>
    )

}

export default Vacancies;