import ContactsTop from "../ContactsTop/ContactsTop";
import Footer from "../Footer/Footer";
import vessel from './Containers.jpg';
import './Company.css';
import DownloadDocs from "../DownloadDocs/DownloadDocs";

function Company(){
    return(<div>
         <ContactsTop />

<div className="vesselPosition-Top">
<div className="vesselPosition">
   <img className="vessel" src={vessel} alt="vessel"/>
</div>  

<div className="textCompanyPosition">
<p className="textCompany"><span className="numberOne"> В 2022</span>  году Компания начала свою деятельность с фрахта двух надежных параходов, 
которые способны осуществлять перевозку различных видов грузов из Калининграда в Санк-Петербург.
Каждый из судов оборудован , что позволяет гарантировать безопасность и своевременность доставки.
    </p>
</div>

</div>
  
            






<div className="servicePosition">
    <p className="Service">Услуги</p>
</div>


<div className="container-service">

<ul className="container-block">
<li className="General-top">
Перевозка генеральных грузов в трюмах: 
</li>
<li className="text-general">
Мы занимаемся перевозкой металлопроката, пиломатериалов, труб, оборудования, 
паллетного груза, сыпучих стройматериалов, плитки, ламината и других типов генеральных грузов.
</li>
</ul> 

<ul className="container-block">
<li className="General-top">
Перевозка проектного, негабаритного и опасного груза: 
</li>
<li className="text-general">
Наша компания готова взять на себя сложные задачи по транспортировке нестандартных 
и опасных грузов, соблюдая все необходимые меры безопасности.  
</li>
</ul>

<ul className="container-block">
<li className="General-top">
Перевозка насыпных/навалочных грузов: 
</li>
<li className="text-general">
Мы предлагаем услуги по перевозке насыпных и навалочных грузов,
обеспечивая их надежную упаковку и транспортировку.  
</li>
</ul>

</div>



<br/>
▎Дополнительные услуги
<br/>
Кроме того, "Калининградское Морское Пароходство" организует вывоз грузов и помогает с доставкой до склада.


<br/>
 Мы всегда на связи и оперативно информируем клиентов о местонахождении груза и сроках его доставки.
 <br/> Наша команда профессионалов гарантирует высокий уровень обслуживания и индивидуальный подход к каждому клиенту.

С момента своего основания "Калининградское Морское Пароходство" зарекомендовало себя как надежный партнер в сфере морских грузоперевозок,
<br/> и мы стремимся к дальнейшему развитию и улучшению наших услуг.
        


       <div className="docsPosition">
         <p className="docs">Документы для скачивания</p>
       </div>
      
<DownloadDocs/>
        <Footer />
    </div>

    )
  
}

export default Company;