import React, { useState } from "react";
import Nav2 from "../../components/Nav/Nav2";
import Heading1 from "../../components/Textos/Heading1";
import { useNavigate } from "react-router-dom";

const documentosDisponibles = [
  {
    id: "doc1",
    nombre: "Declaración de Sofía Rivero",
    urlPDF: "/documentos/sofiaRivero.pdf",
    codigoSecreto: "clave_sofia2025",
    descripcion: "Documento oficial de la declaración de Sofía Rivero.",
  },
  {
    id: "doc2",
    nombre: "Testimonio",
    urlPDF: "/documentos/testimonio.pdf",
    codigoSecreto: "testimonio2025",
    descripcion: "Testimonio clave para la causa.",
  },
];

function Evidencia() {
  const [codigoIngresado, setCodigoIngresado] = useState("");
  const [documentosHabilitados, setDocumentosHabilitados] = useState([]);
  const navigate = useNavigate();

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

  const irADetalle = (doc) => {
    navigate(`/evidencia/${doc.id}`, { state: { documento: doc } });
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
        <button onClick={manejarCodigo}>Enviar</button>

        <ul>
          {documentosHabilitados.map((doc) => (
            <li key={doc.id}>
              <h3>{doc.nombre}</h3>
              <p>{doc.descripcion}</p>
              <button onClick={() => irADetalle(doc)}>Ver detalle</button>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}

export default Evidencia;
