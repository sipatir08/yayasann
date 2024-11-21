import React from 'react';
// import { Link } from "react-router-dom";
import '../assets/Header.css';
import logo from '../assets/images/logoril.png'; // Ganti dengan path logo Anda

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
          <a href="/">Home</a>
          <a href="/login">Masuk</a>
          <a href="/register">Register</a>
        </div>
      </nav>

      {/* Header dengan Background */}
      <header className="header">
        <div className="header-content">
          {/* Anda bisa menambahkan konten lainnya di sini */}
        </div>
      </header>
    </>
  );
}

export default Header;