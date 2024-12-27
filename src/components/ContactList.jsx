import React, { useState } from "react";
import useInstantdb from "../service/useInstantdb";
import "../style/contacts.css";
import RandomImage1 from "../images/image2.jpeg";
import RandomImage2 from "../images/image3.jpeg";
import RandomImage3 from "../images/image4.jpeg";
import Call from "../images/call.png";
import Facetime from "../images/facetime.png";

export default function ContactList({ onSelectContact, currentUser }) {
  const { data, isLoading, addUser } = useInstantdb();
  const [isModalOpen, setModalOpen] = useState(false);
  const [newUserName, setNewUserName] = useState("");
  const [newUserEmail, setNewUserEmail] = useState("");
  const [error, setError] = useState("");

  if (isLoading) return <div>Loading contacts...</div>;

  const contacts =
    data?.users?.filter((contact) => contact.email !== currentUser.email) || [];
  const currentUserName =
    data?.users?.find((contact) => contact.email === currentUser.email)?.name ||
    "";

  const randomImages = [RandomImage1, RandomImage2, RandomImage3];

  const handleAddUser = async () => {
    if (!newUserName || !newUserEmail) {
      setError("Both fields are required.");
      return;
    }

    try {
      const generatedPassword = Math.random().toString(36).slice(-8); // Generate random password
      const newUser = {
        id: newUserEmail, // Use email as ID
        name: newUserName,
        email: newUserEmail,
        password: generatedPassword,
      };

      await addUser(newUser);
      setModalOpen(false);
      setNewUserName("");
      setNewUserEmail("");
      setError("");
    } catch (err) {
      console.error("Error adding user:", err);
      setError("Failed to add user. Please try again.");
    }
  };

  return (
    <div className="main-container">
      <div className="profile">
        <div className="circle">
          <img src={RandomImage1} alt="img" height={20} width={20} />
        </div>
        <h4>{currentUserName}</h4>
      </div>
      <div className="search">
        <input type="text" placeholder="Search for contacts..." />
      </div>
      <div className="adduser">
        <button onClick={() => setModalOpen(true)}>Add User</button>
      </div>
      <div className="contact-list">
        {contacts.map((contact, index) => (
          <div
            key={contact.id}
            className="contact-item"
            onClick={() => onSelectContact(contact)}
          >
            <img
              src={randomImages[index % randomImages.length]}
              alt="contact"
              className="contact-image"
              height={25}
              width={25}
              style={{ borderRadius: "50%" }}
            />
            {contact.name}
            <div className="items">
              <img src={Call} alt="call" height={20} width={20} className="call" />
              <img
                src={Facetime}
                alt="facetime"
                height={20}
                width={20}
                className="call"
              />
            </div>
          </div>
        ))}
      </div>

      {/* Modal for Adding User */}
      {isModalOpen && (
        <div className="modal-overlay">
          <div className="modal">
            <h2>Add New User</h2>
            {error && <p className="error">{error}</p>}
            <input
              type="text"
              placeholder="Name"
              value={newUserName}
              onChange={(e) => setNewUserName(e.target.value)}
            />
            <input
              type="email"
              placeholder="Email"
              value={newUserEmail}
              onChange={(e) => setNewUserEmail(e.target.value)}
            />
            <div className="modal-actions">
              <button onClick={handleAddUser}>Add User</button>
              <button onClick={() => setModalOpen(false)}>Cancel</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}



