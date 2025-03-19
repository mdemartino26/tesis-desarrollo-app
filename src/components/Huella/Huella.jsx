import React, { useState } from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import "./styles.css";

const Huella = () => {
  const [escaneando, setEscaneando] = useState(false);
  const navigate = useNavigate();
  let touchTimeout = null;

  const manejarEscaneo = () => {
    setEscaneando(true);
    setTimeout(() => {
      setEscaneando(false);
      navigate("/menu");
    }, 3000);
  };

  const bloquearEventos = (e) => {
    e.preventDefault();
    return false;
  };

  return (
    <div
      className="huella-container"
      onClick={manejarEscaneo}
      onContextMenu={bloquearEventos}
      onTouchStart={(e) => {
        bloquearEventos(e);
        touchTimeout = setTimeout(() => manejarEscaneo(), 500);
      }}
      onTouchEnd={() => clearTimeout(touchTimeout)}
    >
      <div className="huella">
        <button 
          onTouchStart={bloquearEventos}
          onTouchEnd={bloquearEventos}
          onContextMenu={bloquearEventos}
        >
          <img 
            src="./img/huella.png" 
            alt="huella" 
            className="huella"
            draggable={false}
            onDragStart={bloquearEventos}
            onTouchStart={bloquearEventos}
            onTouchEnd={bloquearEventos}
            onContextMenu={bloquearEventos}
          />
        </button>
      </div>
      {escaneando && (
        <motion.div
          className="barra-escaneo"
          initial={{ y: -50 }}
          animate={{ y: [-80, 80, -80] }}
          transition={{ duration: 3, ease: "linear" }}
        />
      )}
    </div>
  );
};

export default Huella;