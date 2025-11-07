import React, { useState } from "react";
import { login } from "../services/userService";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState(null);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setMessage(null);
    try {
      const res = await login(username, password);
      sessionStorage.setItem("user", JSON.stringify(res.data));
      navigate("/home");
    } catch (err) {
      setMessage("Invalid username or password");
    }
  };

  return (
    <div className="form">
      <h3>Login</h3>
      {message && <div className="alert" style={{ backgroundColor: "#f44336" }}>{message}</div>}
      <form onSubmit={handleSubmit}>
        <input className="input" placeholder="Username" value={username} onChange={(e) => setUsername(e.target.value)} required />
        <input className="input" type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} required />
        <button className="button" type="submit">Login</button>
      </form>
    </div>
  );
}
