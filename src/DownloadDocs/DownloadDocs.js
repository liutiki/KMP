import React from 'react';
import './DownloadDocs.css';

const DownloadDocs = () => {
    return (
        <div>
        <div className="btn-position">
            <a href="/document.docx" download>
                <button className="btn-download-doc">Скачать договор</button>
            </a>
        </div>
        <div className="btn-position">
            <a href="/document.docx" download>
                <button className="btn-download-doc">Скачать реквизиты</button>
            </a>
        </div>

        </div>
    );
};

export default DownloadDocs;