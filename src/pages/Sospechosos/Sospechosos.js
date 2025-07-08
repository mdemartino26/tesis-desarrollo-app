import React, { useEffect, useState } from "react";
import "./styles.css";
import Nav2 from "../../components/Nav/Nav2";
import ButtonMenu from "../../components/ButtonMenu/ButtonMenu";
import CardSospechosos from "../../components/Cards/CardSospechosos";
import declaraciones from "../../components/Declaraciones/Declaraciones.js";
import Popup from "../../components/Popup/Popup";

function Sospechosos() {
  const [desbloqueadas, setDesbloqueadas] = useState([]);
  const [popupVisible, setPopupVisible] = useState(false);
  const [declaracionSeleccionada, setDeclaracionSeleccionada] = useState(null);

  useEffect(() => {
    const data = JSON.parse(localStorage.getItem("scannerData")) || [];
    const idsSospechosos = data
      .filter((item) => item.tipo === "sospechoso")
      .map((item) => item.id);

    const desbloqueadasIniciales = ["DOC001", "DOC002", "DOC003"];
    const nuevasDesbloqueadas = [
      ...new Set([...idsSospechosos, ...desbloqueadasIniciales]),
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
        <h2>Sospechosos</h2>

        {desbloqueadas.length === 0 ? (
          <p>Escaneá los códigos para agregar a la lista.</p>
        ) : (
          <>
            {declaraciones
              .filter((decl) => desbloqueadas.includes(decl.codigo))
              .map((decl) => (
                <section
                  key={decl.id}
                  className="cards-container"
                  onClick={() => mostrarPopup(decl)}
                >
                  <CardSospechosos sospechoso={decl} />
                </section>
              ))}
          </>
        )}

        {popupVisible && (
          <Popup declaracion={declaracionSeleccionada} onClose={cerrarPopup} />
        )}
      </div>

      <ButtonMenu />
    </div>
  );
}

export default Sospechosos;
