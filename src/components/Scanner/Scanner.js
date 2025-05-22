import React, { useState } from "react";


const declaraciones = [
  { id: 1, resumen: "Declaración de testigo ocular en la escena." },
  { id: 2, resumen: "Declaración del vecino que escuchó ruidos." },
  { id: 3, resumen: "Declaración del portero del edificio." },
];

function Scanner() {
  const [mensaje, setMensaje] = useState("");

  const handleSeleccion = (e) => {
    const id = parseInt(e.target.value);
    if (!id) return;


    const guardados = JSON.parse(localStorage.getItem("scannerData")) || [];


    if (!guardados.includes(id)) {
      guardados.push(id);
      localStorage.setItem("scannerData", JSON.stringify(guardados));
      setMensaje("Documento agregado.");
    } else {
      setMensaje("Este documento ya fue escaneado.");
    }


    setTimeout(() => setMensaje(""), 3000);
  };

  return (
    <div className="scanner-page fondoGeneral">
      <h2>Simulador de Scanner</h2>

      <div className="scanner-frame">
        <p>Simulación de cámara</p>
      </div>

      <select onChange={handleSeleccion} defaultValue="">
        <option value="" disabled>Seleccioná una declaración</option>
        {declaraciones.map((decl) => (
          <option key={decl.id} value={decl.id}>
            {decl.resumen}
          </option>
        ))}
      </select>

      {mensaje && <div className="popup">{mensaje}</div>}
    </div>
  );
}

export default Scanner;
