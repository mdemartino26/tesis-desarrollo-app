import React from 'react';
import './styles.css';
import { declarResumidas } from './declarResumidas';

const PopupDeclaracion = ({ visible, onClose }) => {
  if (!visible) return null;

  const { titulo, contenido } = declarResumidas[0];

  return (
    <div className="popup-overlay">
      <div className="popup-content">
        <button className="popup-close" onClick={onClose}>×</button>
        <h2 className="popup-title">{titulo}</h2>
        {contenido.map((parrafo, index) => (
          <p className="popup-text" key={index}>{parrafo}</p>
        ))}
      </div>
    </div>
  );
};

export default PopupDeclaracion;
