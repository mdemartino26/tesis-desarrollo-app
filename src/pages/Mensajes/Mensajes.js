import React, { useState } from "react";
import Nav2 from "../../components/Nav/Nav2";
import ButtonMenu from "../../components/ButtonMenu/ButtonMenu";
import MensajesLista from "../../components/Mensajes/MensajesLista";
import Chat from "../../components/Mensajes/Chat";

function Mensajes() {
  const [selectedId, setSelectedId] = useState(null);
  const [readConversations, setReadConversations] = useState([]);

  const [messagesData, setMessagesData] = useState([
    {
      id: "smith",
      name: "Detective Smith",
      icon: "🕵️",
      preview: "Hacé clic para ver los últimos mensajes...",
      unread: true,
      messages: [
        {
          sender: "npc",
          text: "Hola Detective... nos alegra tenerte en el equipo nuevamente.",
          time: 500,
        },
        {
          sender: "npc",
          text: "Encontramos el celular de Clara en un arbusto cerca de la biblioteca...",
          time: 2000,
        },
        {
          sender: "user",
          text: "Espero el mensaje",
          time: 4000,
        },
        {
          sender: "npc",
          text: "Detective, encontramos algunas pertenencias de Clara en la escena...",
          time: 6000,
          attachment: true,
        },
      ],
    },
    {
      id: "jesica",
      name: "Jesica IT",
      icon: "💻",
      preview: "Hacé clic para ver los últimos mensajes...",
      unread: false,
      messages: [],
    },
  ]);

  const selectedConversation = messagesData.find((m) => m.id === selectedId);

  const handleSelectConversation = (id) => {
    setMessagesData((prevData) =>
      prevData.map((conv) =>
        conv.id === id ? { ...conv, unread: false } : conv
      )
    );
    setSelectedId(id);
  };

  return (
    <div className="fondoGeneral">
      <Nav2 />
      <div className="sospechosos-page">
        <h2>Mensajes</h2>
        {!selectedConversation ? (
          <MensajesLista
            conversations={messagesData}
            onSelect={handleSelectConversation}
          />
        ) : (
          <Chat
            conversation={selectedConversation}
            onBack={() => setSelectedId(null)}
            alreadyRead={readConversations.includes(selectedConversation?.id)}
            onFinishDisplay={() => {
              if (!readConversations.includes(selectedConversation?.id)) {
                setReadConversations((prev) => [
                  ...prev,
                  selectedConversation.id,
                ]);
              }
            }}
          />
        )}
      </div>
      <ButtonMenu />
    </div>
  );
}

export default Mensajes;
