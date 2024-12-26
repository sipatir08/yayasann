import React, { useState } from "react";
import Swal from "sweetalert2";
import "../assets/donation.css";

const Donation = () => {
  const [name, setName] = useState("");
  const [donationType, setDonationType] = useState("money");
  const [amount, setAmount] = useState("");
  const [item, setItem] = useState("");
  const [category, setCategory] = useState("");

  // Fungsi cek login
  const isLoggedIn = () => !!localStorage.getItem("token");

  const handleDonate = () => {
    // Cek apakah user sudah login
    if (!isLoggedIn()) {
      Swal.fire({
        icon: "warning",
        title: "Login Required",
        text: "Anda harus login terlebih dahulu untuk melakukan donasi.",
        confirmButtonText: "OK",
      });
      return; // Jangan lanjutkan jika belum login
    }

    // Validasi form
    if (!name || !category || (donationType === "money" && !amount) || (donationType === "goods" && !item)) {
      Swal.fire({
        icon: "error",
        title: "Incomplete Data",
        text: "Harap isi semua kolom sebelum melanjutkan.",
        confirmButtonText: "OK",
      });
      return;
    }

    // Success Alert
    if (donationType === "money") {
      Swal.fire({
        icon: "success",
        title: "Thank You!",
        text: `Terima kasih, ${name}, telah berdonasi sebesar Rp${amount} untuk kategori ${category}.`,
      });
    } else {
      Swal.fire({
        icon: "success",
        title: "Thank You!",
        text: `Terima kasih, ${name}, telah berdonasi barang "${item}" untuk kategori ${category}.`,
      });
    }
  };

  return (
    <div className="donation-container">
      <h2 className="donation-title">Make a Donation</h2>
      <p className="donation-text">Your contribution makes a difference. Thank you for your generosity!</p>

      <div className="donation-form">
        {/* Input Nama */}
        <div className="form-group">
          <label htmlFor="name">Name</label>
          <input
            type="text"
            id="name"
            placeholder="Your Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>

        {/* Pilihan Tipe Donasi */}
        <div className="form-group">
          <label>Donation Type</label>
          <div className="radio-group">
            <label>
              <input
                type="radio"
                value="money"
                checked={donationType === "money"}
                onChange={() => setDonationType("money")}
              />
              Uang
            </label>
            <label>
              <input
                type="radio"
                value="goods"
                checked={donationType === "goods"}
                onChange={() => setDonationType("goods")}
              />
              Barang
            </label>
          </div>
        </div>

        {/* Input Dinamis Berdasarkan Pilihan */}
        {donationType === "money" && (
          <div className="form-group">
            <label htmlFor="amount">Donation Amount</label>
            <input
              type="number"
              id="amount"
              placeholder="Enter Amount (Rp)"
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
            />
          </div>
        )}

        {donationType === "goods" && (
          <div className="form-group">
            <label htmlFor="item">Item to Donate</label>
            <input
              type="text"
              id="item"
              placeholder="Enter Item Name"
              value={item}
              onChange={(e) => setItem(e.target.value)}
            />
          </div>
        )}

        {/* Dropdown Kategori Donasi */}
        <div className="form-group">
          <label htmlFor="category">Donation Category</label>
          <select
            id="category"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
          >
            <option value="" disabled>Select Category</option>
            <option value="Education">Education</option>
            <option value="Health">Health</option>
            <option value="Food Assistance">Food Assistance</option>
          </select>
        </div>

        {/* Button Submit */}
        <button className="donate-button" onClick={handleDonate}>
          Donate Now
        </button>
      </div>
    </div>
  );
};

export default Donation;
