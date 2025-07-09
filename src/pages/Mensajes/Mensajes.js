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
          time: 0,
        },
        {
          sender: "npc",
          text: "Encontramos el celular de Clara en un arbusto cerca de la biblioteca, nuestra analista de IT está encargandose de hackearlo para ver la información que tiene",
          time: 0,
        },
        {
          sender: "user",
          text: "Espero el mensaje de la técnica",
          time: 0,
        },
        {
          sender: "npc",
          text: "Necesitamos descubrir quien fue la última persona que vió con vida a Clara. Cuando lo sepas, hacemelo saber.",
          time: 500,
        },
      ],
    },
    {
      id: "jesica",
      name: "Jesica IT",
      icon: "💻",
      preview: "Hacé clic para ver los últimos mensajes...",
      unread: false,
      
      messages: [
        {
          sender: "npc",
          text: "Hola Detective... logré desbloquear el celular de Clara. Podrás desbloquear la información en el botón siguiente.",
          time: 0,
          attachment: true,
        },],
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



const handleSendMessage = (conversationId, newMsg) => {
  setMessagesData((prev) =>
    prev.map((conv) =>
      conv.id === conversationId
        ? { ...conv, messages: [...conv.messages, newMsg] }
        : conv
    )
  );
};


  return (
    <div className="fondoGeneral">
      <Nav2 />
      <div className="sospechosos-page">
       
        {!selectedConversation ? (
          <>
           <h2>Mensajes</h2>
          <MensajesLista
            conversations={messagesData}
            onSelect={handleSelectConversation}
          />
          </>
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
             onSendMessage={handleSendMessage}
          />
        )}
      </div>
      <ButtonMenu />
    </div>
  );
}

export default Mensajes;
