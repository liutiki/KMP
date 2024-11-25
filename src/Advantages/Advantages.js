import './Advantages.css';
import logoOne from './kmp-logo-one.jpg';
import logoThree from './kmp-logo-three.jpg';
import logoTwo from './kmp-logo-two.jpg';
import logoFour from './kmp-logo-four.png';
import logoFive from './kmp-logo-five.png';
import logoSix from './kmp-logo-six.png';
import CallButton from '../CallButton/CallButton';

function Advantages() {
    return(
        <div>
<div className="effectOne-position">
<p className="effectOne">Эффективно справляемся с задачами клиентов</p>
</div>

<div className="container-adv-one">

<div className="adv">
    <img className="logoOne"src={logoOne} alt="kmp-logo"/>
    <p className="adv-text">Собственный флот:</p>
    <p className="adv-textTwo">Наличие собственных судов позволяет контролировать графики,
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
    <img className="logoOne"src={logoFour} alt="kmp-logo"/>
    <p className="adv-text">Индивидуальные решения </p>
    <p className="adv-textTwo">Консультируем по всем возникающим вопросам,
                               учитываем личные потребности клиентов</p>
</div>

<div className="adv">
    <img className="logoOne"src={logoFive} alt="kmp-logo"/>
    <p className="adv-text">Квалифицированный персонал</p>
    <p className="adv-textTwo">Эффективное управление грузоперевозками, 
                               соблюдение всех стандартов и правил безопасности </p>
</div>
<div className="adv">
    <img className="logoOne"src={logoSix} alt="kmp-logo"/>
    <p className="adv-text"> </p>
    <p className="adv-textTwo"></p>
    <CallButton />
</div>

</div>


        </div>
    )
}


export default Advantages;