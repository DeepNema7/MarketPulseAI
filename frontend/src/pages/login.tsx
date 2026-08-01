import { useState } from "react";
import { useNavigate } from "react-router-dom";
import api from "../api/axios";

export default function Login() {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  async function handleLogin(e: React.FormEvent) {
    e.preventDefault();

    try {
      setLoading(true);

      const formData = new URLSearchParams();

formData.append("username", email);
formData.append("password", password);

const response = await api.post("/auth/login", formData, {
  headers: {
    "Content-Type": "application/x-www-form-urlencoded",
  },
});

      const token = response.data.access_token;

      localStorage.setItem("token", token);

      navigate("/dashboard");
    } catch (err) {
      console.error(err);
      alert("Login Failed");
    } finally {
      setLoading(false);
    }
  }

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
      }}
    >
      <form
        onSubmit={handleLogin}
        style={{
          width: "350px",
          display: "flex",
          flexDirection: "column",
          gap: "15px",
        }}
      >
        <h1>MarketPulseAI</h1>

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

        <button type="submit" disabled={loading}>
          {loading ? "Logging in..." : "Login"}
        </button>
      </form>
    </div>
  );
} 