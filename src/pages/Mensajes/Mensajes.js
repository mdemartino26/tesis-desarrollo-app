import React, { useState } from "react";
import Nav2 from "../../components/Nav/Nav2";
import ButtonMenu from "../../components/ButtonMenu/ButtonMenu";
import MensajesLista from "../../components/Mensajes/MensajesLista";
import Chat from "../../components/Mensajes/Chat";

function Mensajes() {
  const conversacionesLeidas =
    JSON.parse(localStorage.getItem("conversacionesLeidas")) ?? [];

  const [selectedId, setSelectedId] = useState(null);
  const [readConversations, setReadConversations] =
    useState(conversacionesLeidas);
  const [isTyping, setIsTyping] = useState(false);

  const [messagesData, setMessagesData] = useState([
    {
      id: "smith",
      name: "Detective Smith",
      icon: "🕵️",
      preview: "Hacé clic para ver los últimos mensajes...",
      unread: !conversacionesLeidas.includes("smith"),
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
        },
      ],
    },
  ]);

  const selectedConversation = messagesData.find((m) => m.id === selectedId);

  const handleSelectConversation = (id) => {
    setMessagesData((prevData) =>
      prevData.map((conv) =>
        conv.id === id ? { ...conv, unread: false } : conv
      )
    );

    const leidas =
      JSON.parse(localStorage.getItem("conversacionesLeidas")) ?? [];
    if (!leidas.includes(id)) {
      const actualizadas = [...leidas, id];
      localStorage.setItem(
        "conversacionesLeidas",
        JSON.stringify(actualizadas)
      );
      setReadConversations(actualizadas);
    }

    setSelectedId(id);
  };

  const normalize = (str) =>
    str
      .normalize("NFD")
      .replace(/[\u0300-\u036f]/g, "")
      .toLowerCase()
      .replace(/\s+/g, "");

  const handleSendMessage = (conversationId, newMsg) => {
    setMessagesData((prev) =>
      prev.map((conv) =>
        conv.id === conversationId
          ? { ...conv, messages: [...conv.messages, newMsg] }
          : conv
      )
    );

    const normalizedInput = normalize(newMsg.text);
    const target = normalize("raúl tomaso");

    if (normalizedInput.includes(target) && conversationId === "smith") {
      setIsTyping(true);

      const typingMsg = {
        sender: "npc",
        text: "...",
        time: 0,
      };

      setMessagesData((prev) =>
        prev.map((conv) =>
          conv.id === conversationId
            ? { ...conv, messages: [...conv.messages, typingMsg] }
            : conv
        )
      );

      setTimeout(() => {
        const detectiveMsg = {
          sender: "npc",
          text: `Lo que no se dijo en voz alta, se deslizó en tinta...\n\ndejé en tu escritorio una pista clave, encontrá el objeto con el símbolo que responde este acertijo:\n\nSiempre están al frente,\npero no te abren la entrada.\nSirven para decir “te quiero”\no quedarte bien callada.`,
          time: 0,
        };

        setMessagesData((prev) =>
          prev.map((conv) =>
            conv.id === conversationId
              ? {
                  ...conv,
                  messages: [...conv.messages.slice(0, -1), detectiveMsg],
                }
              : conv
          )
        );

        setIsTyping(false);
      }, 2000);
    }
  };

 return (
  <>
    {!selectedConversation ? (
      <div className="fondoGeneral">
        <Nav2 />
        <div className="sospechosos-page">
          <h2>Mensajes</h2>
          <MensajesLista
            conversations={messagesData}
            onSelect={handleSelectConversation}
          />
        </div>
        <ButtonMenu />
      </div>
    ) : (
      <div className="fondoGeneral">
        <Nav2 />
        <div className="sospechosos-page">
          <Chat
            conversation={selectedConversation}
            onBack={() => setSelectedId(null)}
            alreadyRead={readConversations.includes(selectedConversation?.id)}
            onFinishDisplay={() => {
              if (!readConversations.includes(selectedConversation?.id)) {
                const nuevasLeidas = [
                  ...readConversations,
                  selectedConversation.id,
                ];
                localStorage.setItem(
                  "conversacionesLeidas",
                  JSON.stringify(nuevasLeidas)
                );
                setReadConversations(nuevasLeidas);
              }
            }}
            onSendMessage={handleSendMessage}
            isTyping={isTyping}
          />
        </div>
        <ButtonMenu />
      </div>
    )}
  </>
);
}

export default Mensajes;
