import React, { useEffect, useState } from "react";
import "./styles.css";
import NotificacionMensaje from "./NotificacionMensaje"; 

function NotificacionDetective() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const yaMostrada = localStorage.getItem("notificacionDetectiveMostrada");

    if (yaMostrada) return; 

    const timer = setTimeout(() => {
      setVisible(true);

      setTimeout(() => {
        setVisible(false);
      }, 3000);

      localStorage.setItem("notificacionDetectiveMostrada", "true");
    }, 10000); 

    return () => clearTimeout(timer);
  }, []);

  if (!visible) return null;

  return (
    <NotificacionMensaje
      texto="Mensaje nuevo del Detective Smith"
      icono="/img/mensajes.png"
      onClose={() => setVisible(false)}
    />
  );
}

export default NotificacionDetective;
