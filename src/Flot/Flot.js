    import './Flot.css';
    import { dataFlot } from './DataFlot';
    
    
    
    function Flot(){
        return(
          <div>
            <div className="vesselType-position">
               <p className="vesselType">ФЛОТ В УПРАВЛЕНИИ</p>
               <p className="moreThan">Более 10 000 тонн общий дедвейт флота</p>
            </div>
            
          <div className="cardPosition">
          {dataFlot.map((item=>{
          const{image, name, description, dwt, date}=item;
           return(
           <div className="card"> 
    <img src={image} className="image" alt="vessel"/>
    <div className="cardVessel-position">
    <p className="title">{name}</p>
    <p className="description">{description}</p>
    <p className="description">{dwt}</p>
    <p className="description">{date}</p>
    </div>
    </div>       
      )
      
    }))}
                     
             </div>
         </div>
    
        )
    }
    

export default Flot;