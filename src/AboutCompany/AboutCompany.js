import ExpTop from '../Experience/ExpTop';
import photo from './AboutPhoto.jpg';
import photoTwo from './AboutPhotoTwo.jpg';
import kmpIcon from './kmpIcon.png';
import styles from './AboutCompany.module.scss';
import { Link } from 'react-router-dom';

function AboutCompany(){
  const handleScrollToTop = () => {
    window.scrollTo(0, 0); 
};

    return(<div>

<div className={styles.AboutPosition}>
      <div className="photo-position">
      <img src={photo} className={styles.PortPhoto}alt="PortPhoto"/>
      <img src={photoTwo} className={styles.PortPhoto} alt="PortPhotoTwo"/>
      </div>
      
     
      <div className={styles.PositionTwo}>
        <div className={styles.topPosition}>
        <h1 className={styles.AboutTop}>О Компании</h1>
        </div>
       <div className={styles.Textposition}>
       <p className={styles.textAbout}>
        В 2022 году была основана новая компания — "Калининградское Морское Пароходство".
        Идея создания компании возникла в ответ на растущий спрос на надежные и эффективные морские грузоперевозки в регионе.
        Основатели компании поставили перед собой цель обеспечить высококачественные услуги 
        по транспортировке различных грузов и контейнеров.
        </p>
       </div>
      
        <ExpTop />
        <div className={styles.btnPositionAbout}>
        <Link to="/Company"onClick={handleScrollToTop} className={styles.btnAbout}>Подробнее о компании <img className={styles.kmpIcon} src={kmpIcon} alt="kmp-icon"/></Link>
        </div>
       
      </div>
      </div> 
      </div>

    )
  
}

export default AboutCompany;