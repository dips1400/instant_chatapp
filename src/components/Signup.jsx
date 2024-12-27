import React, { useState } from "react";
import useInstantdb from "../service/useInstantdb";
import "../style/signup.css";
export default function Signup({ onLogin, onSignup }) {
    const { addUser } = useInstantdb();
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
  
    const handleSignup = async () => {
      const user = { id: email, name, email, password };
      await addUser(user);
      onSignup(user);
    };
  
    return (
      <div className="container">
              <div className="signup-container">
        <h2>Sign Up</h2>
        <input
          type="text"
          placeholder="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button onClick={handleSignup}>Sign Up</button>
        <p>
          Already have an account? <span onClick={onLogin}>Log in</span>
        </p>
      </div>
      </div>
    );
  }