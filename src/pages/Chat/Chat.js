import React, { useEffect, useRef, useState } from "react";
import Nav2 from "../../components/Nav/Nav2";
import ButtonMenu from "../../components/ButtonMenu/ButtonMenu";
import "./styles.css";

function Chat() {
  const [mensajes, setMensajes] = useState([
    {
      id: 1,
      sender: "Detective Blanco",
      text: "El detective Smith me pidió que busquemos quién fue la última persona que vio a Clara.",
    },
    {
      id: 2,
      sender: "Detective Escarlata",
      text: "Me parece que Hernán fue la última persona que la vio con vida.",
    },
  ]);

  const [inputValue, setInputValue] = useState("");
  const chatEndRef = useRef(null);

  useEffect(() => {
    chatEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [mensajes]);

  const handleInputChange = (e) => setInputValue(e.target.value);

  const handleKeyPress = (e) => {
    if (e.key === "Enter" && inputValue.trim()) {
      enviarMensaje();
    }
  };

  const enviarMensaje = () => {
    if (!inputValue.trim()) return;

    const nuevoMensaje = {
      id: mensajes.length + 1,
      sender: "Vos",
      text: inputValue.trim(),
    };

    setMensajes([...mensajes, nuevoMensaje]);
    setInputValue("");
  };

  return (
    <div className="fondoGeneral">
      <Nav2 />
      <div className="sospechosos-page">
        <h3 className="header-1">Equipo Especial 263</h3>

        <div className="chat-messages">
          {mensajes.map((msg) => (
            <div key={msg.id} className="chat-message chat-npc">
              <strong>{msg.sender}:</strong>
              <p>{msg.text}</p>
            </div>
          ))}
          <div ref={chatEndRef} />
        </div>

        <input
          type="text"
          className="chat-reply-input input-2"
          placeholder="Escribí tu mensaje..."
          value={inputValue}
          onChange={handleInputChange}
          onKeyDown={handleKeyPress}
        />
      </div>

      <ButtonMenu className="button-menu" />
    </div>
  );
}

export default Chat;
