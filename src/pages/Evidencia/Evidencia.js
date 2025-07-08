import React, { useEffect, useState } from "react";
import "./styles.css";
import Nav2 from "../../components/Nav/Nav2";
import ButtonMenu from "../../components/ButtonMenu/ButtonMenu";
import declaraciones from "../../components/Declaraciones/Declaraciones.js";
import Popup from "../../components/Popup/Popup";
import CardEvidencia from "../../components/Cards/CardEvidencia.js";

function Evidencia() {
  const [desbloqueadas, setDesbloqueadas] = useState([]);
  const [popupVisible, setPopupVisible] = useState(false);
  const [declaracionSeleccionada, setDeclaracionSeleccionada] = useState(null);

  useEffect(() => {
    const data = JSON.parse(localStorage.getItem("scannerData")) || [];
    const idsEvidencias = data
      .filter((item) => item.tipo === "evidencia")
      .map((item) => item.id);

    const desbloqueadasIniciales = ["DOC004"];
    const nuevasDesbloqueadas = [
      ...new Set([...idsEvidencias, ...desbloqueadasIniciales]),
    ];

    setDesbloqueadas(nuevasDesbloqueadas);
  }, []);

  const mostrarPopup = (decl) => {
    setDeclaracionSeleccionada(decl);
    setPopupVisible(true);
  };

  const cerrarPopup = () => {
    setPopupVisible(false);
    setDeclaracionSeleccionada(null);
  };

  return (
    <div className="fondoGeneral">
      <Nav2 />
      <div className="sospechosos-page">
        <h2>Evidencias</h2>
        <section className="cards-container-evidencia">
          {desbloqueadas.length === 0 ? (
            <p>Escaneá los códigos para agregar evidencias a la lista.</p>
          ) : (
            <>
              {declaraciones
                .filter(
                  (decl) =>
                    decl.tipo === "evidencia" &&
                    desbloqueadas.includes(decl.codigo)
                )
                .map((decl) => (
                  <article key={decl.codigo} onClick={() => mostrarPopup(decl)}>
                    <CardEvidencia evidencia={decl} />
                  </article>
                ))}
            </>
          )}
        </section>

        {popupVisible && (
          <Popup declaracion={declaracionSeleccionada} onClose={cerrarPopup} />
        )}
      </div>

      <ButtonMenu />
    </div>
  );
}

export default Evidencia;
