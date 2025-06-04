import React, { useEffect, useState } from "react";
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
    setDesbloqueadas(idsSospechosos);
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
    <div className="sospechosos-page fondoGeneral">
      <Nav2 />
      <h2>Sospechosos</h2>

      {desbloqueadas.length === 0 ? (
        <p>Escaneá los códigos para agregar a la lista.</p>
      ) : (
        <section className="cards-container">
          {declaraciones
            .filter((decl) => desbloqueadas.includes(decl.id))
            .map((decl) => (
              <div key={decl.id} onClick={() => mostrarPopup(decl)}>
                <CardSospechosos sospechoso={decl} />
              </div>
            ))}
        </section>
      )}

      {popupVisible && (
        <Popup
          declaracion={declaracionSeleccionada}
          onClose={cerrarPopup}
        />
      )}

      <ButtonMenu />
    </div>
  );
}

export default Sospechosos;

