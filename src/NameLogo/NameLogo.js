import photoShip from './photo-ship.jpg';
import './NameLogo.css';
import CallButton from '../CallButton/CallButton';


function NameLogo (){
    return(<div className="phraze">
<img className="ship" src={photoShip} alt="ship" />

<div className="phrazeSecond">
<p className="safety">Безопасность и качество в каждой доставке</p>
<p className="safety">Мы делаем сложное простым</p>
<CallButton/>
</div>

    </div>)
}


export default NameLogo;