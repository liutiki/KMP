import React from 'react';
import './DownloadDocs.css';
import docsPhoto from './documentFolder.png';

const DownloadDocs = () => {
    return (
        <div className="DownloadPosition">

        <div className="container-docs">
            <div className="docsPhoto-position">
            <img className="docsPhoto" src={docsPhoto} alt="docsPhoto"/>
            </div>
            <div className="btnDoc-position">
            <a href="/document.docx" download>
                <button className="btn-download-doc">Скачать договор</button>
            </a>
            </div>
        </div>



        <div className="container-docs">
            <div className="docsPhoto-position">
            <img className="docsPhoto" src={docsPhoto} alt="docsPhoto"/>
            </div>
            <div className="btnDoc-position">
            <a href="/document.docx" download>
                <button className="btn-download-doc">Скачать реквизиты</button>
            </a>
            </div>
        </div>

        </div>
    );
};

export default DownloadDocs;