import ContactsTop from "../ContactsTop/ContactsTop";
import Footer from "../Footer/Footer";
import vessel from './Containers.jpg';
import './Company.css';
import DownloadDocs from "../DownloadDocs/DownloadDocs";
import ship from './cruiseShip.png';
import carton from './сarton.png';
import shipTwo from './shipTwo.png';
import Custombar from "../Navbar/Navbar";
import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import portOne from './portOne.png';
import portPort from './portPort.png';
import line from './line.png';
import lineBack from './lineBack.png';


function Company() { 
    const vesselRef = useRef(null); 
    const textRef = useRef(null); // Создаем реф для текста

    useEffect(() => { 
        // Анимация для изображения при монтировании компонента 
        gsap.fromTo(vesselRef.current,  
            { opacity: 0, },  
            { opacity: 1, duration: 3, delay: 0.5, x: -30 } 
        );

        // Анимация для текста
        gsap.fromTo(textRef.current, 
            { opacity: 0, x: -20 }, // Начальное состояние
            { opacity: 1, x: 0, duration: 1, delay: 0.5 } // Конечное состояние
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
<p className="textCompany" ref={textRef}><span className="numberOne"> В 2022</span>  году Судоходная компания начала свою деятельность с фрахта двух надежных параходов, 
которые способны осуществлять перевозку различных видов грузов из Калининграда в Санк-Петербург.
Каждый из судов оборудован необходимой техникой, что позволяет гарантировать безопасность и своевременность доставки.
    </p>
</div>

</div>
  
            







    
    <ul className="Service-position">
    <li className="Service">Услуги</li>
    </ul>
    <ul className="transport-position">
      <li className="transport">Мы занимаемся транспортировкой коммерческих грузов по направлению</li>
    
      </ul>


   

      
       <div className="port-position">
      <div className="port-container">
      <p className="Sanct">Санкт-Петербург</p>
      <img className="portOne" src={portOne} alt="port-KMP"/> 
      <img className="line" src={line} alt="line"/>       
        </div>
 
    <div className="port-container">
    <p className="Kaliningrad">Калининград</p>    
     <img className="portPort" src={portPort} alt="port-KMP"/>
     <img className="line" src={lineBack} alt="line"/>   
     </div>
    
       </div>
  

<div className="container-service">

<ul className="container-block">
    <img className="ship-cruise"src={ship} alt="logo-kmp"/>
<li className="General-top">
Перевозка генеральных грузов в трюмах: 
</li>
<li className="text-general">
Перевозка металлопроката, пиломатериалов, труб, оборудования, 
паллетного груза, сыпучих стройматериалов, плитки, ламината и других типов генеральных грузов.
</li>
</ul> 

<ul className="container-block">
<img className="ship-cruise"src={carton} alt="logo-kmp"/>
<li className="General-top">
Перевозка проектного, негабаритного груза: 
</li>
<li className="text-general">
Наша компания готова взять на себя сложные задачи по транспортировке нестандартных 
грузов, соблюдая все необходимые меры безопасности.  
</li>
</ul>

<ul className="container-block">
<img className="ship-cruise"src={shipTwo} alt="logo-kmp"/>
<li className="General-top">
Перевозка насыпных/навалочных грузов: 
</li>
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
        <Footer />
    </div>

    )
  
}

export default Company;