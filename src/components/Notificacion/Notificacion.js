import React, { useEffect, useState } from "react";
import "./styles.css";

function NotificacionDetective() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setVisible(true);

      setTimeout(() => {
        setVisible(false);
      }, 5000); // 👈 Ocultar a los 5 segundos
    }, 10000); // 👈 Mostrar después de 10 segundos

    return () => clearTimeout(timer);
  }, []);

  if (!visible) return null;

  return (
    <div className="notificacion-detective">
      🕵️ Mensaje nuevo del Detective Smith
    </div>
  );
}

export default NotificacionDetective;