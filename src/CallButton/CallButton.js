import React, { useState } from 'react';
import Modal from 'react-modal';
import './CallButton.css';

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
            <button className="buttontlf" onClick={openModal}>Расчитать перевозку</button>

            <Modal
                isOpen={modalIsOpen}
                onRequestClose={closeModal}
                contentLabel="Contact Form"
            >
                <h2>Наш сотрудник свяжется с Вами в ближайшее время.</h2>
                <form action="https://formspree.io/f/xgegyzoo" 
                method="POST">
                    <label>
                        Имя:
                        <input type="text" name="name" required />
                    </label>
                    <label>
                        Email:
                        <input type="email" name="email" required />
                    </label>
                    <label>
                        Телефон:
                        <input type="text" name="name" required />
                    </label>
                    <label>
                        Ваш вопрос:
                        <textarea name="message" required></textarea>
                    </label>
                    <button type="submit">Отправить</button>
                    <button type="button" onClick={closeModal}>Закрыть</button>
                </form>
            </Modal>
        </div>
    );
}

export default CallButton;
