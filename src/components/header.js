import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from "react-router-dom";
import '../assets/Header.css';
import logo from '../assets/images/logoril.png';

function Header() {
  const [isLoggedIn, setIsLoggedIn] = useState(false); // State login
  const navigate = useNavigate();

  useEffect(() => {
    // Cek token di localStorage
    const token = localStorage.getItem('token');
    setIsLoggedIn(!!token); // Set isLoggedIn berdasarkan keberadaan token
  }, []);

  const handleLogout = () => {
    localStorage.removeItem('token'); // Hapus token
    setIsLoggedIn(false); // Update state login
    navigate('/'); // Arahkan ke halaman Home
  };

  return (
    <>
      {/* Navbar */}
      <nav className="navbar">
        <div className="logo-container">
          <img src={logo} alt="Logo" className="logo" />
          <span className="logo-text">YAYASAN TAQWA AL-QOLBI</span>
        </div>
        <div className="nav-links">
          <Link to="/">Home</Link>
          <Link to="/donate">Donasi</Link>
          {isLoggedIn ? (
            <>
              <button className="logout-button" onClick={handleLogout}>Logout</button>
            </>
          ) : (
            <>
              <Link to="/login">Masuk</Link>
              <Link to="/register">Register</Link>
            </>
          )}
        </div>
      </nav>

      {/* Header dengan Background */}
      <header className="header">
        <div className="header-content">
          {/* Konten tambahan jika diperlukan */}
        </div>
      </header>
    </>
  );
}

export default Header;
