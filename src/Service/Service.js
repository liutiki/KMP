import ContactCall from "../ContactCall/ContactCall";
import ContactsTop from "../ContactsTop/ContactsTop";
import Footer from "../Footer/Footer";
import Custombar from "../Navbar/Navbar";
import ship from '../Company/cruiseShip.png';
import carton from '../Company/сarton.png';
import shipTwo from '../Company/shipTwo.png';
import shipService from './shipServise.jpg';
import './Service.css';

function Service(){
    return(<div>

        <ContactsTop />
        <Custombar /> 

        <img src={shipService} className="shipService"alt="shipService"/>
   
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

<div>
<p></p>
<p></p>
<p></p>
<p></p>
<p></p>
<p></p>
<p></p>
<p></p>


</div>
       


        <ContactCall/>
        <Footer />
    </div>

    )
  
}


export default Service;