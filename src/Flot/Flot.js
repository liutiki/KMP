    import './Flot.css';
    import React from 'react';
    import { dataFlot } from './DataFlot';
    
    
    
    function Flot(){
        return(
          
          <div>
             <p classname="vesselType">Суда для перевозки груза</p>
          <div className="cardPosition">
    {dataFlot.map((item=>{
      const{image, name, description,}=item;
      return(
            <div className="card">
    <img src={image} className="image" alt="vessel"/>
    <p className="title">{name}</p>
    <p className="description">{description}</p>
    <button className="action">Подробнее<span aria-hidden="true"> → </span></button>
        </div>
        
      )
      
    }))}
              
             
             </div>
          
         </div>
    
        )
    }
    

export default Flot;