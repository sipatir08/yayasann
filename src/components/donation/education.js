import React, { useState, useEffect } from "react";
import "../../assets/detail.css"; // Pastikan path sesuai dengan struktur file Anda

const Education = () => {
  const [donations, setDonations] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("https://yayasan-three.vercel.app/donations/category/education")
      .then((response) => {
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        return response.json();
      })
      .then((data) => {
        setDonations(data);
        setLoading(false);
      })
      .catch((error) => {
        setError(error.message);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <p className="loading">Loading...</p>;
  }

  if (error) {
    return <p className="error">{error}</p>;
  }

  if (donations.length === 0) {
    return <p className="empty">Data tidak ditemukan untuk kategori Education.</p>;
  }


  return (
    <div className="donation-container">
      <h1 className="donation-title">Donasi Pendidikan</h1>
      <p className="donation-subtitle">Berikut adalah daftar donasi kategori pendidikan:</p>
      <ul className="donation-list">
        {donations.map((donation) => (
          <li key={donation.id} className="donation-item">
            <div className="donation-card">
              <h3 className="donation-donor">{donation.nama_donatur}</h3>
              <p className="donation-detail">
                <strong>Jumlah:</strong> Rp {donation.jumlah.toLocaleString()}
              </p>
              <p className="donation-detail">
                <strong>Tanggal:</strong> {new Date(donation.tanggal).toLocaleString()}
              </p>
              <p className="donation-description">
                <strong>Deskripsi:</strong> {donation.deskripsi || "Tidak ada deskripsi"}
              </p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Education;
