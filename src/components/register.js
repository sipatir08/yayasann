import React, { useState } from "react";
import { useNavigate } from "react-router-dom"; // untuk navigasi setelah registrasi
import "../assets/register.css"; // tambahkan styling sesuai kebutuhan
import axios from "axios";

const Register = () => {
  axios.defaults.withCredentials = true; ///
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate(); // untuk navigasi setelah sukses registrasi

  // Fungsi untuk handle form submission
  const handleRegister = async (e) => {
    e.preventDefault();
    setIsLoading(true);

    // Validasi input
    if (!email || !password) {
      setError("Email dan password harus diisi");
      setIsLoading(false);
      return;
    }

    const values = {
      email: email,
      password: password,
    };

    try {
      const response = await axios.post("http://localhost:8080/register", values, {
        withCredentials: true,
      });
      console.log(response.data);
      navigate("/login"); // Redirect ke halaman login setelah sukses
    } catch (error) {
      console.error(error.response || error.message);
      setError("Terjadi kesalahan. Coba lagi.");
      setIsLoading(false);
    }
    
  };

  return (
    <div className="register-container">
      <h2>Daftar Akun Baru</h2>
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
    </div>
  );
};

export default Register;
