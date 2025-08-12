import ContactsTop from "../ContactsTop/ContactsTop";
import Footer from "../Footer/Footer";
import vessel from '../Assets/Containers.jpg';
import DownloadDocs from "../DownloadDocs/DownloadDocs";
import ship from '../Assets/cruiseShip.png';
import carton from '../Assets/сarton.png';
import shipTwo from '../Assets/shipTwo.png';
import Custombar from "../Navbar/Navbar";
import  { useEffect, useRef } from 'react';
import ContactCall from "../ContactCall/ContactCall";
import './Company.css';
import { gsap } from 'gsap';


function Company() { 
    const vesselRef = useRef(null); 
    const textRef = useRef(null); 

    useEffect(() => { 
         gsap.fromTo(vesselRef.current,  
         { opacity: 0, },  
         { opacity: 1, duration: 3, delay: 0.5, x: -30 } 
        );
 
        gsap.fromTo(textRef.current, 
            { opacity: 0, x: -20 }, 
            { opacity: 1, x: 0, duration: 1, delay: 0.5 } 
           );
         }, []); 

        return(<div>
         <ContactsTop />
         <Custombar />  

<div className="vesselPosition-Top">
<div className="vesselPosition">
    <img 
     ref={vesselRef} 
     className="vessel"
     src={vessel}
     alt="vessel"/>
</div>  

<div className="textCompanyPosition" >
<p className="textCompany" ref={textRef}><span className="numberOne"> В 2022</span>  году Судоходная компания начала свою деятельность с фрахта двух надежных пароходов, 
которые способны осуществлять перевозку различных видов грузов из Калининграда в Санкт-Петербург.
Каждый из судов оборудован необходимой техникой, что позволяет гарантировать безопасность и своевременность доставки.
</p>
</div>
</div>

             
    <ul className="Service-position">
    <li className="Service">Услуги</li>
    </ul>
    <ul className="transport-position">
      <li className="transport">Мы занимаемся транспортировкой коммерческих грузов по направлению</li>
      <li className="transportTwo">Калининград-Санкт-Петербург-Калининград</li>
    </ul>
         

<div className="container-service">
<ul className="container-block">
<img className="ship-cruise"src={ship} alt="logo-kmp"/>
<li className="General-top">
Перевозка генеральных  <br/> грузов в трюмах: 
</li>
<li className="text-general">
Перевозка металлопроката, пиломатериалов, труб, оборудования, 
паллетного груза, сыпучих стройматериалов, плитки, 
ламината и других типов генеральных грузов.
</li>
</ul> 

<ul className="container-block">
<img className="ship-cruise"src={carton} alt="logo-kmp"/>
<li className="General-top"> Перевозка проектного, негабаритного груза:</li>
<li className="text-general">Наша компания готова взять на себя сложные задачи 
                             по транспортировке нестандартных 
                             грузов, соблюдая все необходимые меры безопасности.  
</li>
</ul>
<ul className="container-block">
<img className="ship-cruise"src={shipTwo} alt="logo-kmp"/>
<li className="General-top">Перевозка насыпных/навалочных грузов: </li>
<li className="text-general">
Мы предлагаем услуги по перевозке насыпных и навалочных грузов,
обеспечивая их надежную упаковку и транспортировку.  
</li>
</ul>
</div>

       <div className="docsPosition">
       <p className="docs"> Документы для скачивания</p>
       </div>
      
        <DownloadDocs/>
        <ContactCall/>
        <Footer />
    </div>
    ) 
}

export default Company;