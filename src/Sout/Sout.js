import React, { useState } from 'react';
import { Document, Page } from '@react-pdf/renderer';
import soutPdf from './Sout.pdf';
import './Sout.css';

const Sout = () => {
  const [numPages, setNumPages] = useState(null);
  const [pageNumber, setPageNumber] = useState(1);
  const [isExpanded, setIsExpanded] = useState(false);

  function onDocumentLoadSuccess({ numPages }) {
    setNumPages(numPages);
  }

  const toggleExpand = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <div>
      <div onClick={toggleExpand} style={{ cursor: 'pointer', marginBottom: '10px' }}>
        {isExpanded ? 'Скрыть' : 'Показать'} PDF
      </div>
      {isExpanded && (
        <div style={{ width: '100%', height: '600px', overflow: 'auto' }}>
          <Document
            file={soutPdf}
            onLoadSuccess={onDocumentLoadSuccess}
          >
            {/* Отображаем все страницы */}
            {Array.from(new Array(numPages), (el, index) => (
              <Page key={`page_${index + 1}`} pageNumber={index + 1} />
            ))}
          </Document>
        </div>
      )}
      {isExpanded && (
        <p>
          Страница {pageNumber} из {numPages}
        </p>
      )}
    </div>
  );
};

export default Sout;



