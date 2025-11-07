import React, { useState } from "react";
import { register } from "../services/userService";
import { useNavigate } from "react-router-dom";

export default function Register() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState(null);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setMessage(null);
    try {
      const res = await register({ username, email, password });
      setMessage({ text: res.data || "Registered successfully", type: "success" });
      setTimeout(() => navigate("/login"), 1000);
    } catch (err) {
      const msg = err.response?.data || "Registration failed";
      setMessage({ text: msg, type: "error" });
    }
  };

  return (
    <div className="form">
      <h3>Register</h3>
      {message && (
        <div
          className="alert"
          style={{ backgroundColor: message.type === "success" ? "#4caf50" : "#f44336" }}
        >
          {message.text}
        </div>
      )}
      <form onSubmit={handleSubmit}>
        <input className="input" placeholder="Username" value={username} onChange={(e) => setUsername(e.target.value)} required />
        <input className="input" type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} required />
        <input className="input" type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} required />
        <button className="button" type="submit">Register</button>
      </form>
    </div>
  );
}
