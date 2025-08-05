import React, { useState, useEffect, useRef } from "react";
import "./styles.css";
import NotificacionMensaje from "../Notificacion/NotificacionMensaje";

export default function Chat({
  conversation,
  onBack,
  alreadyRead,
  onFinishDisplay,
  onSendMessage,
}) {
  const [displayedMessages, setDisplayedMessages] = useState([]);
  const [inputValue, setInputValue] = useState("");
  const [showEquipoNotification, setShowEquipoNotification] = useState(false);
  const messagesEndRef = useRef(null);

  useEffect(() => {
    let timers = [];
    setDisplayedMessages([]);

    if (conversation.name === "Detective Smith" && !alreadyRead) {
      setShowEquipoNotification(true);
    }

    if (alreadyRead) {
      setDisplayedMessages(conversation.messages);
    } else {
      conversation.messages.forEach((msg, index) => {
        const timer = setTimeout(() => {
          setDisplayedMessages((prev) => {
            const updated = [...prev, msg];
            return updated;
          });

          if (index === conversation.messages.length - 1) {
            onFinishDisplay();
          }
        }, msg.time);
        timers.push(timer);
      });
    }

    return () => timers.forEach(clearTimeout);
  }, [conversation.id, conversation.name, alreadyRead, onFinishDisplay]);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [displayedMessages]);

  const handleInputChange = (e) => setInputValue(e.target.value);

  const handleKeyPress = (e) => {
    if (e.key === "Enter" && inputValue.trim()) {
      const newMsg = {
        sender: "user",
        text: inputValue.trim(),
        time: 0,
      };

      setDisplayedMessages((prev) => [...prev, newMsg]);
      onSendMessage(conversation.id, newMsg);
      setInputValue("");
    }
  };

  return (
    <>
      <div className="chat-view">
        <div className="chat-header">
          <button onClick={onBack} className="chat-back-btn">
            ◀
          </button>
          <h3 className="chat-name">{conversation.name}</h3>
        </div>

        <div className="chat-messages">
          {displayedMessages.map((msg, i) => (
            <div
              key={i}
              className={`chat-message ${
                msg.sender === "user" ? "chat-user" : "chat-npc"
              }`}
            >
              <p>{msg.text}</p>
              {msg.attachment && (
                <button className="chat-download-btn attachment">
                  Descargado
                </button>
              )}
            </div>
          ))}
          <div ref={messagesEndRef} />
        </div>

        <input
          type="text"
          className="chat-reply-input"
          placeholder="Responder..."
          value={inputValue}
          onChange={handleInputChange}
          onKeyDown={handleKeyPress}
        />
      </div>

      {showEquipoNotification && (
        <NotificacionMensaje
          texto="Mensaje nuevo del equipo"
          icono="/img/chat.png"
          onClose={() => setShowEquipoNotification(false)}
        />
      )}
    </>
  );
}
