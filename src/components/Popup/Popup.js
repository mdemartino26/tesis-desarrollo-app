import React from "react";
import "./styles.css"; 

const Popup = ({ declaracion, onClose }) => {
  if (!declaracion) return null;

  return (
    <div className="popup-overlay">
      <div className="popup-box">
        <button className="cerrar" onClick={onClose}>
          ×
        </button>
        <h3>{declaracion.nombre}</h3>
        <p>
          {declaracion.resumen.map((oracion, index) => (
            <span key={index}>
              {oracion}
              <br />
            </span>
          ))}
        </p>
      </div>
    </div>
  );
};

export default Popup;

