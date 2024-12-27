import React, { useState, useEffect, useMemo } from "react";
import MessageInput from "./MessageInput";
import Message from "./Message";
import RandomImage1 from "../images/image2.jpeg";
import RandomImage2 from "../images/image3.jpeg";
import RandomImage3 from "../images/image4.jpeg";
import useInstantdb from "../service/useInstantdb";
import Call from "../images/call.png";
import Facetime from "../images/facetime.png";
import Threedots from "../images/threedots.png";
import "../style/chat.css";

export default function ChatWindow({ selectedContact, user }) {
  const { getMessagesForChat, sendMessage } = useInstantdb();
  const [messages, setMessages] = useState([]);
  const [messageText, setMessageText] = useState("");

  const randomImages = [RandomImage1, RandomImage2, RandomImage3];
  const randomImage = useMemo(
    () => randomImages[Math.floor(Math.random() * randomImages.length)],
    []
  );

  useEffect(() => {
    const fetchMessages = () => {
      const fetchedMessages = getMessagesForChat(selectedContact.id);
      setMessages(fetchedMessages);
      console.log(messages)
    };

    fetchMessages(); // Fetch messages on component mount
  }, [getMessagesForChat, selectedContact.id]);

  const handleSend = async () => {
    if (messageText.trim()) {
      await sendMessage(
        selectedContact.id,
        user.email,
        selectedContact.email,
        messageText
      );
      setMessageText(""); // Clear input after sending
      const updatedMessages = getMessagesForChat(selectedContact.id);
      setMessages(updatedMessages); // Update messages
    }
  };

  return (
    <div className="chat-window">
      <div className="info">
        <img
          src={randomImage}
          alt="contact"
          className="contact-image"
          height={33}
          width={33}
          style={{ borderRadius: "50%" }}
        />
        <h4>{selectedContact.name}</h4>
        <div className="itemss">
          <img src={Call} alt="call" height={20} width={20} className="call" />
          <img src={Facetime} alt="call" height={20} width={20} className="call" />
          <img src={Threedots} alt="call" height={20} width={20} className="call" />
        </div>
      </div>
      <div className="messages">
        {messages && messages.length > 0 ? (
          messages.map((msg) => (
            <Message key={msg.id} message={msg} currentUserEmail={user.email} />
          ))
        ) : (
          <p>No messages yet. Start the conversation!</p>
        )}
      </div>
      <MessageInput
        value={messageText}
        onChange={setMessageText} // Pass setMessageText directly
        onSend={handleSend} // Ensure handleSend is passed
      />
    </div>
  );
}







