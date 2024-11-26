import './Advantages.css';
import logoOne from './kmp-logo-one.jpg';
import logoThree from './kmp-logo-three.jpg';
import logoTwo from './kmp-logo-two.jpg';
import logoFour from './kmp-logo-four.png';
import logoFive from './kmp-logo-five.png';
import logoSix from './kmp-logo-six.png';
import CallButton from '../CallButton/CallButton';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useEffect } from 'react';

gsap.registerPlugin(ScrollTrigger);

function Advantages() {

    useEffect(() => {
        // Анимация для первого контейнера
        const tlOne = gsap.timeline({
            scrollTrigger: {
                trigger: ".container-adv-one",
                start: "top 80%", // Начало анимации
                end: "bottom 20%", // Конец анимации
                toggleActions: "play none none reverse", // Действия при прокрутке
            }
        });

        tlOne.fromTo(".container-adv-one", 
            { y: 100, opacity: 0 }, // Начальное состояние
            { y: 0, opacity: 1, duration: 1 } // Конечное состояние
        );

        // Анимация для второго контейнера
        const tlTwo = gsap.timeline({
            scrollTrigger: {
                trigger: ".container-adv-two",
                start: "top 80%", // Начало анимации
                end: "bottom 20%", // Конец анимации
                toggleActions: "play none none reverse", // Действия при прокрутке
            }
        });

        tlTwo.fromTo(".container-adv-two", 
            { y: 100, opacity: 0 }, // Начальное состояние
            { y: 0, opacity: 1, duration: 1 } // Конечное состояние
        );

        return () => {
            tlOne.kill(); // Удаляем таймлайн при размонтировании компонента
            tlTwo.kill(); // Удаляем таймлайн для второго контейнера
        };
    }, []);

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
    <p className="advBtnCall"><CallButton /></p> 
</div>

</div>


        </div>
    )
}


export default Advantages;