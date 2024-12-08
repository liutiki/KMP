import React, { useState } from 'react';
import Modal from 'react-modal';
import './CallButton.css';
import close from './close-icon.png';

Modal.setAppElement('#root'); // Установите элемент приложения для доступности

function CallButton() {
    const [modalIsOpen, setModalIsOpen] = useState(false);

    const openModal = () => {
        setModalIsOpen(true);
    };

    const closeModal = () => {
        setModalIsOpen(false);
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
                <form action="https://formspree.io/f/xgegyzoo" 
                method="POST">
                     
                    <label>
                       
<input className="inputName" placeholder="Ваше имя" id="name" type="name" name="name" />

<input className="inputName" placeholder="Компания" id="name" type="name" name="name" />

<input className="inputTel" placeholder="Ваш телефон" id="phone" type="phone" name="phone" />


<textarea className="inputMes" placeholder="Сообщение" id="message" name="message" />
                    </label>
                   

                                     
                   
                    <div className="btnCall-position">
                    <button className="btnCall" type="submit">Отправить</button>
                    <p className="send">Нажимая кнопку "Отправить", вы даете согласие на обработку персональных данных</p>      
                    </div>
                      
                    
                                               
                </form>
            </Modal>
        </div>
    );
}

export default CallButton;
