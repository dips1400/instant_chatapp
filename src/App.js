import React, { useState } from "react";
import { AppProvider } from "./context/AppContext";
import ContactList from "./components/ContactList";
import ChatWindow from "./components/ChatWindow";
import Login from "./components/Login";
import Signup from "./components/Signup";
import './App.css'

function App() {
  const [selectedContact, setSelectedContact] = useState(null);
  const [user, setUser] = useState(null);
  const [isSignup, setIsSignup] = useState(false);

  if (!user) {
    return isSignup ? (
      <Signup onLogin={() => setIsSignup(false)} onSignup={setUser} />
    ) : (
      <Login onSignup={() => setIsSignup(true)} onLogin={setUser} />
    );
  }

  return (
    <AppProvider>
      <div className="app-container">
        <div className="contact-list-section">
          <ContactList onSelectContact={setSelectedContact} currentUser={user} />
        </div>
        <div className="chat-window-section">
          {selectedContact ? (
            <ChatWindow selectedContact={selectedContact} user={user} />
          ) : (
            <p>Select a contact to start chatting</p>
          )}
        </div>
      </div>
    </AppProvider>
  );
}

export default App;

