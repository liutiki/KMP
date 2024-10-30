import './Advantages.css';
import logoOne from './kmp-logo-one.jpg';
import logoThree from './kmp-logo-three.jpg';
import logoTwo from './kmp-logo-two.jpg';

function Advantages() {
    return(
        <div>
<div>
<p className="effectOne">Эффективно справляемся с задачами клиентов</p>
</div>

<div className="container-adv-one">

<div className="adv">
    <img className="logoOne"src={logoOne} alt="kmp-logo"/>
    <p className="adv-text">Собственный флот:</p>
    <p className="adv-textTwo">Наличие собственного судна позволяет контролировать графики,
       качество обслуживания и безопасность перевозок.</p>
</div>
<div className="adv">
<img className="logoOne"src={logoTwo} alt="kmp-logo"/>
    <p className="adv-text">Дополнительные услуги: </p>
    <p className="adv-textTwo">   Предложение дополнительных услуг, таких как упаковка, 
       страхование и логистика, для удобства клиентов</p>
</div>

<div className="adv">
<img className="logoOne"src={logoThree} alt="kmp-logo"/>
<p className="adv-text">Прямые морские связи: </p>
<p className="adv-textTwo">Обеспечение надежной и 
    быстрой доставки грузов между двумя важными портами</p>
</div>
</div>


<div className="container-adv-two">
<div className="adv">
    <img src="" alt="kmp-logo"/>
    <p>индивидуально разработанные решения, учитывающие личные потребности клиентов</p>
</div>

<div className="adv">
    <img src="" alt="kmp-logo"/>
    <p>Особая экономическая зона</p>
</div>
<div className="adv">
    <img src="" alt="kmp-logo"/>
    <p>Оставить заявку</p>
</div>

</div>


        </div>
    )
}


export default Advantages;