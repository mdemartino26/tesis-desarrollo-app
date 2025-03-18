import React, { useState } from "react";
import { motion } from "framer-motion";
import "./styles.css";

const Huella = () => {
  const [escaneando, setEscaneando] = useState(false);

  const manejarEscaneo = () => {
    setEscaneando(true);
    setTimeout(() => {
      setEscaneando(false);
    }, 3000);
  };

  return (
    <div className="huella-container" onClick={manejarEscaneo}  onContextMenu={(e) => e.preventDefault()}>
      <div className="huella"><img src="./img/huella.png" alt="huella" className="huella"/></div>
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