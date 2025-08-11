import React from 'react';
import CookieConsent from 'react-cookie-consent';

const CookieBanner = () => {
    return (
        <CookieConsent
            location="bottom"
            buttonText="Я согласен"
            declineButtonText="Я не согласен"
            cookieName="myAwesomeCookieName"
            style={{ background: "#2B373B" }}
            buttonStyle={{ color: "#4e503b", fontSize: "13px" }}
            declineButtonStyle={{ color: "#fff", fontSize: "13px", marginLeft: "10px" }}
            expires={150}
        >
            Мы применяем файлы cookies, чтобы сделать использование сайта ещё лучше.
            {" "}
            <span style={{ fontSize: "10px" }}>Подробнее</span>
        </CookieConsent>
    );
};

export default CookieBanner;
