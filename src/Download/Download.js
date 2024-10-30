import React from 'react';
import './Download.css';

const Download = () => {
    return (
        <div className="btn-position">
            <a href="/document.docx" download>
                <button className="btn-download">Скачать анкету</button>
            </a>
        </div>
    );
};

export default Download;
