import React, { useState } from "react";
import Aplicaciones from "../../components/Aplicaciones/Aplicaciones";
import EscanerQR from "../../components/EscanerQR/EscanerQR";
import Nav2 from "../../components/Nav/Nav2";
import VictimaInfo from "../../components/Victima/VictimaInfo";
import './styles.css';

function Menu() {
  const [mostrarEscaner, setMostrarEscaner] = useState(false);
  const [documentos, setDocumentos] = useState([]);

  const cerrarEscaner = (documento) => {
    if (documento) {
      setDocumentos(prev => [...prev, documento]);
    }
    setMostrarEscaner(false);
  };

  const aplicaciones = [
    {
      name: "Mensajes",
      img: "",
      link: "/mensajes",
    },
    {
      name: "Chat",
      img: "",
      link: "/chat",
    },
    {
      name: "Evidencia",
      img: "",
      link: "/evidencia",
    },
    {
      name: "Escanear QR",
      img: "",
      link: "#",
      onClick: () => setMostrarEscaner(true),
    },
  ];

  return (
    <div className="menu fondoGeneral">
      <Nav2 />
      <VictimaInfo
        nombre="Clara Torres"
        edad="22"
        causa="Estrangulación"
      />

      <section className="lista-aplicaciones">
        {aplicaciones.map((app, index) => (
          <article className="aplicaciones" key={index}>
            <button onClick={app.onClick || (() => window.location.href = app.link)}>
              <img src={app.img} alt={app.name} />
            </button>
            <p>{app.name}</p>
          </article>
        ))}
      </section>

      {mostrarEscaner && <EscanerQR onClose={cerrarEscaner} />}

      {documentos.length > 0 && (
        <section className="documentos-visibles">
          <h2>Documentos habilitados</h2>
          {documentos.map((doc, i) => (
            <div key={i}>
              <h3>{doc.nombre}</h3>
              <embed src={doc.url} width="100%" height="400px" type="application/pdf" />
            </div>
          ))}
        </section>
      )}
    </div>
  );
}

export default Menu;
