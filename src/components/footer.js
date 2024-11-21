// src/components/Footer.js
import React from 'react';
import '../assets/footer.css'; // Pastikan membuat CSS untuk Footer jika diperlukan

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-section">
          <h3>Kontak Kami</h3>
          <p>Email: yayasantaqwa@example.com</p>
          <p>Telepon: +62 123 456 789</p>
          <p>Alamat: Jalan Raya No. 123, Bandung</p>
        </div>
        <div className="footer-section">
          <h3>Informasi</h3>
          <ul>
            <li><a href="/about">Tentang Kami</a></li>
            <li><a href="/services">Layanan</a></li>
            <li><a href="/privacy-policy">Kebijakan Privasi</a></li>
          </ul>
        </div>
        <div className="footer-section">
          <h3>Sosial Media</h3>
          <ul className="social-links">
            <li><a href="https://facebook.com" target="_blank" rel="noopener noreferrer">Facebook</a></li>
            <li><a href="https://twitter.com" target="_blank" rel="noopener noreferrer">Twitter</a></li>
            <li><a href="https://instagram.com" target="_blank" rel="noopener noreferrer">Instagram</a></li>
          </ul>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; 2024 Yayasan Taqwa Al-Qolbi. Semua hak cipta dilindungi.</p>
      </div>
    </footer>
  );
}

export default Footer;
