import React, { useEffect } from 'react';
import { Html5QrcodeScanner } from 'html5-qrcode';
import './styles.css';

const EscanerQR = ({ onClose }) => {
  useEffect(() => {
    const scanner = new Html5QrcodeScanner(
      'lector-qr',
      { fps: 10, qrbox: { width: 250, height: 250 } },
      false
    );

    scanner.render(
      (decodedText) => {
        alert(`Código leído: ${decodedText}`);
        onClose();
      },
      (error) => {
        console.warn('Error escaneando:', error);
      }
    );

    return () => {
      scanner.clear().catch(err => console.error('Error limpiando QR:', err));
    };
  }, [onClose]);

  return (
    <div style={{
      backgroundColor: '#000000cc',
      position: 'fixed',
      top: 0,
      left: 0,
      zIndex: 999,
      width: '100vw',
      height: '100vh',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      flexDirection: 'column',
    }}>
      <div id="lector-qr" style={{ width: '300px' }} />
      <button
        onClick={onClose}
       className='escaner'
      >
        Cerrar
      </button>
    </div>
  );
};

export default EscanerQR;
