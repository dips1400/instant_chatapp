import React from "react";
import "../style/chat.css";

export default function MessageInput({ value, onChange, onSend }) {
  return (
    <div className="message-input">
      <input
        type="text"
        value={value}
        onChange={(e) => onChange(e.target.value)} 
        placeholder="Type a message..."
      />
      <button onClick={onSend}>Send</button>
    </div>
  );
}
