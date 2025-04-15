import React from "react";
import './styles.css'

function Popup({ mensaje, onVolver }) {
    return (
      <div className="overlay">
        <div className="popup">
          <p>{mensaje}</p>
          <button onClick={onVolver}>Volver</button>
        </div>
      </div>
    );
  };
  
  
  
  export default Popup;