import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../assets/register.css";
import axios from "axios";
import logo from '../assets/images/logoril.png'; // Path logo Anda

const Register = () => {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const handleRegister = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    if (!email || !password) {
      setError("Email dan password harus diisi");
      setIsLoading(false);
      return;
    }

    const values = { email, name, password };

    try {
      const response = await axios.post("https://yayasan-three.vercel.app/regis", values);
      navigate("/login");
    } catch (error) {
      console.error(error.response || error.message);
      setError("Terjadi kesalahan. Coba lagi.");
      setIsLoading(false);
    }
  };

  return (
    <div className="register-container">
      <div className="register-card">
      <img src={logo} alt="Logo" className="logo" />
        <h2>Daftar Akun Baru</h2>
        <p className="tagline">your help means a lot!</p>
        <form onSubmit={handleRegister} className="register-form">
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Email Anda"
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="name">Nama</label>
            <input
              type="text"
              id="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Nama Anda"
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Password Anda"
              required
            />
          </div>
          {error && <p className="error">{error}</p>}
          <button type="submit" disabled={isLoading}>
            {isLoading ? "Loading..." : "Daftar"}
          </button>
        </form>
        <p className="login-link">
          Sudah punya akun? <span onClick={() => navigate("/login")} className="link-text">Login</span>
        </p>
      </div>
    </div>
  );
};

export default Register;