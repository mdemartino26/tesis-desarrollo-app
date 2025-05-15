import React, { useState } from "react";
import "./styles.css";
import Aplicaciones from "../../components/Aplicaciones/Aplicaciones";
import Nav2 from "../../components/Nav/Nav2";
import VictimaInfo from "../../components/Victima/VictimaInfo";
import EscanerQR from "../../components/EscanerQR/EscanerQR";

function Menu() {
  const [mostrarEscaner, setMostrarEscaner] = useState(false);

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
      name: "Cámara",
      img: "",
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
          <Aplicaciones
            key={index}
            name={app.name}
            img={app.img}
            link={app.link}
            onClick={app.onClick}
          />
        ))}
      </section>

      {mostrarEscaner && <EscanerQR onClose={() => setMostrarEscaner(false)} />}
    </div>
  );
}

export default Menu;
