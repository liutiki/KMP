import './Exp.css';
import photoOne from './photoOne.png'


function ExpTop(){
    return(<div className="exp">

        <div className="reliability">
        <img className="photoOneShip"src={photoOne} alt="photoOne"/>
        <p className="effect">Перевозка различных видов грузов <br/>без санкционных ограничений</p>
        <div className="vertical-line" />
        </div>

    
        <div className="reliability">
        <p className="number">86</p> 
        <p className="effect">клиентов, каждый из которых ценит наш подход и качество работы.</p>
        <div className="vertical-line" />
        </div>

        <div className="reliability">
        <p className="numberThree">3</p>
        <p className="effect">судна в управлении для успешной реализации наших логистических решений. </p>
            </div>
    </div>

    )
  
}

export default ExpTop;