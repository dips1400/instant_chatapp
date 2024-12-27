import React from "react";

export default function Message({ message, currentUserEmail }) {
  const isSentByCurrentUser = message.sender === currentUserEmail;

  return (
    <div className={`message ${isSentByCurrentUser ? "sent" : "received"}`}>
      <p>{message.text}</p>
      <small>{new Date(message.timestamp).toLocaleTimeString()}</small>
    </div>
  );
}


