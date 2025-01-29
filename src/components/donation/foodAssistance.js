import React, { useState, useEffect } from "react";
import "../../assets/detail.css";

const FoodAssistance = () => {
  const [donations, setDonations] = useState([]); // Menyimpan array donasi
  const [error, setError] = useState(null); // Menangani error
  const [loading, setLoading] = useState(true); // Status loading

  useEffect(() => {
    // Melakukan fetch data dari API
    fetch("https://yayasan-three.vercel.app/donations/category/FoodAssistance")
      .then((response) => {
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        return response.json();
      })
      .then((data) => {
        console.log("Data yang diterima:", data);
        setDonations(data.donations); // Misalnya, jika data yang diterima memiliki properti 'donations'
        setLoading(false);
      })
      .catch((error) => {
        setError(error.message); // Menangani error
        setLoading(false); // Menandakan loading selesai
        console.error("Error fetching donations:", error); // Log error
      });
  }, []); // Hanya dijalankan sekali saat pertama kali render

  if (loading) {
    return <p className="loading">Loading...</p>; // Menampilkan loading selama data belum diterima
  }

  if (error) {
    return <p className="error">{error}</p>; // Menampilkan error jika terjadi masalah
  }

  if (donations.length === 0) {
    return (
      <p className="empty">
        Data tidak ditemukan untuk kategori Bantuan Makanan.
      </p>
    ); // Menampilkan pesan jika tidak ada data
  }

  return (
    <div className="donation-container">
      <h1 className="donation-title">Donasi Bantuan Makanan</h1>
      <p className="donation-subtitle">
        Berikut adalah daftar donasi kategori bantuan makanan:
      </p>
      {donations.length === 0 ? (
        <p className="empty">Tidak ada donasi untuk kategori ini.</p> // Menampilkan pesan jika tidak ada data
      ) : (
        <ul className="donation-list">
          {donations.map((donation) => (
            <li key={donation.id} className="donation-item">
              <div className="donation-card">
                <h3 className="donation-donor">{donation.nama_donatur}</h3>
                <p className="donation-detail">
                  <strong>Jumlah:</strong> Rp {donation.jumlah.toLocaleString()}
                </p>
                <p className="donation-detail">
                  <strong>Tanggal:</strong>{" "}
                  {new Date(donation.tanggal).toLocaleString()}
                </p>
                <p className="donation-description">
                  <strong>Deskripsi:</strong>{" "}
                  {donation.deskripsi || "Tidak ada deskripsi"}
                </p>
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default FoodAssistance;
