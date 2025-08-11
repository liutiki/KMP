import React, { useState } from 'react';
import Modal from 'react-modal';
import './CallButton.css';
import close from './close-icon.png';
import { Link } from 'react-router-dom';

Modal.setAppElement('#root'); 

function CallButton() {
    const [modalIsOpen, setModalIsOpen] = useState(false);

    const openModal = () => {
        setModalIsOpen(true);
        document.body.style.overflow = 'hidden';
    };

    const closeModal = () => {
        setModalIsOpen(false);
        document.body.style.overflow = 'unset'; 
    };

    return (
        <div>
            
            <button className="buttontlf" onClick={openModal}>Сделать заявку</button>      
                  
            <Modal
                isOpen={modalIsOpen}
                onRequestClose={closeModal}
                contentLabel="Contact Form"
            >
              <div className="closeBtn-list-position">
                    <button className="checkClose"onClick={closeModal}><img className="closeBtn-list"src={close} alt="close"/></button>
              </div>
                 
               
                  
                <h2 className="Ourstaf">Наш сотрудник свяжется с Вами в ближайшее время.</h2>
               <form action="https://formcarry.com/s/aWX-ODncuxl" method="POST" enctype="multipart/form-data">
                
                     
                    <label>
                       
<input className="inputName" placeholder="Ваше имя" id="name" type="text" name="name" required/>

<input className="inputName" placeholder="Компания" id="company" type="text" name="company" required />

<input className="inputTel" placeholder="Ваш телефон" id="phone" type="phone" name="phone" required />


<textarea className="inputMes" placeholder="Сообщение" id="message" name="message" />
                    </label>
                   

                                     
                   
                    <div className="btnCall-position">
                   
                    <button className="btnCall" type="submit">Отправить</button>
                   <p className="send">Нажимая кнопку "Отправить", вы даете согласие на обработку персональных данных</p> 
                     <Link to="/policy" className="policy-link">Политика обработки персональных данных</Link>     
                    </div>
                      
                    
                                               
                </form>
            </Modal>
        </div>
    );
}

export default CallButton;
