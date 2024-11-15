import './ContactCall.css';




function ContactCall() {

    return (
        <div className="modalQuestion-container">
       
                  
                <h2 className="Ourstaf">Связаться с нами</h2>
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
                   
                   
                    <div className="btnCall-position">
                    <button className="btnCall" type="submit">Отправить</button>
                    <p className="send">Нажимая кнопку "Отправить", вы даете согласие на обработку персональных данных</p>      
                    </div>
                      
                    
                                               
                </form>
      
        </div>
    );
}

export default ContactCall;