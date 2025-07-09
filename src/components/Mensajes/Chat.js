import React, { useState, useEffect, } from "react";
import "./styles.css";

export default function Chat({ conversation, onBack, alreadyRead, onFinishDisplay, onSendMessage }) {
  const [displayedMessages, setDisplayedMessages] = useState([]);
  const [inputValue, setInputValue] = useState("");

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
    <div className="chat-view">
      <div className="chat-header">
        <button onClick={onBack} className="chat-back-btn">◀</button>
        <h3 className="chat-name">{conversation.name}</h3>
      </div>

      <div className="chat-messages">
        {displayedMessages.map((msg, i) => (
          <div
            key={i}
            className={`chat-message ${msg.sender === "user" ? "chat-user" : "chat-npc"}`}
          >
            <p>{msg.text}</p>
            {msg.attachment && <button className="chat-download-btn attachment">Descargado</button>}
          </div>
        ))}
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
  );
}
