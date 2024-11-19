    import './Flot.css';
    import React from 'react';
    import { dataFlot } from './DataFlot';
    
    
    
    function Flot(){
        return(
          
          <div>
            <div className="vesselType-position">
               <p className="vesselType">Флот</p>
               <p className="vesselType">Калининградского Морского Пароходства</p>
               <p className="moreThan">Более 10 000 тонн общий дедвейт флота</p>
            </div>
            
          <div className="cardPosition">
    {dataFlot.map((item=>{
      const{image, name, description,}=item;
      return(
            <div className="card">
              <div>
    <img src={image} className="image" alt="vessel"/>
    <p className="title">{name}</p>
    <p className="description">{description}</p>
  
        </div>
        </div>
        
      )
      
    }))}
              
             
             </div>
          
         </div>
    
        )
    }
    

export default Flot;