import React, { useEffect, useState } from "react";
import EscanerQR from "../../components/EscanerQR/EscanerQR";
import Nav2 from "../../components/Nav/Nav2";
import "./styles.css";

export default function Evidencias() {
  const [documentosHabilitados, setDocumentosHabilitados] = useState([]);
  const [mostrarEscaner, setMostrarEscaner] = useState(false);

  useEffect(() => {
    const docsGuardados = localStorage.getItem("documentosHabilitados");
    if (docsGuardados) {
      setDocumentosHabilitados(JSON.parse(docsGuardados));
    }
  }, []);

  const manejarEscaneo = (codigoQR) => {
    const docEncontrado = documentosQR.find(
      (doc) => doc.codigoQR === codigoQR
    );

    if (docEncontrado) {
      const yaEsta = documentosHabilitados.some(
        (doc) => doc.id === docEncontrado.id
      );

      if (!yaEsta) {
        const nuevosDocs = [...documentosHabilitados, docEncontrado];
        setDocumentosHabilitados(nuevosDocs);
        localStorage.setItem("documentosHabilitados", JSON.stringify(nuevosDocs));
      }
    } else {
      alert("Código QR no reconocido");
    }

    setMostrarEscaner(false);
  };

  return (
    <div className="evidencias-page fondoGeneral">
      <Nav2 />
      <section>
        <h1>Documentos habilitados</h1>

        <button className="btn-escanear" onClick={() => setMostrarEscaner(true)}>
          Escanear nuevo QR
        </button>

        {mostrarEscaner && (
          <div className="popup-escaner">
            <EscanerQR onScanSuccess={manejarEscaneo} onClose={() => setMostrarEscaner(false)} />
          </div>
        )}

        <div className="lista-documentos">
          {documentosHabilitados.length === 0 && <p>No hay documentos habilitados todavía.</p>}
          {documentosHabilitados.map((doc) => (
            <div key={doc.id} className="documento">
              <h3>{doc.nombre}</h3>
              <embed src={doc.url} type="application/pdf" width="100%" height="400px" />
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
