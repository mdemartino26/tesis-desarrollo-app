import React from "react";
import "./styles.css";

function CardEvidencia({ evidencia, onClick }) {
  return (
    <div className="evidencia-card" onClick={onClick}>
      <div>
        <img src={evidencia.img} alt={evidencia.nombre} className="evidencia-img" />
      </div>
      <div className="evidencia-info">
        <h3>{evidencia.nombre}</h3>
        <p>Edad: {evidencia.edad}</p>
        <p>Relación: {evidencia.relacion}</p>
      </div>
    </div>
  );
}

export default CardEvidencia;