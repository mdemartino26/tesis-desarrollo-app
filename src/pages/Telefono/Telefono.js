import React, { useState } from "react";
import "./styles.css";
import Nav2 from "../../components/Nav/Nav2";
import ButtonMenu from "../../components/ButtonMenu/ButtonMenu";

function Telefono() {
  const personajes = [
    { id: "smith", nombre: "Detective Smith", icono: "🕵️" },
    { id: "jesica", nombre: "Jesica IT", icono: "💻" },
  ];

  const [llamadaEnCurso, setLlamadaEnCurso] = useState(null);
  const [llamadaFinalizada, setLlamadaFinalizada] = useState(false);

  const simularLlamada = (personaje) => {
    setLlamadaEnCurso(personaje);
    setLlamadaFinalizada(false);

    setTimeout(() => {
      setLlamadaFinalizada(true);
      setTimeout(() => {
        setLlamadaEnCurso(null);
        setLlamadaFinalizada(false);
      }, 2000);
    }, 3000);
  };

  return (
    <div className="fondoGeneral">
      <Nav2 />
      <div className="sospechosos-page">
        <h2>Contactos</h2>
        <div className="call-log">
          {personajes.map((p) => (
            <button
              key={p.id}
              className="call-button"
              onClick={() => simularLlamada(p)}
              disabled={llamadaEnCurso}
            >
              {p.icono} {p.nombre}
            </button>
          ))}
        </div>

        {llamadaEnCurso && (
          <div className="llamada-status">
            {llamadaFinalizada
              ? `Llamada finalizada con ${llamadaEnCurso.nombre}`
              : `Llamando a ${llamadaEnCurso.nombre}...`}
          </div>
        )}
      </div>
      <ButtonMenu className="button-menu" />
    </div>
  );
}

export default Telefono;
