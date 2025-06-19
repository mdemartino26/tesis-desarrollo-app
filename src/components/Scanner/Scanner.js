import React, { useState, useEffect } from "react";
import Nav2 from "../Nav/Nav2";
import ButtonMenu from "../ButtonMenu/ButtonMenu";
import declaraciones from "../../components/Declaraciones/Declaraciones.js";
import "./styles.css";

function Scanner() {
  const [codigoIngresado, setCodigoIngresado] = useState("");
  const [mensaje, setMensaje] = useState("");
  const [tipoMensaje, setTipoMensaje] = useState("");

  useEffect(() => {
    const desbloqueadosPorDefecto = declaraciones
      .filter(decl => ["DOC001", "DOC002", "DOC003"].includes(decl.codigo))
      .map(({ id, tipo }) => ({ id, tipo }));

    const guardados = JSON.parse(localStorage.getItem("scannerData"));

    if (!guardados || guardados.length === 0) {
      localStorage.setItem("scannerData", JSON.stringify(desbloqueadosPorDefecto));
    }
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();

    const doc = declaraciones.find(
      (decl) => decl.codigo.toLowerCase() === codigoIngresado.trim().toLowerCase()
    );

    if (!doc) {
      setMensaje("Ese código no es válido");
      setTipoMensaje("error");
      setTimeout(() => setMensaje(""), 3000);
      return;
    }

    const guardados = JSON.parse(localStorage.getItem("scannerData")) || [];

    if (!guardados.some((item) => item.id === doc.id)) {
      guardados.push({ id: doc.id, tipo: doc.tipo });
      localStorage.setItem("scannerData", JSON.stringify(guardados));
      setMensaje("Documento Escaneado");
      setTipoMensaje("success");
    } else {
      setMensaje("Este documento ya fue escaneado.");
      setTipoMensaje("error");
    }

    setCodigoIngresado("");
    setTimeout(() => {
      setMensaje("");
      setTipoMensaje("");
    }, 3000);
  };

  return (
    <div className="scanner-page fondoGeneral">
      <Nav2 />
      <h2>Simulador de Scanner</h2>

      <div className="scanner-frame">
        <p>Simulación de cámara</p>
      </div>

      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Ingresá el código del documento"
          value={codigoIngresado}
          onChange={(e) => setCodigoIngresado(e.target.value)}
        />
        <button type="submit">Escanear</button>
      </form>

      {mensaje && (
        <div className={`popup ${tipoMensaje}`}>
          {tipoMensaje === "success" && (
            <div className="circle">
              <span className="checkmark">✓</span>
            </div>
          )}
          <p>{mensaje}</p>
        </div>
      )}

      <ButtonMenu />
    </div>
  );
}

export default Scanner;
