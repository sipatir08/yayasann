import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import "../assets/education.css";

const DonationDetail = () => {
  const { id } = useParams();
  const [donations, setDonations] = useState([]); // Mengubah menjadi array
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(`https://yayasan-three.vercel.app/category/${id}`)
      .then((response) => {
        if (!response.ok) {
          throw new Error(`Error: ${response.statusText}`);
        }
        return response.json();
      })
      .then((data) => {
        if (Array.isArray(data)) {
          setDonations(data); // Menyimpan semua data yang didapatkan
        } else {
          setDonations([]); // Jika tidak ada data
        }
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching donation details:", error);
        setLoading(false);
      });
  }, [id]);

  if (loading) {
    return <p className="loading">Loading...</p>;
  }

  if (donations.length === 0) {
    return <p className="error">Donation not found.</p>;
  }

  return (
    <div className="donation-detail">
      <h1 className="donation-title">{donations[0].kategori} Donation</h1>
      {donations.map((donation) => (
        <div className="donation-item" key={donation.id}>
          <p>
            <strong>Donor:</strong> {donation.nama_donatur}
          </p>
          <p>
            <strong>Amount:</strong>{" "}
            {donation.type === "barang"
              ? donation.jumlah
              : `Rp ${donation.jumlah.toLocaleString()}`}
          </p>
          <p>
            <strong>Date:</strong> {new Date(donation.tanggal).toLocaleString()}
          </p>
          <p>
            <strong>Description:</strong> Your donation supports{" "}
            {donation.kategori.toLowerCase()} initiatives.
          </p>
        </div>
      ))}
    </div>
  );
};

export default DonationDetail;
