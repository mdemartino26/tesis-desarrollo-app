import React from "react";
import Nav2 from "../../components/Nav/Nav2";
import VictimaInfo from "../../components/Victima/VictimaInfo";
import "./styles.css";
import NotificacionDetective from "../../components/Notificacion/Notificacion";

function Menu() {
  const aplicaciones = [
    { name: "Mensajes", img: "./img/mensajes.png", link: "/mensajes" },
    { name: "Chat", img: "./img/chat.png", link: "/chat" },
    { name: "Evidencia", img: "./img/evidencia.png", link: "/evidencia" },
    { name: "Sospechosos", img: "./img/sospechosos.png", link: "/sospechosos" },
    { name: "Teléfono", img: "./img/telefono.png", link: "/telefono" },
    { name: "Escáner", img: "./img/camara.png", link: "/scanner" },
  ];

  return (
    <div className="menu fondoGeneral">
      <NotificacionDetective /> 
      <Nav2 />
      <VictimaInfo nombre="Clara Torres" edad="22" causa="Estrangulación" />

      <div className="apps-container">
        {aplicaciones.map((app) => (
          <div className="app-button" key={app.name} onClick={() => (window.location.href = app.link)}>
            <img src={app.img} alt={`Icono ${app.name}`} className="app-img" />
            <p>{app.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Menu;