import React, { useState } from 'react';
import SoutOne from '../Assets/Sout_one.jpg';
import SoutTwo from '../Assets/Sout_two.jpg';
import './Sout.css';

const Sout = () => {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleExpand = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <div className="container-sout">
        
        <p className="Sout-style">Специальная оценка условий труда ООО "Калининградское Морское Пароходство"</p>
      <div onClick={toggleExpand} className="moreInfo"style={{ cursor: 'pointer', marginBottom: '10px' }}>
        {isExpanded ? 'Скрыть' : 'Подробнее'} 
      </div>
      {isExpanded && (
        <div style={{ width: '100%', height: 'auto', overflow: 'auto' }}>
          <img src={SoutOne} alt="Описание изображения" style={{ width: '100%', height: 'auto' }} />
          <img src={SoutTwo} alt="Описание изображения" style={{ width: '100%', height: 'auto' }} />
        </div>
      )}
    </div>
  );
};

export default Sout;




