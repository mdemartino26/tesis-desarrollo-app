import React, { useEffect, useState } from "react";
import Nav2 from "../../components/Nav/Nav2";
import ButtonMenu from "../../components/ButtonMenu/ButtonMenu";
import declaraciones from "../../components/Declaraciones/Declaraciones.js";

function Sospechosos() {
  const [desbloqueadas, setDesbloqueadas] = useState([]);

  useEffect(() => {
    const data = JSON.parse(localStorage.getItem("scannerData")) || [];
    const idsSospechosos = data
      .filter((item) => item.tipo === "evidencia")
      .map((item) => item.id);
    setDesbloqueadas(idsSospechosos);
  }, []);

  return (
    <div className="fondoGeneral">
      
      <Nav2 />
      <div className="sospechosos-page">
      <h2>evidencia</h2>

      {desbloqueadas.length === 0 ? (
        <p>Escaneá los códigos para agregar a la lista.</p>
      ) : (
        <section className="cards-container">
          {declaraciones
            .filter((decl) => decl.tipo === "evidencia") 
            .filter((decl) => desbloqueadas.includes(decl.id))
            .map((decl) => (
              <div className="sospechoso-card" key={decl.id} onClick={() => alert(decl.resumen)}>
                <img src={decl.img} alt={decl.nombre} className="sospechoso-img"/>
                <p>{decl.nombre}</p>
              </div>
            ))}
        </section>
      )}
      </div>
      <ButtonMenu />
    </div>
  );
}

export default Sospechosos;
