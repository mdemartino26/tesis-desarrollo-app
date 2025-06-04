import React, { useState } from "react";
import Nav2 from "../Nav/Nav2";
import ButtonMenu from "../ButtonMenu/ButtonMenu";
import declaraciones from "../../components/Declaraciones/Declaraciones.js";

function Scanner() {
  const [codigoIngresado, setCodigoIngresado] = useState("");
  const [mensaje, setMensaje] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    const doc = declaraciones.find(
      (decl) =>
        decl.codigo.toLowerCase() === codigoIngresado.trim().toLowerCase()
    );

    if (!doc) {
      setMensaje("Código no válido.");
      setTimeout(() => setMensaje(""), 3000);
      return;
    }

    const guardados = JSON.parse(localStorage.getItem("scannerData")) || [];

    if (!guardados.some((item) => item.id === doc.id)) {
      guardados.push({ id: doc.id, tipo: doc.tipo });
      localStorage.setItem("scannerData", JSON.stringify(guardados));
      setMensaje("Documento agregado.");
    } else {
      setMensaje("Este documento ya fue escaneado.");
    }

    setCodigoIngresado("");
    setTimeout(() => setMensaje(""), 3000);
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

      {mensaje && <div className="popup">{mensaje}</div>}

      <ButtonMenu />
    </div>
  );
}

export default Scanner;
