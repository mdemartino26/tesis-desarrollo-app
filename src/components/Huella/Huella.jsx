import React, { useState } from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import "./styles.css";

const Huella = () => {
  const [escaneando, setEscaneando] = useState(false);
  const navigate = useNavigate();

  const manejarEscaneo = () => {
    setEscaneando(true);
    setTimeout(() => {
      setEscaneando(false);
      navigate("/menu");
    }, 3000);
  };

  return (
    <div
      className="huella-container"
      onClick={manejarEscaneo}
      onContextMenu={(e) => e.preventDefault()} 
      onTouchStart={(e) => e.preventDefault()}  
    >
      <div className="huella">
        <button 
          onTouchStart={(e) => e.preventDefault()} 
          onContextMenu={(e) => e.preventDefault()} 
        >
          <img 
            src="./img/huella.png" 
            alt="huella" 
            className="huella"
            onDragStart={(e) => e.preventDefault()} 
            onTouchStart={(e) => e.preventDefault()} 
            onContextMenu={(e) => e.preventDefault()} 
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