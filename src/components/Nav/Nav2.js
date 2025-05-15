import React from "react";
import './styles.css';
import Heading3 from "../Textos/Heading3";

export default function Nav2() {
  return (
    <div className="navegacion">
      <img src="./img/logo.png" alt="logo" className="logoInicial" />
      <Heading3 texto="#263"/>
      <img src="./img/detective.png" alt="logo" className="logoInicial" />
    </div>
  );
}
