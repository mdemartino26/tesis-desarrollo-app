import React, { useState, useEffect } from "react";
import "./styles.css";

export default function Chat({ conversation, onBack, alreadyRead, onFinishDisplay }) {
  const [displayedMessages, setDisplayedMessages] = useState([]);

  useEffect(() => {
    let timers = [];
    setDisplayedMessages([]);

    if (alreadyRead) {
      setDisplayedMessages(conversation.messages);
    } else {
      conversation.messages.forEach((msg, index) => {
        const timer = setTimeout(() => {
          setDisplayedMessages((prev) => [...prev, msg]);
          if (index === conversation.messages.length - 1) {
            onFinishDisplay();
          }
        }, msg.time);
        timers.push(timer);
      });
    }

    return () => timers.forEach(clearTimeout);
  }, [conversation, alreadyRead, onFinishDisplay]);

  return (
    <div className="chat-view">
      <div className="chat-header">
        <button onClick={onBack} className="chat-back-btn">←</button>
        <h3 className="chat-name">{conversation.name}</h3>
      </div>

      <div className="chat-messages">
        {displayedMessages.map((msg, i) => (
          <div
            key={i}
            className={`chat-message ${msg.sender === "user" ? "chat-user" : "chat-npc"}`}
          >
            <p>{msg.text}</p>
            {msg.attachment && <button className="chat-download-btn">Descargar</button>}
          </div>
        ))}
      </div>

      <input type="text" className="chat-reply-input" placeholder="Responder..." />
    </div>
  );
}