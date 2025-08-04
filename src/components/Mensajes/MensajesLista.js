import React from "react";
import './styles.css';

export default function MensajesLista({ conversations, onSelect }) {
  return (
    <div className="msj-lista">
      {conversations.map((conv) => (
        <div key={conv.id} className="msj" onClick={() => onSelect(conv.id)}>
          <span className="icon">{conv.icon}</span>
          <div className="info">
            <div className="name">{conv.name}</div>
            <div className="preview">{conv.preview}</div>
          </div>
          {conv.unread && <div className="badge">1</div>}
        </div>
      ))}
    </div>
  );
}
