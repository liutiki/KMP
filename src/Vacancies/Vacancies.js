import { useEffect } from "react";
import ContactsTop from "../ContactsTop/ContactsTop";
import Footer from "../Footer/Footer";
import './Vacancies.css';
import { gsap } from 'gsap';
import Download from "../Download/Download";
import blueWave from "../Assets/blueWaveOne.png";
import Custombar from "../Navbar/Navbar";
import Sout from "../Sout/Sout";
import VesselCardFleet from "../Flot/VesselCardFleet";



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


<VesselCardFleet/>
<Sout/>
<Footer />

        </div>
    )

}

export default Vacancies;