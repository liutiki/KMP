import { useEffect } from "react";
import ContactsTop from "../ContactsTop/ContactsTop";
import Footer from "../Footer/Footer";
import map from './Svet.jpg';
import './Vacancies.css';
import { gsap } from 'gsap';
import Download from "../Download/Download";


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
<div className="Top-position">
<p className="Vacancy-Top" >Вакансии</p>
</div>


<Download />

<div className="vacancies-position">
    <div className="vac">
    <img className="picture" src={map} alt="vessel"/>
    <p>Судовой повар</p>
    <p>Тип судна: Генеральные грузы</p>
    <p>Дата посадки: 30/10/2024</p>
    <p>Зарплата : 130 000 рублей</p>
</div>

<div className="vac">
    <img src={map} className="picture" alt="vessel"/>
    <p>2 механик</p>
    <p>Тип судна: Генеральные грузы</p>
    <p>Дата посадки: 30/10/2024</p>
    <p>Зарплата : 240 000 рублей</p>
</div>

<div className="vac">
    <img src={map} className="picture" alt="vessel"/>
    <p>Матросы 1,2 класса</p>
    <p>Тип судна: Генеральные грузы</p>
    <p>Дата посадки: 30/10/2024</p>
    <p>Зарплата : 110 000 рублей</p>
</div>

</div>


<Footer />
        </div>
    )

}

export default Vacancies;