import React from "react";
import Input from "../../components/Input/Input";
import Heading1 from "../../components/Textos/Heading1";
import Nav from "../../components/Nav/Nav";
import './styles.css'

export default function Expediente() {
  return (
    <div className="fondoGeneral alinear">
      <Nav />

      <div className="contenido">
        <Heading1 texto="Nº DE EXPEDIENTE" />

        <Input
          redirectPath="/menu"
          titulo=""
          placeholder=""
          textoBoton="Buscar"
          valorCorrecto="4568"
          mensajeErrorCustom="Ups, no encontramos ese expediente. Probá de nuevo."
        />
      </div>
    </div>
  );
}
