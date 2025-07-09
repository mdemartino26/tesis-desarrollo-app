import { useState, useEffect } from "react";
import declaraciones from "../Declaraciones/Declaraciones.js";

export default function ScannerLogica() {
  const [codigoIngresado, setCodigoIngresado] = useState("");
  const [mensaje, setMensaje] = useState("");
  const [tipoMensaje, setTipoMensaje] = useState("");

  const cerrarPopup = () => {
    setTimeout(() => {
      setMensaje("");
      setTipoMensaje("");
    }, 3000);
  };

  useEffect(() => {
    const guardados = JSON.parse(localStorage.getItem("scannerData"));

    if (!guardados || !Array.isArray(guardados) || guardados.length === 0) {
      const desbloqueadosPorDefecto = declaraciones
        .filter((decl) => ["DOC001", "DOC002"].includes(decl.codigo))
        .map(({ id, tipo, codigo }) => ({ id, tipo, codigo }));

      localStorage.setItem(
        "scannerData",
        JSON.stringify(desbloqueadosPorDefecto)
      );
    }
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();

    const doc = declaraciones.find(
      (decl) =>
        decl.codigo.toLowerCase() === codigoIngresado.trim().toLowerCase()
    );

    if (!doc) {
      setMensaje("Ese código no es válido");
      setTipoMensaje("error");
      cerrarPopup();
      return;
    }

    const guardados = JSON.parse(localStorage.getItem("scannerData")) || [];

    if (!guardados.some((item) => item.id === doc.id)) {
      guardados.push({ id: doc.id, tipo: doc.tipo, codigo: doc.codigo });
      localStorage.setItem("scannerData", JSON.stringify(guardados));

      setMensaje(`Información agregada: ${doc.nombre}`);
      setTipoMensaje("success");
      cerrarPopup(); 
    } else {
     
      setMensaje("Este documento ya fue escaneado.");
      setTipoMensaje("error");
      cerrarPopup(); 
    }

    setCodigoIngresado("");
  };

  return {
    codigoIngresado,
    setCodigoIngresado,
    mensaje,
    tipoMensaje,
    handleSubmit,
  };
}
