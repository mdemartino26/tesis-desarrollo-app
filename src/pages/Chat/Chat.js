import React, { useEffect, useRef } from "react";
import Nav2 from "../../components/Nav/Nav2";
import ButtonMenu from "../../components/ButtonMenu/ButtonMenu";

function Chat({ conversation, isTyping, onBack, onSendMessage, alreadyRead, onFinishDisplay }) {
  const chatEndRef = useRef(null);
  const prevConversationIdRef = useRef(null);

  useEffect(() => {
    if (conversation?.id !== prevConversationIdRef.current) {
      chatEndRef.current?.scrollIntoView({ behavior: "smooth" });
      prevConversationIdRef.current = conversation?.id;
    }
  }, [conversation?.id]);

  return (
    <div className="fondoGeneral">
      <Nav2 />
      <div className="sospechosos-page">
        <h2>Mensajes</h2>

        <div className="chat-contenedor">
          {conversation?.messages.map((msg, index) => (
            <div
              key={index}
              className={`mensaje-${msg.sender}`}
            >
              {msg.text}
            </div>
            
          ))}

          {isTyping && (
            <div className="mensaje-npc typing">Detective Smith está escribiendo</div>
          )}

          <div ref={chatEndRef} />
        </div>
      </div>
    
    </div>
  );
}

export default Chat;
