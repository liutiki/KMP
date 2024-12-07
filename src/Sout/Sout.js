import React, { useState } from 'react';
import SoutOne from './Sout_one.jpg';
import SoutTwo from './Sout_two.jpg';
import './Sout.css';

const Sout = () => {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleExpand = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <div>
      <div onClick={toggleExpand} style={{ cursor: 'pointer', marginBottom: '10px' }}>
        {isExpanded ? 'Скрыть' : 'Показать'} изображение
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




