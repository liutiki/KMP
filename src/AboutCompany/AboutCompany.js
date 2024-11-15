import ExpTop from '../Experience/ExpTop';
import photo from './AboutPhoto.jpg';
import photoTwo from './AboutPhotoTwo.jpg';
import kmpIcon from './kmpIcon.png';
import './AboutCompany.css';
import { Link } from 'react-router-dom';

function AboutCompany(){
  const handleScrollToTop = () => {
    window.scrollTo(0, 0); // Прокрутка к началу страницы
};

    return(<div>

<div className="AboutPosition">
      <div className="photo-position">
      <img src={photo} className="PortPhoto"alt="PortPhoto"/>
      <img src={photoTwo} className="PortPhoto"alt="PortPhotoTwo"/>
      </div>
      
     
      <div className="PositionTwo">
        <div className="topPosition">
        <h1 className="AboutTop">О Компании</h1>
        </div>
       <div className="Text-position">
       <p className="textAbout">
        В 2023 году была основана новая компания — "Калининградское Морское Пароходство".
        Идея создания компании возникла в ответ на растущий спрос на надежные и эффективные морские грузоперевозки в регионе.
        Основатели компании поставили перед собой цель обеспечить высококачественные услуги 
        по транспортировке различных насыпных грузов и контейнеров.
        </p>
       </div>
      
        <ExpTop />
        <div className="btn-position-about">
        <Link to="/Company"onClick={handleScrollToTop} className="btnAbout">Подробнее о компании <img className="kmp-icon" src={kmpIcon} alt="kmp-icon"/></Link>
        </div>
       
      </div>
</div>
     



    </div>

    )
  
}

export default AboutCompany;