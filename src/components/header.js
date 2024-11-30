import React from 'react';
import { Link } from "react-router-dom"; // Gunakan Link untuk navigasi internal
import '../assets/Header.css';
import logo from '../assets/images/logoril.png'; // Path logo Anda

function Header() {
  return (
    <>
      {/* Navbar */}
      <nav className="navbar">
        <div className="logo-container">
          <img src={logo} alt="Logo" className="logo" />
          <span className="logo-text">YAYASAN TAQWA AL-QOLBI</span>
        </div>
        <div className="nav-links">
          <Link to="/">Home</Link>            {/* Gunakan Link untuk navigasi */}
          <Link to="/donate">Donasi</Link>    {/* Tambahkan navigasi donasi */}
          <Link to="/login">Masuk</Link>
          <Link to="/register">Register</Link>
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
