import React from "react";
import "./styles.css";

function CardSospechosos({ sospechoso, onClick }) {
  return (
    <div className="sospechoso-card" onClick={onClick}>
      <div>
        <img src={sospechoso.img} alt={sospechoso.nombre} className="sospechoso-img" />
      </div>
      <div className="sospechoso-info">
        <h2>{sospechoso.nombre}</h2>
        <p>Edad: {sospechoso.edad}</p>
        <p>Relación con la víctima: {sospechoso.relacion}</p>
      </div>
    </div>
  );
}

export default CardSospechosos;
