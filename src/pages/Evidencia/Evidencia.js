import React, { useState } from "react";
import Nav2 from "../../components/Nav/Nav2";
import Heading1 from "../../components/Textos/Heading1";

const documentosDisponibles = [
  {
    id: "doc1",
    nombre: "Declaración de Sofía Rivero",
    urlPDF: "/documentos/sofiaRivero.pdf",
    codigoSecreto: "clave_sofia2025",
  },
  {
    id: "doc2",
    nombre: "Testimonio",
    urlPDF: "/documentos/testimonio.pdf",
    codigoSecreto: "testimonio2025",
  },
];

function Evidencia() {
  const [codigoIngresado, setCodigoIngresado] = useState("");
  const [documentosHabilitados, setDocumentosHabilitados] = useState([]);

  const manejarCodigo = () => {
    const docEncontrado = documentosDisponibles.find(
      (doc) => doc.codigoSecreto === codigoIngresado.trim()
    );
    if (docEncontrado) {
      if (!documentosHabilitados.some((doc) => doc.id === docEncontrado.id)) {
        setDocumentosHabilitados([...documentosHabilitados, docEncontrado]);
      }
      setCodigoIngresado("");
    } else {
      alert("Código incorrecto.");
    }
  };

  return (
    <>
      <Nav2 />
      <Heading1 texto="Evidencia" />

      <div style={{ padding: "1rem" }}>
        <input
          type="text"
          value={codigoIngresado}
          onChange={(e) => setCodigoIngresado(e.target.value)}
          placeholder="Ingresá el código secreto"
        />
        <button onClick={manejarCodigo}>Desbloquear</button>
      </div>

      {documentosHabilitados.map((doc) => (
        <div key={doc.id} style={{ marginTop: "2rem" }}>
          <h3>{doc.nombre}</h3>
          <iframe
            src={doc.urlPDF}
            width="100%"
            height="600px"
            title={doc.nombre}
          ></iframe>
        </div>
      ))}
    </>
  );
}

export default Evidencia;
