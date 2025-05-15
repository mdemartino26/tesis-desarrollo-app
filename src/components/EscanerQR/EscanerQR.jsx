import React, { useEffect } from 'react';
import { Html5QrcodeScanner } from 'html5-qrcode';
import './styles.css';

const EscanerQR = ({ onClose }) => {
  const handleEscaneoExitoso = (decodedText) => {
    const documentosQR = [
      {
        id: "doc1",
        nombre: "Declaracion Sofia Rivero",
        url: "./documentos/sofiaRivero.pdf",
        codigoQR: "qr123informe2025",
      },
      {
        id: "doc2",
        nombre: "Testimonio",
        url: "/documentos/testimonio.pdf",
        codigoQR: "qr456testimonio2025",
      },
    ];

    const documentoEncontrado = documentosQR.find(doc => doc.codigoQR === decodedText);

    if (documentoEncontrado) {
      onClose(documentoEncontrado);
    } else {
      alert("QR no reconocido.");
      onClose(); 
    }
  };

  useEffect(() => {
    const scanner = new Html5QrcodeScanner(
      'lector-qr',
      { fps: 10, qrbox: { width: 250, height: 250 } },
      false
    );

    scanner.render(
      (decodedText) => {
        handleEscaneoExitoso(decodedText);
      },
      (error) => {
        console.warn('Error escaneando:', error);
      }
    );

    return () => {
      scanner.clear().catch(err => console.error('Error limpiando QR:', err));
    };
  }, []);

  return (
    <div className='fondoEscaner'>
      <div id="lector-qr" style={{ width: '300px' }} />
      <button onClick={() => onClose()} className='escaner'>
        Cerrar
      </button>
    </div>
  );
};

export default EscanerQR;

