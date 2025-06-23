import React, { useEffect, useState } from "react";
import Nav2 from "../../components/Nav/Nav2";
import ButtonMenu from "../../components/ButtonMenu/ButtonMenu";


function Chat() {
 

  return (
    <div className="fondoGeneral">
      <Nav2 />
      <div className="sospechosos-page">
        <h2>Mensajes</h2>

       
      </div>

      <ButtonMenu />
    </div>
  );
}

export default Chat;
