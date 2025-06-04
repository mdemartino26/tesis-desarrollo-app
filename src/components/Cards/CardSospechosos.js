import React from "react";

function CardSospechosos({ sospechoso }) {
  return (
    <div className="card" onClick={() => alert(sospechoso.resumen)}>
      <img src={sospechoso.img} alt={sospechoso.nombre} />
      <p>{sospechoso.nombre}</p>
    </div>
  );
}

export default CardSospechosos;
