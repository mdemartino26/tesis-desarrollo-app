// src/pages/Menu/Menu.js
import React, { useState, useEffect } from "react";
import Nav2 from "../../components/Nav/Nav2";
import VictimaInfo from "../../components/Victima/VictimaInfo";
import EscanerQR from "../../components/EscanerQR/EscanerQR";
import './styles.css';

function Menu() {
  const [mostrarEscaner, setMostrarEscaner] = useState(false);

  const aplicaciones = [
    { name: "Mensajes", img: "", link: "/mensajes" },
    { name: "Chat", img: "", link: "/chat" },
    { name: "Evidencia", img: "", link: "/evidencia" },
   
  ];

  return (
    <div className="menu fondoGeneral">
      <Nav2 />
      <VictimaInfo nombre="Clara Torres" edad="22" causa="Estrangulación" />

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

    
    </div>
  );
}

export default Menu;
