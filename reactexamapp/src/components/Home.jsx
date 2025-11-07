import React, { useEffect, useState } from "react";
import { getUser } from "../services/userService";
import { useNavigate } from "react-router-dom";

export default function Home() {
  const [user, setUser] = useState(null);
  const [envMessage, setEnvMessage] = useState("");
  const [envColor, setEnvColor] = useState("#607d8b");
  const navigate = useNavigate();

  useEffect(() => {
    const stored = sessionStorage.getItem("user");
    if (!stored) {
      navigate("/login");
      return;
    }
    const parsed = JSON.parse(stored);
    getUser(parsed.id)
      .then((res) => setUser(res.data))
      .catch(() => {
        sessionStorage.removeItem("user");
        navigate("/login");
      });

    const port = window.location.port ? parseInt(window.location.port, 10) : 80;
    if (port === 5173) {
      setEnvMessage("🎉 Congratulations! You have executed the project locally.");
      setEnvColor("#4caf50");
    } else if (port >= 30000 && port <= 32767) {
      setEnvMessage("🚀 Well done! You have successfully deployed the project on Kubernetes.");
      setEnvColor("#9c27b0");
    } else {
      setEnvMessage("ℹ️ Unknown environment — please run locally or via Kubernetes.");
      setEnvColor("#607d8b");
    }
  }, [navigate]);

  const handleLogout = () => {
    sessionStorage.clear();
    navigate("/login");
  };

  return (
    <div>
      <h3>Home</h3>
      {envMessage && <div className="alert" style={{ backgroundColor: envColor }}>{envMessage}</div>}
      {user ? (
        <div style={{ background: "#fff", padding: "16px", borderRadius: "8px", boxShadow: "0 6px 18px rgba(0,0,0,0.04)", maxWidth: "420px" }}>
          <p><strong>ID:</strong> {user.id}</p>
          <p><strong>Username:</strong> {user.username}</p>
          <p><strong>Email:</strong> {user.email}</p>
          <button className="button" onClick={handleLogout} style={{ background: "#f44336", marginTop: 10 }}>Logout</button>
        </div>
      ) : (
        <p>Loading user data...</p>
      )}
    </div>
  );
}
