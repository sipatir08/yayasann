import React, { useState } from "react";
import { axiosInstance } from "../services/donationService"; // Menggunakan named import

const AddDonation = () => {
  const [donation, setDonation] = useState({
    nama_donatur: "",
    kategori: "",
    jumlah: "",
    type: "",
  });
  const [paymentProof, setPaymentProof] = useState(null); // State untuk file
  const [loading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const handleChange = (e) => {
    setDonation({ ...donation, [e.target.name]: e.target.value });
  };

  const handleFileChange = (e) => {
    setPaymentProof(e.target.files[0]); // Menyimpan file ke state
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setErrorMessage("");
    setLoading(true);

    // Validasi input sebelum dikirim ke backend
    if (!donation.nama_donatur || !donation.kategori || !donation.jumlah) {
      setErrorMessage("Semua kolom wajib diisi!");
      setLoading(false);
      return;
    }

    // Pastikan jumlah adalah integer sebelum dikirim
    const jumlahInt = parseInt(donation.jumlah, 10);
    if (isNaN(jumlahInt)) {
      setErrorMessage("Jumlah harus berupa angka!");
      setLoading(false);
      return;
    }

    if (!paymentProof) {
      setErrorMessage("Bukti pembayaran wajib dilampirkan!");
      setLoading(false);
      return;
    }

    // Kirim data dengan FormData untuk mencakup file
    const formData = new FormData();
    formData.append("nama_donatur", donation.nama_donatur);
    formData.append("kategori", donation.kategori);
    formData.append("jumlah", jumlahInt);
    formData.append("type", donation.type);
    formData.append("paymentProof", paymentProof);

    try {
      const response = await axiosInstance.post("/donations", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
      console.log(response); // Tambahkan log untuk melihat respons
      alert("Donasi berhasil ditambahkan!");
      setDonation({ nama_donatur: "", kategori: "", jumlah: "", type: "" });
      setPaymentProof(null); // Reset file
    } catch (error) {
      console.error("Error adding donation:", error);
      setErrorMessage(
        error.response?.data?.error || "Terjadi kesalahan saat menambahkan donasi."
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <h1>Tambah Donasi</h1>
      {errorMessage && <p style={{ color: "red" }}>{errorMessage}</p>}
      <form onSubmit={handleSubmit}>
        <div>
          <label>Nama Donatur:</label>
          <input
            type="text"
            name="nama_donatur"
            value={donation.nama_donatur}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label>Kategori:</label>
          <input
            type="text"
            name="kategori"
            value={donation.kategori}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label>Jumlah:</label>
          <input
            type="number"
            name="jumlah"
            value={donation.jumlah}
            onChange={(e) =>
              setDonation({
                ...donation,
                jumlah: e.target.value,
              })
            }
            required
          />
        </div>
        <div>
          <label>Tipe:</label>
          <select name="type" value={donation.type} onChange={handleChange}>
            <option value="uang">Uang</option>
            <option value="barang">Barang</option>
          </select>
        </div>
        <div>
          <label htmlFor="paymentProof">Upload Bukti Pembayaran</label>
          <input
            type="file"
            id="paymentProof"
            name="paymentProof"
            accept="image/*,application/pdf"
            onChange={handleFileChange}
            required
          />
        </div>
        <button type="submit" disabled={loading}>
          {loading ? "Menambahkan..." : "Tambah"}
        </button>
      </form>
    </div>
  );
};

export default AddDonation;
