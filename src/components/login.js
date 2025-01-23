import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../assets/login.css";
import logo from '../assets/images/logoril.png'; // Path logo Anda

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch("https://yayasan-three.vercel.app/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
      });

      const data = await response.json();

      if (response.ok) {
        localStorage.setItem("token", data.token);
        data.user.role === "admin"
          ? window.location.href =
              "http://127.0.0.1:5502/src/components/Dashboard/Dashboardadmin.html"
          : navigate("/");
      } else {
        setError(data.message || "Email atau password salah");
      }
    } catch (error) {
      console.error("Error during login:", error);
      setError("Email atau password salah");
    }
  };

  return (
    <div className="login-container">
      <div className="login-card">
      <img src={logo} alt="Logo" className="logo" />
        <h2 className="login-title">Login</h2>
        <p className="tagline">Welcome back! Please login to continue.</p>
        <form onSubmit={handleSubmit}>
          <div className="input-group">
            <label htmlFor="email">Email</label>
            <input
              type="text"
              id="email"
              name="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              placeholder="Enter your email"
            />
          </div>
          <div className="input-group">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              name="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              placeholder="Enter your password"
            />
          </div>
          {error && <p className="error-message">{error}</p>}
          <button type="submit" className="login-btn">Login</button>
        </form>
        <p className="register-redirect">
          Don't have an account? <a href="/register">Register here</a>
        </p>
      </div>
    </div>
  );
};

export default Login;
