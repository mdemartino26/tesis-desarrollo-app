import { useState, useEffect } from "react";
import declaraciones from "../Declaraciones/Declaraciones.js";

export default function ScannerLogica() {
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

  return {
    codigoIngresado,
    setCodigoIngresado,
    mensaje,
    tipoMensaje,
    handleSubmit
  };
}