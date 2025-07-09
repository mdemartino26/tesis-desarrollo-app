import React from "react";
import ScannerLogica from "../../components/Scanner/ScannerLogica";
import Nav2 from "../../components/Nav/Nav2";
import ButtonMenu from "../../components/ButtonMenu/ButtonMenu";
import './styles.css'


function Scanner() {
  const {
    codigoIngresado,
    setCodigoIngresado,
    mensaje,
    tipoMensaje,
    handleSubmit
  } = ScannerLogica();

  return (
    <div className="scanner-page fondoGeneral">
      <Nav2 />
      <div className="sospechosos-page scanner">
      <h2>Escaner</h2>


      <form onSubmit={handleSubmit} className="formulario-scanner">
        <input
          type="text"
          className="input"
          placeholder="Ingresá el código del documento"
          value={codigoIngresado}
          onChange={(e) => setCodigoIngresado(e.target.value)}
        />
        <button type="submit" className="botonInput">Escanear</button>
      </form>

      {mensaje && (
        <div className={`popup ${tipoMensaje}`}>
          {tipoMensaje === "success" && (
            <div className="circle">
              <span className="checkmark">✓</span>
            </div>
          )}
          <p>{mensaje}</p>
        </div>
      )}
      </div>

      <ButtonMenu />
    </div>
  );
}

export default Scanner;