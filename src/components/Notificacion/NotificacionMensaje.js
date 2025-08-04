import React, { useEffect } from "react";
import "./styles.css";

export default function NotificacionMensaje({ texto, icono, onClose }) {
  useEffect(() => {
    const timer = setTimeout(() => {
      onClose();
    }, 5000);

    return () => clearTimeout(timer);
  }, [onClose]);

  return (
    <div className="notificacion-detective">
      {icono && <img src={icono} alt="icono" className="notificacion-icono" />}
      {texto}
    </div>
  );
}
