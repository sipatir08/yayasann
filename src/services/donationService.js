import axios from 'axios';

const API_URL = 'https://yayasan-three.vercel.app'; // Ganti dengan URL backend Anda

// Fungsi untuk mendapatkan token
const getToken = () => {
  const token = localStorage.getItem('token');
  if (!token) {
    console.error("Token not found in localStorage!");
    return null;
  }
  console.log("Token:", token);  // Debugging token
  return token;
};

const axiosInstance = axios.create({
  headers: {
    'Authorization': `Bearer ${getToken()}`,  // Menambahkan token ke header
    'Content-Type': 'application/json',
  },
});

// Ekspor axiosInstance
export { axiosInstance };

// Fetch all donations
export const getAllDonations = async () => {
  try {
    const response = await axiosInstance.get(`${API_URL}/donations`);
    return response.data;
  } catch (error) {
    console.error('Error fetching donations:', error);
    throw error;  // Lempar kembali error agar bisa ditangani di tempat lain
  }
};

// Fetch donation by ID
export const getDonationById = async (id) => {
  try {
    const response = await axiosInstance.get(`${API_URL}/donations/${id}`);
    return response.data;
  } catch (error) {
    console.error('Error fetching donation by ID:', error);
    throw error;
  }
};

// Add new donation
export const addDonation = async (donation) => {
  console.log("Sending donation:", donation);  // Log data untuk memeriksa tipe
  try {
    // Pastikan jumlah adalah angka
    donation.jumlah = parseInt(donation.jumlah, 10);  // Mengonversi jumlah ke integer

    // Cek apakah konversi berhasil
    if (isNaN(donation.jumlah)) {
      throw new Error("Jumlah harus berupa angka.");
    }

    donation.tanggal = new Date().toISOString();  // Format tanggal ISO yang diterima backend

    const response = await axiosInstance.post(`${API_URL}/donations`, donation);
    console.log("Server response:", response.data);  // Log respons dari server
    return response.data;
  } catch (error) {
    console.error('Error adding donation:', error.response || error.message);
    throw error;
  }
};


// Update donation by ID
export const updateDonation = async (id, donation) => {
  try {
    const response = await axiosInstance.put(`${API_URL}/donations/${id}`, donation);
    return response.data;
  } catch (error) {
    console.error('Error updating donation:', error);
    throw error;
  }
};

// Delete donation by ID
export const deleteDonation = async (id) => {
  try {
    const response = await axiosInstance.delete(`${API_URL}/donations/${id}`);
    return response.data;
  } catch (error) {
    console.error('Error deleting donation:', error);
    throw error;
  }
};
