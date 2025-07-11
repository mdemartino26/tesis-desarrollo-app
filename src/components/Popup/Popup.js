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
        <div>
          {declaracion.resumen.map((oracion, index) => (
            <p
              key={index}
              dangerouslySetInnerHTML={{ __html: oracion }}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Popup;
