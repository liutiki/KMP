import './Exp.css';
import photoOne from './photoOne.png'


function ExpTop(){
    return(<div className="exp">

        <div className="reliability">
        <img className="photoOneShip"src={photoOne} alt="photoOne"/>
        <p className="effect">Hадежность и эффективность <br/>в морских перевозках.</p>
        <div className="vertical-line" />
        </div>

    
        <div className="reliability">
        <p className="number">56</p> 
        <p className="effect">клиентов, каждый из которых ценит наш подход и качество работы</p>
        <div className="vertical-line" />
        </div>

        <div className="reliability">
        <p className="number">3</p>
        <p className="effect">судна во фрахте для успешной реализации наших логистических решений. </p>
            </div>
    </div>

    )
  
}

export default ExpTop;