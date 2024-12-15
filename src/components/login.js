import React, { useState } from "react";
import { useNavigate } from "react-router-dom"; // Import useNavigate
import "../assets/login.css"; // Pastikan file CSS ini sudah ada

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(""); // Untuk menyimpan pesan error
  const navigate = useNavigate(); // Inisialisasi useNavigate

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Kirim permintaan POST ke backend untuk login
    try {
      const response = await fetch("http://localhost:8080/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }), // Mengirim data ke backend
      });

      const data = await response.json();

      if (response.ok) {
        // Jika login berhasil, simpan token dan arahkan ke halaman utama
        localStorage.setItem("token", data.token); // Menyimpan token di localStorage

        if (data.user.role === "admin") {
          window.location.href = "https://sipatir08.github.io/dashboard/" // Arahkan ke halaman utama atau dashboard
        } else if (data.user.role === "donatur") {
          navigate("/") // Arahkan ke halaman utama atau dashboard
        }
      } else {
        // Tampilkan pesan error jika login gagal
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
        <h2 className="login-title">Login</h2>
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
          {error && <p className="error-message">{error}</p>} {/* Tampilkan pesan error */}
          <button type="submit" className="login-btn">Login</button>
        </form>

        {/* Link ke halaman Register */}
        <p className="register-redirect">
          Don't have an account? <a href="/register">Register here</a>
        </p>
      </div>
    </div>
  );
};

export default Login;
